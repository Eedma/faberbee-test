import { NextPage } from "next";
import Error from "./_error";
import ArticleBlogCard, { PostData } from "../components/BlogCard";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Image from 'next/image'


interface BlogProps {
    data: PostData[]
}
const Home: NextPage<BlogProps> = ({ data }: BlogProps) => {

    if (data.length === 0) {
        return <Error message="Could not load blogs, Please try later" />;
    }

    return (
        <Layout>
            <Hero>
                
                {/* <Image
            src="/static/hero.jpeg"
            layout='fill'
            objectFit='cover' /> */}
            </Hero>
            <Blog>
                {data.map((b, i) => (
                    <ArticleBlogCard post={b} key={i} />
                ))}
            </Blog>

        </Layout>
    )
}

Home.getInitialProps = async () => {
    let data;
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        data = await res.json();
        console.log("Number of blogs: ", data.length, data);
    } catch (err) {
        console.log("ERROR", err);
        data = [];
    }
    return {
        data
    };
};

export default Home;