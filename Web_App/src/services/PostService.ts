import { ICourse, ILecture } from "../models/course.model";
import { IPost } from "../models/post.model";
import { courseStore } from "../store/courseStore";
import { postStore } from "../store/postStore";
import { sectionStore } from "../store/sectionStore";
import { ApiAuthPost } from "./ApiService";

export async function AddNewPost(post:IPost) {
    await ApiAuthPost("Post/AddPost", post).then((resp)=>{
        postStore.posts.push(resp.data);
    });
}
