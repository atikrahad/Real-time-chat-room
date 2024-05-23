import Link from "next/link";
import { useEffect, useState } from "react";
import Message from "./Message";
import { TiGroup } from "react-icons/ti";
import { IoMdArrowBack } from "react-icons/io";

const ChatRoom = ({ id }) => {
  const [message, setMessage] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  //========== all message data fatching ==============

  useEffect(() => {
    fetch(`${apiUrl}/api/rooms/${id}/messages`)
      .then((res) => res.json())
      .then((data) => setMessage(data.data));
  }, [id]);

  //============ message sending function ============

  const handleSendMessage = (e) => {
    e.preventDefault();
    const name = "Riad Hasan";
    const text = e.target.message.value;
    const message = {
      name,
      text,
    };

    //=========== message post with fetch post method==========
    fetch(`${apiUrl}/api/rooms/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <Link href={"/chat"}>
        <IoMdArrowBack className="mx-3 text-2xl" />
      </Link>
      <div className="flex items-center gap-5 py-3 px-3">
        <TiGroup className="text-3xl" />
        <h1 className="text-3xl">Chat room</h1>
      </div>
      {/* All message */}
      <div className="flex h-[85vh] w-full flex-col justify-between">
        <div className=" h-[90%] flex flex-col p-5 w-full overflow-y-scroll">
          {message?.map((data) => (
            <Message key={data.id} data={data} />
          ))}
        </div>

        {/* message sending form  */}
        <div className=" h-[10%] w-full">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              className="py-4 outline-none border px-5 w-[70%] lg:w-[90%]"
              type="text"
              name="message"
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
