import React from "react";
import Chats from "./Chats";
import Messages from "./Messages";

const Main = () => {
  return (
    <div className="items-center px-6 lg:flex lg:gap-6 lg:px-16">
      <div className="lg:w-2/5 ">
        <Chats />
      </div>
      <Messages />
    </div>
  );
};

export default Main;
