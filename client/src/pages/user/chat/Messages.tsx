import { Button } from "@/components/ui/button";
import React from "react";
import styled from "styled-components";

const MessagesList = [
  {
    id: 1,
    title: "John Doe",
    userName: "login",
    message: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "The Rok",
    userName: "no-login",
    message: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    title: "John Doe",
    userName: "login",
    message:
      "Lorem ipsum dolor sit amet consectetur. Diam natoque massa proin dignissim ac molestie. In malesuada curabitur nisi elit cras.",
  },
  {
    id: 4,
    title: "The Rok",
    userName: "no-login",
    message:
      "Lorem ipsum dolor sit amet consectetur. Ut at volutpat dui est lacus morbi ornare ac a.",
  },

  {
    id: 5,
    title: "John Doe",
    userName: "login",
    message:
      "Lorem ipsum dolor sit amet consectetur. Ut at volutpat dui est lacus morbi ornare ac a.",
  },
  {
    id: 6,
    title: "The Rok",
    userName: "no-login",
    message: "Lorem ipsum dolor sit amet",
  },
];

const Messages = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4 py-4 px-3 lg:px-8 w-full justify-between h-full">
        <div
          className="flex items-center gap-3 pb-2"
          style={{ borderBottom: "2px solid rgba(255,255,255,0.2)" }}
        >
          <img src="/avatar.png" alt="logo" />
          <p className="text-white text-lg font-semibold">Hartati</p>
        </div>

        <div className="overflow-y-scroll h-full">
          {MessagesList.map((i) => (
            <div
              key={i.id}
              className={`flex gap-2 py-3 px-3`}
              style={{
                justifyContent:
                  i.userName === "login" ? "flex-start" : "flex-end",
                alignItems: "end",
              }}
            >
              {i.userName === "login" && (
                <div className="grid place-items-center">
                  <img src="/avatar.png" alt="profile" className="w-6 h-6" />
                  <p className="text-white text-sm"> {i.title} </p>
                </div>
              )}
              <div
                className={`p-4`}
                style={{
                  background: i.userName === "login" ? "#00ABC1" : "#84D9FF",
                  borderRadius:
                    i.userName !== "login"
                      ? "20px 20px 0px 20px"
                      : "20px 20px 20px 0px",
                  width: i.userName === "login" ? "60%" : "50%",
                }}
              >
                <div>
                  <p className={`${i.userName === "login" && "text-white"}`}>
                    {i.message}
                  </p>
                </div>
              </div>
              {i.userName !== "login" && (
                <div className="grid place-items-center">
                  <img src="/avatar.png" alt="profile" className="w-6 h-6" />
                  <p className="text-white text-sm"> {i.title} </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-[#ffffffcc] w-full rounded-xl flex justify-between items-center p-2 pl-3">
            <input
              type="text"
              className="outline-none bg-transparent"
              placeholder="Type something"
            />
            <Button className="btn px-3" variant="icon">
              <img src="/user_icons/send.png" alt="icon" className="w-6 h-6" />
            </Button>
          </div>
          <Button className="btn py-6" variant="ghost">
            <img src="/user_icons/pdf.png" alt="icon" className="w-7 h-7" />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Messages;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 7.8rem);
  border-radius: 30px 30px 0px 0px;
  background: rgba(148, 204, 237, 0.25);

  .btn {
    border-radius: 15px;
    background: linear-gradient(259deg, #017d8d 0%, #2cc2cc 85.29%);
  }
`;
