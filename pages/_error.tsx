import { NextPage } from "next";

interface ErrorProps {
    message: string
}

const Error: NextPage<ErrorProps> = ({ message }: ErrorProps) => (
    <div>
        <div>
            <p>{message}</p>
        </div>
    </div>
);

export default Error;
