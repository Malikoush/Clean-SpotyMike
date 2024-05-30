import { IToken, IUser } from "./user";

export interface LoginRequestError {
    code?: number;
    error: boolean;
    message: string;
  }

  export interface LoginRequestSucess {
    code?: number;
    error: boolean;
    user:IUser
    token:IToken
  }