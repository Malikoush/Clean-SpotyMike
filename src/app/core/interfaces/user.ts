type ERoleUser = 'user'|'artist';

export interface IUser {

    isEmailVerified: boolean;
    role: ERoleUser;
    email: string;
    name: string;
    id: string;
  }

  export interface IAcessToken {

    token: string;
    expire: string|Date;
  }
  export interface IToken {


    acess: IAcessToken;
    refresh: IAcessToken;
  }