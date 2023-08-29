import { ITopic } from "../models/course.model";
import { ISection } from "../models/section.model";
import { courseStore } from "../store/courseStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export async function addTopic(topic: ITopic) {
  await ApiAuthPost("Course/AddNewTopic", topic).then((resp) => {
    let newTopic = resp.data as ITopic;
    courseStore.topicId = newTopic.id;
    courseStore.lectureId = newTopic.lectureId;
  });
  await courseStore.getCourseById(courseStore.course.id);
  
}

export async function deleteTopic(topicId: number) {
  await ApiAuthDelete(`Course/DeleteTopic?topicId=${topicId}`, "");
  await courseStore.getCourseById(courseStore.course.id);
}

export function OrderTopics(topics: ITopic[]) {
  topics = topics.sort((n1, n2) => {
    if (n1.topicOrder == null || n1.topicOrder > (n2.topicOrder ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return topics;
}
function setActiveLectureId() {
    throw new Error("Function not implemented.");
}

