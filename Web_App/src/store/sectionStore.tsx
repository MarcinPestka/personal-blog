import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import axios from "axios";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";

export class SectionsStore {
  sections: ISection[] = [];
  posts: IPost[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getAllSectionsAsync = async (Id: string | undefined) => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Post?Id=" + Id,
    }).then((resp) => {
      let post: IPost = resp.data;
      this.sections = post.sections;
    });
  };

  getAllPosts = async () => {
    await axios({
      method: "get",
      url: "https://localhost:7143/Post/GetAllPosts",
    }).then((resp) => {
      let posts: IPost[] = resp.data;
      this.posts = posts;
    });
  };

}

export const sectionStore = new SectionsStore();
