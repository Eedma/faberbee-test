import Error from "./_error";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import { PostData, UserData, BlogData } from "../utils/types";
import { fetchPosts, fetchUsers, blogDataHandler } from "../utils/helpers";

interface BlogProps {
  posts: PostData[];
  users: UserData[];
}

const Home = ({ posts, users }: BlogProps) => {
  const blogData: BlogData[] = blogDataHandler(posts, users);

  if (posts.length === 0) {
    return <Error message="Could not load blogs, Please try later" />;
  }

  return (
    <Layout>
      <Hero />
      <Blog>
        {blogData.map((post: BlogData, i: number) => (
          <BlogCard post={post} key={i} />
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
