import { ITopic } from "../models/course.model";
import { courseStore } from "../store/courseStore";
import { ApiAuthDelete, ApiAuthPost } from "./ApiService";

export async function addTopic(topic:ITopic) {
    await ApiAuthPost("Course/AddNewTopic",topic).then((resp) =>{});
    await courseStore.getCourseById('6');
}

export async function deleteTopic(topicId:number) {
    await ApiAuthDelete(`Course/DeleteTopic?topicId=${topicId}`,"");
    await courseStore.getCourseById('6');
  }