"use client";
import React, { useEffect, useState } from "react";
import { TiGroup } from "react-icons/ti";

const ChatRoom = ({ id }) => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/rooms/${id}/messages`)
      .then((res) => res.json())
      .then((data) => setMessage(data.data));
  }, [id]);
  console.log(message);
  return (
    <div className="h-screen">
      <div className="flex items-center gap-5 py-3 px-3">
        <TiGroup className="text-3xl" />
        <h1 className="text-3xl">Chat room</h1>
      </div>
      <div className="flex h-[89vh] w-full flex-col justify-between">
        <div className=" h-[90%] flex flex-col p-5 w-full overflow-y-scroll">
          {message.map((data) => (
            <div className="flex items-center justify-between" key={data.id}>
              <div className="flex items-center gap-5">
                <h1 className="text-xl">{data?.message_author_name}:</h1>
                <p title={`${data?.created_at.slice(0,10)}, ${data?.created_at.slice(11,19)}`}>{data?.message_text}</p>

              </div>
              
            </div>
          ))}
        </div>
        <div className=" h-[10%] w-full">
          <form className="flex">
            <input
              className="py-4 outline-none border px-5 w-[70%] lg:w-[90%]"
              type="text"
              placeholder="Send message"
            />
            <input
              className="w-[30%] lg:w-[10%] border-b bg-red-400 px-3"
              type="submit"
              value={"Send"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
