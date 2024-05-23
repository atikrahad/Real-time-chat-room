

const Message = ({ data }) => {
  return (
    <div className="flex m-1 items-center justify-between">
      <div className="flex items-center gap-5">
        <h1 className="text-xl px-3 bg-slate-300 rounded-full">
          {data?.message_author_name}
        </h1>
        <p
          
        >
          : {data?.message_text}
        </p>
      </div>
    </div>
  );
};

export default Message;
