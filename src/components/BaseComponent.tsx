import { Section } from "../services/SectionService";
import { TextComponent } from "./TextComponent";
import { TitleComponent } from "./TitleComponent";

export function BaseComponent(props: Section) {
  var Component = <TitleComponent {...props}></TitleComponent>;

  (() => {
    switch (props.type) {
      case 1:
        Component = <TitleComponent {...props}></TitleComponent>;
        break;
      case 2:
        Component = <TextComponent {...props}></TextComponent>;
        break;
    }
  })();

  return Component;
}
