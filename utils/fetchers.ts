import { PostData, UsersData } from "../utils/types";

export const fetchPosts = async () => {
  let posts: PostData[];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await res.json();
    console.log("Number of blogs: ", posts.length, posts);
  } catch (err) {
    console.log("ERROR", err);
    posts = [];
  }
  return {
    posts,
  };
};

export const fetchUsers = async () => {
  let users: UsersData[];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    console.log("Number of users: ", users.length, users);
  } catch (err) {
    console.log("ERROR", err);
    users = [];
  }
  return {
    users,
  };
};
