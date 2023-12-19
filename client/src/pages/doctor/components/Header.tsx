import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
// import { IoMdNotifications } from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper className="flex items-center justify-between px-8 py-6 md:px-20">
      <div className="flex items-center" onClick={() => navigate("/doctor")}>
        <img
          src="/logo.png"
          alt="logo"
          style={{
            fill: "drop-shadow(0px 2.4185869693756104px 0px #0AEFFF)",
          }}
          className="w-20"
        />
        <p className="logo-text text-2xl 2xl:text-[34px]">Petdx.ai</p>
      </div>
      {/* mobite menu */}

      <>
        <Button
          className="rounded-2xl hover:rounded-full lg:hidden"
          size="icon"
        >
          <HiMenu />
        </Button>
      </>

      <div className="hidden items-center gap-6 lg:flex">
        <Link
          to="/doctor"
          className={`links ${location.pathname === "/doctor" && "active"}`}
        >
          Dashboard
        </Link>

        <NavLink to="appointment" className="links">
          Appointment
        </NavLink>

        <NavLink to="chat" className="links">
          Chat
        </NavLink>
        <NavLink to="tips" className="links">
          Tips
        </NavLink>

        <Button
          variant="icon"
          className="px-2"
          onClick={() => navigate("notification")}
        >
          {/* <IoMdNotifications tw="text-2xl text-[#84D9FF]" /> */}
          <img src="/user_icons/notification.svg" alt="icon" />
        </Button>
        {/* <div className="flex items-center active:scale-95">
          <Avatar className="avatar">
            <AvatarImage src="/avatar.png" alt="logo" />
            <AvatarFallback> cn </AvatarFallback>
          </Avatar>
          <AiFillCaretDown tw="text-white" />
        </div> */}
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex items-center active:scale-95">
              <Avatar className="avatar">
                <AvatarImage src="/avatar.png" alt="logo" />
                <AvatarFallback> cn </AvatarFallback>
              </Avatar>
              <AiFillCaretDown tw="text-white" />
            </div>
          </PopoverTrigger>

          <PopoverContent
            hideWhenDetached
            align="end"
            // sticky="always"
            // side="top"
            style={{
              background: "#082b58",
              color: "#fff",
              display: "grid",
              gap: "0.6rem",
            }}
          >
            <PopoverClose>
              <Button
                variant="outline"
                className="links w-full text-center"
                onClick={() => navigate("my_account")}
              >
                Account
              </Button>
            </PopoverClose>
            <Button variant="destructive"> Log Out </Button>
          </PopoverContent>
        </Popover>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  .links {
    ${tw`text-white font-[600] tracking-wider text-[16px] hover:text-[#60f1fb]`}
  }
  .active {
    color: #60f1fb;
  }
  .avatar {
    fill: #032e51;
    box-shadow:
      -1px -1px 2px 0px rgba(1, 18, 32, 0.8) inset,
      1px 1px 2px 0px rgba(5, 74, 130, 0.3) inset;
    filter: drop-shadow(14px 14px 35px rgba(1, 18, 32, 0.9))
      drop-shadow(-14px -14px 28px rgba(5, 74, 130, 0.9))
      drop-shadow(14px -14px 28px rgba(1, 18, 32, 0.2))
      drop-shadow(-14px 14px 28px rgba(1, 18, 32, 0.2));
    padding: 6px;
  }
`;
