"use client";
import { TiGroup } from "react-icons/ti";

import { useEffect, useState } from "react";
import { IoMdChatboxes } from "react-icons/io";

const ChatRoomlist = () => {
  const [roomlist, setRoomlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRoomlist(data?.data));
  }, []);

  console.log(roomlist);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div className="border px-5 py-4 text-2xl gap-4 font-bold w-full rounded-md  flex items-center bg-red-300">
          <IoMdChatboxes className="text-3xl" /> <h1>All chat room list</h1>
        </div>
        <div className="border px-5 py-3 text-2xl gap-4 font-bold w-full rounded-md  flex justify-between items-center bg-red-300">
          <input
            className="bg-transparent w-36 md:w-full border text-xl font-normal outline-none px-2 rounded-md"
            placeholder="Create a new chat room"
            type="text"
          ></input>
          <button className="border md:w-[50%] lg:w-[30%] rounded-full hover:bg-red-100 p-2 text-sm ">
            Create room
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
        {roomlist.map((data) => (
          <div
            className="border rounded-md p-1 flex items-center bg-red-300"
            key={data.id}
          >
            <TiGroup className="text-2xl" />
            <button className="py-2 px-3">{data.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomlist;
