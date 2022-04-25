import Link from "next/link";
import { NextPage } from "next";
import Error from "./_error";


interface PostData {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface BlogProps {
    data: PostData[]
}
const Blog: NextPage<BlogProps> = ({data}) => {

    if (data.length === 0) {
        return <Error message="Could not load blogs, Please try later" />;
    }

    return(
        <div>
            <h1>my super duper blog</h1>

            {data.map((b, i) => (
                <Link as={`/article/${b.id}`} href={`/article/?id=${b.id}`} key={i}>
                    <h4>{b.title}</h4>
                </Link>
            ))}
        </div>
    )
}

Blog.getInitialProps = async () => {
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

export default Blog;