import React, { useState } from "react";

const Newform = ({ onBodySubmit, onTitleSubmit }) => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState(""); 

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    onBodySubmit(e.target.value); 
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onTitleSubmit(e.target.value);
  };

  return (
    <form className="bg-slate-600 p-4 w-80 mx-auto rounded-md shadow-md">
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100 font-bold">
          Body
        </label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-slate-50 text-gray-800"
        ></textarea>
      </p>
      <p>
        <label htmlFor="title" className="block mb-1 text-purple-100 font-bold">
          Your Title
        </label>
        <textarea
          id="title"
          value={title}
          onChange={handleTitleChange} 
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-slate-50- text-gray-800"
        ></textarea>
      </p>
    </form>
  );
};

export default Newform;