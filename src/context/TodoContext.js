import React, { useState, useContext, useEffect } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useGlobalContext } from "./AuthContext";

const TodoContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [complated, setComplated] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const { user, list,setList } = useGlobalContext();

  // handle Submit : to add or edit a new task
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      // to Add task : if value no empty and it's not edit task
      if (text !== "" && isEdit === null) {
        const docRef = doc(db, "data", user.uid);
        const colRef = collection(docRef, "checkout_sessions");
        const test = await addDoc(colRef, {
          text,
          complated,
        });
        setText("");
      }
      // to edit task
      else if (isEdit !== null) {
        console.log("yes");
        const washingtonRef = doc(db, "data", user.uid, "checkout_sessions", isEdit);
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
          text,
        });
        setText("");
        setIsEdit(null)
      } else {
        setText("");
        setError("no value, please add task");
      }
    } catch (e) {
      console.error("Error adding document: ");
      console.log(user);
    }
  };

  const checkTask = async (id) => {
    // let newData = list.map(li => li.id == id ? {...li, complated: !li.complated} : li);
    // setList(newData);
    const washingtonRef = doc(db, "data", user.uid, "checkout_sessions", id);
    await updateDoc(washingtonRef, {
      complated: !list.filter(li => li.id == id)[0].complated,
    });
  }
  return (
    <TodoContext.Provider
      value={{
        val: "hello",
        text,
        complated,
        handleAdd,
        error,
        setText,
        setIsEdit,
        checkTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, TodoContextProvider };
