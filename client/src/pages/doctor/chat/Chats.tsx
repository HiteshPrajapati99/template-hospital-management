import { Button } from "@/components/ui/button";
import styled from "styled-components";

const UserList = [
  {
    id: 1,
    profile: "/avatar.png",
    name: "Lalita Hartati",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 2,
    profile: "/avatar.png",
    name: "Raymond Young",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 2,
    profile: "/avatar.png",
    name: "Chirstopher Simmons",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 3,
    profile: "/avatar.png",
    name: "Debra Rodriquez",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 4,
    profile: "/avatar.png",
    name: "Greg Brooks",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 5,
    profile: "/avatar.png",
    name: "Frank Gray",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 6,
    profile: "/avatar.png",
    name: "Eric Wong",
    last_message: "Lorem ipsum dolor sit amet....",
  },
  {
    id: 7,
    profile: "/avatar.png",
    name: "Linda Lau",
    last_message: "Lorem ipsum dolor sit amet....",
  },
];

const Chats = () => {
  return (
    <Wrapper className="hidden lg:block">
      <div className="mb-3 flex">
        <Button className="w-full rounded-l-xl rounded-r-none  py-7">
          PERSONAL
        </Button>
        <Button
          variant="ghost"
          className="w-full rounded-l-none rounded-r-xl py-7"
        >
          COMMUNITY
        </Button>
      </div>
      {UserList.map((i) => (
        <div
          className="flex items-center justify-between gap-3 rounded-2xl p-3 hover:bg-[#94cced40] active:scale-95 "
          key={i.id}
        >
          <div className="flex items-center gap-2">
            <img src={i.profile} alt="profile" className="h-12 w-12" />
            <div>
              <p className="text-lg font-semibold text-white"> {i.name} </p>
              <p className="text-sm text-muted"> {i.last_message} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-white"> 4m </p>
            <div className="grid h-5 w-5 place-items-center rounded-full  bg-[#84D9FF] text-center text-sm">
              2
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Chats;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100dvh - 8rem);
  overflow-y: scroll;
  overflow-x: hidden;
`;
