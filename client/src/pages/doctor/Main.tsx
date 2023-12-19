import styled from "styled-components";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  background: linear-gradient(
    133deg,
    #03152d 0%,
    #032c50 36.13%,
    #004a81 62.93%,
    #04629d 80.27%,
    #008ce1 99.67%
  );
  height: 100%;
  min-height: 100dvh;

  .title {
    background: #30a7b2;
    box-shadow: 7px 7px 18px 0px rgba(19, 67, 71, 0.9) inset,
      -7px -7px 14px 0px rgba(77, 255, 255, 0.9) inset,
      7px -7px 14px 0px rgba(19, 67, 71, 0.2) inset,
      -7px 7px 14px 0px rgba(19, 67, 71, 0.2) inset,
      -1px -1px 2px 0px rgba(19, 67, 71, 0.5),
      1px 1px 2px 0px rgba(77, 255, 255, 0.3);
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

    ${tw`px-8 md:px-20 py-6 text-center`}
  }
`;
