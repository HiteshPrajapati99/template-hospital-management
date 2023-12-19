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
      {UserList.map((i) => (
        <div
          className="flex justify-between items-center gap-3 p-3 rounded-xl hover:bg-[#94cced40] active:scale-95 "
          key={i.id}
        >
          <div className="flex gap-2 items-center">
            <img src={i.profile} alt="profile" className="w-12 h-12" />
            <div>
              <p className="text-white text-lg font-semibold"> {i.name} </p>
              <p className="text-muted text-sm"> {i.last_message} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-sm"> 4m </p>
            <div className="text-center h-5 w-5 rounded-full bg-[#84D9FF]  text-sm grid place-items-center">
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
