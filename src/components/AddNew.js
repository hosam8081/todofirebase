import React, { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useTodoContext } from "../context/TodoContext";


const AddNew = () => {
  const {handleAdd, text, complated, error, setText} = useTodoContext()
  return (
    <form className="relative" onSubmit={(e) => handleAdd(e)}>
      <span className="checkbox dark:text-black-2"></span>
      <input
        id="text"
        type="text"
        placeholder="type a new todo..."
        className="w-full py-4 px-12 rounded-md outline-0 dark:bg-black-1 dark:text-black-7"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default AddNew;
