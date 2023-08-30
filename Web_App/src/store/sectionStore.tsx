import { makeAutoObservable, runInAction } from "mobx";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";
import { ApiGet } from "../services/ApiService";
import { editingCourseStore } from "./editingSectionsStore";
import { courseStore } from "./courseStore";
import { AddNewSection } from "../services/SectionService";

export class SectionsStore {
  sections: ISection[] = [];
  posts: IPost[] = [];
  post: IPost = {} as IPost;
  newSection: ISection = {} as ISection;

  constructor() {
    makeAutoObservable(this);
  }

  getPostById = async (Id: string | undefined) => {
    await ApiGet("Post?=" + Id).then((resp) => {
      let post: IPost = resp.data;
      runInAction(() => {
        this.post = post;
      })
    });
  };

  getAllSectionsAsync = async (Id: string | undefined) => {
    await ApiGet("Post?Id=" + Id).then((resp) => {
      let post: IPost = resp.data;
      runInAction(() => {
        this.sections = post.sections;
      })
    });
  };

  getAllPosts = async () => {
    await ApiGet("Post/GetAllPosts").then((resp) => {
      let posts: IPost[] = resp.data;
      runInAction(() => {
      this.posts = posts;
      })
    });
  };

  GetFeaturedPosts = async () => {
    await ApiGet("Post/GetFeaturedPosts").then((resp) => {
      let posts: IPost[] = resp.data;
      runInAction(() => {
        this.posts = posts;
      })
    });
  };

  AddNewSection = async () => {
    this.newSection.topicId = courseStore.activeTopicId;
    this.newSection.postId = 1;
    this.newSection.sectionType = editingCourseStore.newSectionType;
    this.newSection.title = editingCourseStore.editingSection.title;
    this.newSection.subTitle = editingCourseStore.editingSection.subTitle;
    this.newSection.sectionOrder = editingCourseStore.editingSection.sectionOrder;
    await AddNewSection(this.newSection);
    editingCourseStore.newSectionStage = undefined;
    editingCourseStore.newSectionType = undefined;
    editingCourseStore.editing = false;
  }
}

export const sectionStore = new SectionsStore();
