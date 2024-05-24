
import { useEffect, useState } from "react";
import Link from "next/link";
import Message from "./Message";
import { TiGroup } from "react-icons/ti";
import { IoMdArrowBack } from "react-icons/io";

import { io } from "socket.io-client";
import { useChatcontext } from "@/contexts/ContextProvider";
var socket;

const ChatRoom = ({ id }) => {
  const [message, setMessage] = useState([]);
  const [user, setUser] = useState({});
  const { apiUrl } = useChatcontext();
  
  const [ isSocketioConnect, setIsSocketioConnect ] = useState(false);
  
  const name = user?.name;
  const userid = user?.id;

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    setUser(userData)
  },[])

  useEffect(() => {
    socket = io('https://chat-server-psi-one.vercel.app');
    socket.emit("setup", user);
    socket.on("connection", () => setIsSocketioConnect(true));
  }, [apiUrl, user]);

  //========== all message data fatching ==============

  useEffect(() => {
    fetch(`${apiUrl}/api/rooms/${id}/messages`)
      .then((res) => res.json())
      .then((data) => setMessage(data.data));
    socket.emit("joinChat", id);
    
  }, [apiUrl, id]);

  useEffect(() => {
    socket.on("message receved", (newMessageReceved) => {
      
      return setMessage((prev) => [...prev, newMessageReceved.chat]);
    });
  });

  //============ message sending function ============

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = e.target.message.value;
    const messages = {
      name,
      text,
    };

    //=========== message post with fetch post method==========
    fetch(`${apiUrl}/api/rooms/${id}/messages`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(messages),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          const chat = data.data;
          e.target.reset();
          socket.emit("new massage", { userId: userid, chat });
          setMessage((prev) => [...prev, data.data]);
        }
      });
  };

  const removeDuplicatesById = (array) => {
    const seen = {};
    return array.filter(item => {
      if (seen[item.id]) {
        return false;
      }
      seen[item.id] = true;
      return true;
    });
  };
  
  const uniqueData = removeDuplicatesById(message);
  console.log(uniqueData)

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
          {uniqueData?.map((data, index) => (
            <Message key={index} data={data} />
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
