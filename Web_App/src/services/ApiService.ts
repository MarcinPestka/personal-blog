import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";

const apiUrl = "https://localhost:7143";

export async function ApiGet(params: any) {
  return axios({
    method: "get",
    url: `${apiUrl}/${params}`,
  });
}

export async function ApiGetAuth(params: any) {
  const token = localStorage.getItem("token");
  return axios({
    method: "get",
    url: `${apiUrl}/${params}`,
    headers:{
      Authorization:`${token}`,
    }
  });
}

export async function ApiAuthPost(params: any, payload:any) {
  const token = localStorage.getItem("token");
  return axios({
    method: "post",
    data:payload,
    url: `${apiUrl}/${params}`,
    headers:{
      Authorization:`${token}`,
      "Content-Type":"application/json"
    }
  });
}

export async function ApiAuthDelete(params: any, payload:any) {
  const token = localStorage.getItem("token");
  return axios({
    method: "delete",
    data:payload,
    url: `${apiUrl}/${params}`,
    headers:{
      Authorization:`${token}`,
      "Content-Type":"application/json"
    }
  });
}

  export async function ApiPost(params: any, payload:any) {
  return axios({
    method: "post",
    data:payload,
    url: `${apiUrl}/${params}`,
  });
}
