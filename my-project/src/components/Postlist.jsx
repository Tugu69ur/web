import React from "react";
import Post from "./Post";

const Postlist = ({ bodyText, titleText }) => {
  return (
    <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center">
      <Post title={titleText || "Type a title above!"} body={bodyText || "Type something above!"} />
      <Post title={"JavaScript"} body={"JavaScript is awesome!"} />
    </ul>
  );
};

export default Postlist;