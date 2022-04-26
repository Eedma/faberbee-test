import { NextPage } from "next";
import Error from "./_error";
import ArticleBlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Image from "next/image";
import { useState } from "react";
import { PostData, UsersData } from "../utils/types";
import { fetchPosts, fetchUsers } from "../utils/fetchers";

interface Data {
  posts: PostData[];
  users: UsersData[];
}
interface BlogProps {
  posts: PostData[];
}
const Home: NextPage<BlogProps> = ({ posts }: BlogProps) => {
  /* const [posts, setPosts] = useState([]);

  const setPostsHandler = () => {}; */

  if (posts.length === 0) {
    return <Error message="Could not load blogs, Please try later" />;
  }

  return (
    <Layout>
      <Hero />
      <Blog>
        {posts.map((e: PostData, i: number) => (
          <ArticleBlogCard post={e} key={i} />
        ))}
      </Blog>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const posts = await fetchPosts();
  /* const users = await fetchUsers();
  const data = { ...posts, ...users };
  console.log(data); */
  return posts;
};

export default Home;
