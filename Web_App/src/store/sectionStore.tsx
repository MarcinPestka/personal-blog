import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";
import { ApiGet } from "../services/ApiService";

export class SectionsStore {
  sections: ISection[] = [];
  posts: IPost[] = [];
  post: IPost = {} as IPost;

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
}

export const sectionStore = new SectionsStore();
