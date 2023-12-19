import React from "react";
import Chats from "./Chats";
import Messages from "./Messages";

const Main = () => {
  return (
    <div className="px-6 lg:px-16 lg:flex items-center lg:gap-6">
      <div className="lg:w-2/5 ">
        <Chats />
      </div>
      <Messages />
    </div>
  );
};

export default Main;
