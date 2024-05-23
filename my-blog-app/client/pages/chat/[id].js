import ChatRoom from "@/components/ChatRoom";
import { useRouter } from "next/router";
import React from "react";

const Message = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <ChatRoom id={id} />
    </div>
  );
};

export default Message;
