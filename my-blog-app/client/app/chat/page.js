import ChatRoomlist from "@/components/ChatRoomlist";
import React from "react";
import { IoMdChatboxes } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

const index = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen">
      <ChatRoomlist />
    </div>
  );
};

export default index;
