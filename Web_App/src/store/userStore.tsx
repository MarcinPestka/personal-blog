import { makeAutoObservable, runInAction } from "mobx";
import { ApiGet, ApiGetAuth, ApiPost } from "../services/ApiService";
import { User } from "../models/User.model";

export class UserStore {
  user!: User;
  loggedIn!: boolean;

  constructor() {
    makeAutoObservable(this);
    if (localStorage.getItem('token')) {
        this.loggedIn = true;
    }
  }

  GetUserDetails = async () => {
    await ApiGetAuth("Auth/GetUserDetails").then((resp) => {
      let user: User = resp.data;
      runInAction(() => {
        this.user = user;
      })
    }).catch(()=>{
      localStorage.removeItem('token');
      this.loggedIn = false;
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

  Register = async (test: any) => {
    await ApiPost("Auth/Register",test).then((resp) =>{
        localStorage.setItem("token", `bearer ${resp.data}`);
        runInAction(() => {
          this.loggedIn = true;
        })
    })
  }
}

export const userStore = new UserStore();
