import React from "react";

const Post = ({ title, body }) => {
  return (
    <div className="my-4 p-4 bg-slate-400 rounded-lg shadow-md animate-fadeIn">
      <h1 className="text-xs font-bold text-black uppercase m-0 text-center">
        {title}
      </h1>
      <p className="whitespace-pre-wrap text-xl my-1 text-black italic text-center">
        {body}
      </p>
    </div>
  );
};

export default Post;