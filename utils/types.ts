export interface PostData {
  userId?: number;
  id?: number | string | number | null | undefined;
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
