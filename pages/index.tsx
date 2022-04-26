import Error from "./_error";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import { PostData, UserData, BlogData } from "../utils/types";
import { fetchPosts, fetchUsers, blogDataHandler } from "../utils/helpers";
import { NextPage } from "next";

interface BlogProps {
  posts: PostData[];
  users: UserData[];
}

const Home: NextPage<BlogProps> = ({ posts, users }) => {
  const blogData: BlogData[] = blogDataHandler(posts, users);

  if (posts.length === 0) {
    return <Error message="Could not load blogs, Please try later" />;
  }

  if (users.length === 0) {
    return <Error message="Could not load users, Please try later" />;
  }

  return (
    <Layout>
      <Hero />
      <Blog>
        {blogData.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </Blog>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const posts = await fetchPosts();
  const users = await fetchUsers();
  return { ...posts, ...users };
};

export default Home;
