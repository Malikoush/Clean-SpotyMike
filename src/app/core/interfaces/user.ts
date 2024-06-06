export interface IUser {
  idDocument: string;
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  dateBirth: string;
  createdAt: string;
  updatedAt: string;
  tel?: string;
  sexe?: string;
  following?: IArtist[];
  playlist?: IPlaylist;
  artist?: IArtist;
}

export interface IArtist {
  idDocument: string;
  _id: string;
  fullname: string;
  avatar: string;
  active: boolean;
  followers?: IUser[];
  description?: string;
  albums?: IAlbum[];
}

export interface IAlbum {
  idDocument: string;
  _id: string;
  nom: string;
  categ: string[];
  cover: string;
  year: string;
  createdAt: string;
  updatedAt: string;
  song: ISong[];
  label: ILabel;
  visibility: boolean;
}

export interface ISong {
  idDocument: string;
  _id: string;
  title: string;
  url: string;
  cover: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
  visibility: boolean;
}

export interface ILabel {
  idDocument: string;
  _id: string;
  nom: string;
}

export interface IPlaylist {
  idDocument: string;
  _id: string;
  title: string;
  public: boolean;
  song: string[];
}

// type ERoleUser = 'user' | 'artist';

// export interface IUser {
//   isEmailVerified: boolean;
//   role: ERoleUser;
//   email: string;
//   name: string;
//   id: string;
// }
// export interface IAcessToken {
//   token: string;
//   expire: string | Date;
// }
// export interface IToken {
//   acess: IAcessToken;
//   refresh: IAcessToken;
// }
