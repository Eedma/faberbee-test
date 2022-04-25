import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="My blog with nextjs and typescript"
                    />
                    <meta name="keywords" content="next typescript seo" />
                    <meta name="author" content="Edoardo Marzorati" />
                    <link rel="stylesheet" href="/static/styles.css" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
