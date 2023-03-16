import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primary-black">
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
