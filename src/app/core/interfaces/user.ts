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
  arttistId?: string;
  avatar: string;
  active: boolean;
  followers?: IUser[];
  description?: string;
  albums?: IAlbum[];
  like: number;
}

export interface IAlbum {
  idDocument: string;
  albumId?: string;
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
  like: number;
}

export interface ISong {
  idDocument: string;
  songId?: string;
  _id: string;
  title: string;
  url: string;
  cover: string;
  lyrics: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
  visibility: boolean;
  idArtist: string;
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
