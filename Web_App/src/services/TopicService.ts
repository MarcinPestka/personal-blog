import { ITopic } from "../models/course.model";
import { courseStore } from "../store/courseStore";
import { editingCourseStore } from "../store/editingCourseStore";
import { ApiAuthDelete, ApiAuthPost, ApiAuthPut } from "./ApiService";

export async function addTopic(topic: ITopic) {
  await ApiAuthPost("Topic/AddNewTopic", topic).then((response) => {
    courseStore.course.lectures.find(x => x.id === courseStore.activeLectureId)!.topics = response.data;
  });
  await courseStore.getCourseById(courseStore.course.id);
}

export async function deleteTopic(topicId: number) {
  await ApiAuthDelete(`Topic/DeleteTopic?topicId=${topicId}`, "").then((response)=>{
    courseStore.course.lectures.find(x => x.id === courseStore.activeLectureId)!.topics = response.data;
  });
}

export async function editTopic(topic:ITopic){
  await ApiAuthPut("Topic/EditTopic",topic).then((response)=>{
    courseStore.course.lectures.find(x => x.id === courseStore.activeLectureId)!.topics = OrderTopics(response.data);
  });
}

export function OrderTopics(topics: ITopic[]) {
  topics = topics.sort((n1, n2) => {
    if (n1.order == null || n1.order > (n2.order ?? Infinity)) {
      return 1;
    }
    return -1;
  });
  return topics;
}

