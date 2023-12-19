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
      <div className="flex h-full w-full flex-col justify-between gap-4 px-3 py-4 lg:px-8">
        <div
          className="flex items-center gap-3 pb-2"
          style={{ borderBottom: "2px solid rgba(255,255,255,0.2)" }}
        >
          <img src="/avatar.png" alt="logo" />
          <p className="text-lg font-semibold text-white">Hartati</p>
        </div>

        <div className="h-full overflow-y-scroll">
          {MessagesList.map((i) => (
            <div
              key={i.id}
              className={`flex gap-2 px-3 py-3`}
              style={{
                justifyContent:
                  i.userName === "login" ? "flex-start" : "flex-end",
                alignItems: "end",
              }}
            >
              {i.userName === "login" && (
                <div className="grid place-items-center">
                  <img src="/avatar.png" alt="profile" className="h-6 w-6" />
                  <p className="text-sm text-white"> {i.title} </p>
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
                  <img src="/avatar.png" alt="profile" className="h-6 w-6" />
                  <p className="text-sm text-white"> {i.title} </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex w-full items-center justify-between rounded-xl bg-[#ffffffcc] p-2 pl-3">
            <input
              type="text"
              className="bg-transparent outline-none"
              placeholder="Type something"
            />
            <Button className="btn px-3" variant="icon">
              <img src="/user_icons/send.png" alt="icon" className="h-6 w-6" />
            </Button>
          </div>
          <Button className="btn py-6" variant="ghost">
            <img src="/user_icons/pdf.png" alt="icon" className="h-6 w-10" />
          </Button>
          <Button className="btn py-6" variant="ghost">
            <img
              src="/user_icons/tesk-add.svg"
              alt="icon"
              className="h-10 w-10"
            />
          </Button>
          <Button className="btn px-2 py-6" variant="ghost">
            <img src="/user_icons/logo.svg" alt="icon" className="w-[90%]" />
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
