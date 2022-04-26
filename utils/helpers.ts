import { PostData, UserData } from "./types";

export const fetchPosts = async () => {
  let posts: PostData[];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await res.json();
    /* console.log("Number of blogs: ", posts.length, posts); */
  } catch (err) {
    console.log("ERROR", err);
    posts = [];
  }
  return {
    posts,
  };
};

export const fetchUsers = async () => {
  let users: UserData[];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    /* console.log("Number of users: ", users.length, users); */
  } catch (err) {
    console.log("ERROR", err);
    users = [];
  }
  return {
    users,
  };
};

export const blogDataHandler = (posts: PostData[], users: UserData[]) => {
  console.log(posts);
  const blogData: any[] = posts.map((post: PostData, i: number) => {
    for (let x = 0; x < users.length; x++) {
      if (post.userId === users[x].id) {
        return { ...post, name: users[x].name };
      }
    }
  });
  return blogData;
};
