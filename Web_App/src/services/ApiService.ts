import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";

const apiUrl = "https://localhost:7143";

export async function ApiGet(params: any) {
  return axios({
    method: "get",
    url: `${apiUrl}/${params}`,
  })
}