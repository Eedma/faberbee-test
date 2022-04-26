export interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserData {
  id: number;
  name: string;
}

export interface BlogData extends PostData {
  name: string;
}
