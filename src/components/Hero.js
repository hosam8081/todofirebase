import React, { useEffect, useState } from "react";
import heroImg from "../images/bg-desktop-light.jpg";
import heroImgDark from "../images/bg-desktop-dark.jpg";
import checkImg from "../images/icon-check.svg";
import moonImg from "../images/icon-moon.svg";
import sunImg from "../images/icon-sun.svg";
import AddNew from "./AddNew";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useGlobalContext } from "../context/AuthContext";
import DeleteImg from "../images/icon-cross.svg";
import { FaEdit } from "react-icons/fa";
import { useTodoContext } from "../context/TodoContext";

const Hero = () => {
  const { user, list, setList, darkMode, setDarkMode } = useGlobalContext();
  const { setIsEdit, setText, checkTask } = useTodoContext();

  // fetch Data on every change
  useEffect(() => {
    const fetchData = async () => {
      // get my subCollection
      let collectionRef = collection(db, "data", user.uid, "checkout_sessions");
      // fetch data
      const unsub = onSnapshot(collectionRef, (querySnapshot) => {
        let list = [];
        querySnapshot.forEach((doc) => {
          // console.log("Id: ", doc.id, "Data: ", doc.data());
          list.push({ id: doc.id, ...doc.data() });
        });
        setList(list);
      });
    };
    fetchData();
  }, []);

  // DELETE:- to delete a Specifec task
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await deleteDoc(doc(db, "data", user.uid, "checkout_sessions", id));
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE:- to update a task
  const handleUpdate = (id) => {
    setIsEdit(id);
    setText(list.filter((li) => li.id == id)[0].text);
  };
  return (
    <div className={`relative ${darkMode && "dark"}`}>
      <div className="h-[300px] w-full">
        {darkMode ? (
          <img src={heroImgDark} alt="heroimg" className="w-full h-full" />
        ) : (
          <img src={heroImg} alt="heroimg" className="w-full h-full" />
        )}
      </div>
      <div className="container absolute py-24 top-0 left-1/2 -translate-x-1/2">
        <div className="">
          <div className="flex justify-between">
            <h1 className="uppercase head mb-8 text-3xl sm:text-5xl font-bold text-white dark:text-black-5 fw-bold">
              todo
            </h1>
            {darkMode ? (
              <img
                src={sunImg}
                className="absolute right-0 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <img
                src={moonImg}
                className="absolute right-0 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </div>
          <AddNew />
        </div>
        <div className="mt-5">
          {list &&
            list.map((li) => {
              return (
                <div className="relative" key={li.id}>
                  <span
                    className={`checkbox ${li.complated ? "checked" : ""}`}
                    onClick={() => checkTask(li.id)}
                  >
                    {li.complated && (
                      <img src={checkImg} className="hero-center" />
                    )}
                  </span>
                  <div className="item flex justify-between items-center w-full py-4 px-12 rounded-md outlin e-0 bg-white border-b  dark:text-black-7 dark:bg-black-1 border-b-gray-2 dark:border-b-gray-5">
                    {li.text}
                    <div className="flex items-center">
                      <img
                        src={DeleteImg}
                        className="cursor-pointer mr-3 w-[15px] h-[15px] opacity-0 invisible"
                        onClick={() => handleDelete(li.id)}
                      />
                      <button
                        className="cursor-pointer w-[15px] h-[15px] opacity-0 invisible"
                        onClick={() => handleUpdate(li.id)}
                      >
                        <FaEdit />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
