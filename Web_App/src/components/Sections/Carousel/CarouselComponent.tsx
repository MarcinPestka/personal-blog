import { useEffect, useState } from "react";
import { CarouselTile } from "./CarouselTile";
import { courseStore } from "../../../store/courseStore";
import { Observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export interface ICarouselItem {
  id: number;
  color: string;
  title: string;
  subTitle: string;
}

export function CarouselComponent() {
  const store = courseStore;

  const movePixels = 668;

  const [startPageX, setStartPageX] = useState(0);
  const [carouselId, setId] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [pixels, setpixels] = useState(
    -(carouselId * movePixels) + (window.innerWidth - 2000) / 2
  );

  function handleResize() {
    setpixels(-(carouselId * movePixels) + (window.innerWidth - 2000) / 2);
  }

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    (async () => {
      await store.getAllCourses();
    })();
  }, []);

  const changeTile = (id: number) => {
    setId(id);
    setpixels(-(id * movePixels) + (window.innerWidth - 2000) / 2);
  };

  function dragStart(e) {
    setStartPageX(e.pageX);
  }

  const moveRight = () => {
    setId(carouselId + 1);
    setpixels(pixels - movePixels);

    if (carouselId === store.courses.length) {
      setId(carouselId + 1);
      setpixels(pixels - movePixels);

      setTimeout(() => {
        setAnimate(false);
        setId(1);
        setpixels(-movePixels + (window.innerWidth - 2000) / 2);
      }, 400);

      setTimeout(() => {
        setAnimate(true);
      }, 800);
    }
  };

  const moveLeft = () => {
    setId(carouselId - 1);
    setpixels(pixels + movePixels);

    if (carouselId - 1 === 0) {
      setId(carouselId - 1);
      setpixels(pixels + movePixels);

      setTimeout(() => {
        setAnimate(false);
        setId(store.courses.length);
        setpixels(pixels + (store.courses.length - 1) * -movePixels);
      }, 400);

      setTimeout(() => {
        setAnimate(true);
      }, 800);
    }
  };

  const dragStop = (e) => {
    if (Math.abs(startPageX - e.pageX) > 150) {
      if (startPageX > e.pageX) {
        moveRight();
      } else {
        moveLeft();
      }
    }
  };

  return (
    <Observer>
      {() => (
    <>
      <div className="wrapper">
        <div
          draggable={false}
          className={animate ? "carousel" : "carousel noAnimation"}
          style={{ left: `${pixels}px` }}
          onMouseUp={dragStop}
          onTouchEnd={dragStop}
        >
          <CarouselTile
            course={store.courses[store.courses.length - 2]}
            index={-2}
            {...{ carouselId, dragStart}}
          ></CarouselTile>
          <CarouselTile
            course={store.courses[store.courses.length - 1]}
            index={-1}
            {...{ carouselId, dragStart }}
          ></CarouselTile>

          {store.courses.map((course, index) => {
            index+=1;
            return (
              <CarouselTile key={index}
                {...{ course, carouselId, dragStart, index }}
              ></CarouselTile>
            );
          })}

          <CarouselTile
            course={store.courses[0]}
            index={1}
            {...{ carouselId, dragStart }}
          ></CarouselTile>
          <CarouselTile
            course={store.courses[1]}
            index={2}
            {...{ carouselId, dragStart }}
          ></CarouselTile>
        </div>
        <div className="indicators">
          {store.courses.map((item, index) => {
            return (
              <div
                key={index}
                className={index+1 === carouselId ? "dot selected" : "dot"}
                onClick={() => {
                  changeTile(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
      )}
    </Observer>
  );
}
