import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IoNotifications } from "react-icons/io5";

const Main = () => {
  return (
    <Wrapper>
      <div className="title">
        <p className="text-2xl font-bold text-white">Notification</p>
      </div>

      <div className="px-8  py-8 lg:px-20">
        <p className="date_lable">Yesterday</p>

        <div className="notification_box mt-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#043158] p-2">
              <IoNotifications tw="text-2xl text-[#84D9FF]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Trending</p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Est fermentum donec nunc
                ornare amet tortor blandit fermentum egestas facilisis.
              </p>
            </div>
          </div>
          <p className="whitespace-nowrap text-white">9.56 AM</p>
        </div>

        <div className="notification_box mt-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#043158] p-2">
              <IoNotifications tw="text-2xl text-[#84D9FF]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Trending</p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Amet tortor metus
                aliquam enim mollis suspendisse elementum nunc quam. Hendrerit
                sed ut nam et sagittis at. Viverra tincidunt sagittis quis fames
                augue. Elementum a vestibulum enim eu. Id odio feugiat tempus
                vitae. Euismod egestas ut felis.
              </p>
            </div>
          </div>
          <div>
            <p className="flex-1 whitespace-nowrap text-white">9.56 AM</p>
          </div>
        </div>

        <p className="date_lable mt-3">05/05/2023</p>

        <div className="notification_box mt-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#043158] p-2">
              <IoNotifications tw="text-2xl text-[#84D9FF]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Trending</p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Est fermentum donec nunc
                ornare amet tortor blandit fermentum egestas facilisis.
              </p>
            </div>
          </div>

          <div>
            <p className="flex-1 whitespace-nowrap text-white">9.56 AM</p>
          </div>
        </div>

        <div className="notification_box mt-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#043158] p-2">
              <IoNotifications tw="text-2xl text-[#84D9FF]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Trending</p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Amet tortor metus
                aliquam enim mollis suspendisse elementum nunc quam. Hendrerit
                sed ut nam et sagittis at. Viverra tincidunt sagittis quis fames
                augue. Elementum a vestibulum enim eu. Id odio feugiat tempus
                vitae. Euismod egestas ut felis.
              </p>
            </div>
          </div>

          <div>
            <p className="flex-1 whitespace-nowrap text-white">9.56 AM</p>
          </div>
        </div>

        <div className="notification_box mt-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#043158] p-2">
              <IoNotifications tw="text-2xl text-[#84D9FF]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Trending</p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur. Est fermentum donec nunc
                ornare amet tortor blandit fermentum egestas facilisis.
              </p>
            </div>
          </div>
          <div>
            <p className="flex-1 whitespace-nowrap text-white">9.56 AM</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  .date_lable {
    ${tw`text-white font-bold`}
  }
  .notification_box {
    border-radius: 10px;
    background: rgba(148, 204, 237, 0.25);
    ${tw`p-4 flex gap-10 justify-between`}
  }
`;
