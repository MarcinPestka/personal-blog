import { makeAutoObservable, runInAction } from "mobx";
import { ApiGet, ApiPost } from "../services/ApiService";
import { IUser } from "../models/User.model";

export class UserStore {
  user!: IUser;
  loggedIn!: boolean;

  constructor() {
    makeAutoObservable(this);
    if (localStorage.getItem('token')) {
        this.loggedIn = true;
    }
  }

  GetCurrentUser = async () => {
    await ApiGet("Auth/GetUserId").then((resp) => {
      let user: IUser = resp.data;
      runInAction(() => {
        this.user = user;
      })
    });
  };

  Login = async (test: any) => {
    await ApiPost("Auth/Login",test).then((resp) =>{
        localStorage.setItem("token", `bearer ${resp.data}`);
        runInAction(() => {
          this.loggedIn = true;
        })
    })
  }
}

export const userStore = new UserStore();
