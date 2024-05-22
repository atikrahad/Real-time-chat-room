import ChatRoom from "@/components/ChatRoom";

const messages = ({ params }) => {
  const chatIds = params.id;
  return (
    <div className="h-[100vh]">
      <ChatRoom id={chatIds} />
    </div>
  );
};

export default messages;
