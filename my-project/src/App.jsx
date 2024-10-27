import React, { useState } from "react";
import Postlist from "./components/Postlist";
import Newform from "./components/Newform";

export default function App() {
  const [enteredBody, setEnteredBody] = useState(""); 
  const [enteredTitle, setEnteredTitle] = useState(""); 

  const handleNewBody = (body) => {
    setEnteredBody(body); 
  };

  const handleNewTitle = (title) => {
    setEnteredTitle(title); 
  };

  return (
    <div className="">
      <Newform 
        onBodySubmit={handleNewBody} 
        onTitleSubmit={handleNewTitle} 
      /> 
      <Postlist 
        bodyText={enteredBody} 
        titleText={enteredTitle} 
      /> 
    </div>
  );
}