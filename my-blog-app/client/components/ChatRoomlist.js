import { TiGroup } from "react-icons/ti";

import { useEffect, useState } from "react";
import { IoMdChatboxes } from "react-icons/io";
import Link from "next/link";

const ChatRoomlist = () => {
  const [roomlist, setRoomlist] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  //=========== fatching all chatroomlist data ===============
  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then((res) => res.json())
      .then((data) => setRoomlist(data.data));
  }, [isLoad]);

  //============ chatroom create function ==============
  const handleCreateChatRoom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    fetch("http://localhost:5000/api/rooms", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.reset();
          setIsLoad(!isLoad);
        }
      });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div className="border px-5 py-4 text-2xl gap-4 font-bold w-full rounded-md  flex items-center bg-red-300">
          <IoMdChatboxes className="text-3xl" /> <h1>All chat room list</h1>
        </div>

        {/* ======crete chat room form========== */}
        <form
          className="border px-5 py-3 text-2xl gap-4 font-bold w-full rounded-md  flex justify-between items-center bg-red-300"
          onSubmit={handleCreateChatRoom}
        >
          <input
            className="bg-transparent w-36 md:w-full border text-xl font-normal outline-none px-2 rounded-md"
            placeholder="Create a new chat room"
            type="text"
            name="name"
          ></input>
          <button className="border md:w-[50%] lg:w-[30%] rounded-full hover:bg-red-100 p-2 text-sm ">
            Create room
          </button>
        </form>
      </div>

      {/* ========Chat room list===========  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
        {roomlist.map((data) => (
          <div
            className="border rounded-md p-1 flex items-center bg-red-300"
            key={data.id}
          >
            <TiGroup className="text-2xl" />
            <Link href={`/chat/${data.id}`} className="py-2 px-3">
              {data.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomlist;
