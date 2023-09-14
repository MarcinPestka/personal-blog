import { makeAutoObservable, runInAction } from "mobx";
import { IPost } from "../models/post.model";
import { ApiGet } from "../services/ApiService";
import { SectionsStore, sectionStore } from "./sectionStore";
import { OrderSections } from "../services/SectionService";

export class PostStore {
  posts: IPost[] = [];
  post: IPost = {} as IPost;
  newPost: IPost = {} as IPost;

  constructor() {
    makeAutoObservable(this);
  }

  getPostById = async (Id: string | undefined) => {
    await ApiGet(`Post?Id=${Id}`).then((resp) => {
        runInAction(() => {
            this.post = resp.data;
            sectionStore.sections = OrderSections(this.post.sections);
        });
    });
  };

  getAllPosts = async () => {
    await ApiGet("Post/GetAllPosts").then((resp) => {
      this.posts = resp.data;
    });
  };

  GetFeaturedPosts = async () => {
    await ApiGet("Post/GetFeaturedPosts").then((resp) => {
        this.posts = resp.data;
    });
  };
}

export const postStore = new PostStore();
