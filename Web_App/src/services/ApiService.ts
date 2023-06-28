import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/post.model";
import { ISection } from "../models/section.model";

const apiUrl = 'https://localhost:7143';
const responseBody = <T> (response: AxiosResponse<T>) => response.data;


function ApiCall(params:any) {
    axios({
        method: 'get',
        url: apiUrl + params,
    })
    .then(responseBody)
    .catch(err=>{
        return err;
    });
}

export function getPostById(Id: string | undefined) {
    return ApiCall("test");
}

export async function getSectionsByPostId(Id: string | undefined) {
    axios({
        method: 'get',
        url: apiUrl + '/Post?Id='+Id,
    })
}