import { Button } from "@/components/ui/button";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Masonry from "react-responsive-masonry";

const data = [
  {
    id: 1,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. Sodales tortor turpis felis est vulputate nibh ut pellentesque sit. Etiam id fames et orci hac laoreet ac pellentesque. es tortor turpis felis est vulputate nibh ut pellentesque sit. ",
  },
  {
    id: 2,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. At mus pulvinar imperdiet ante mi scelerisque congue. Arcu pellentesque elementum vel arcu sed. Eget nulla nunc sagittis turpis adipiscing aliquet lobortis porta. Etiam mi tristique cursus volutpat at est laoreet. Morbi dui quis nascetur sit congue neque pellentesque. Massa suscipit enim adipiscing integer vestibulum habitant at.Nec donec blandit nunc quis nunc aliquet quis tincidunt. Elit sollicitudin purus nunc diam nisl. Adipiscing blandit commodo mauris amet sit.",
  },

  {
    id: 3,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. Sodales tortor turpis felis est vulputate nibh ut pellentesque sit.",
  },

  {
    id: 4,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. Sodales tortor turpis felis est vulputate nibh ut pellentesque sit. Etiam id fames et orci hac laoreet ac pellentesque. es tortor turpis felis est vulputate nibh ut pellentesque sit. ",
  },

  {
    id: 5,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. Eget eros tellus diam enim molestie sapien adipiscing semper duis. Id facilisi fringilla vivamus velit pharetra senectus adipiscing sit. Faucibus mus odio vel ultrices risus aliquam sed imperdiet. Tincidunt scelerisque viverra aliquet urna orci. Morbi senectus sodales ut.",
  },
  {
    id: 6,
    date: "22 july,2023",
    pet_name: "Tommy",
    dr_name: "Sophie Moore (Dermatology)",
    note: "Lorem ipsum dolor sit amet consectetur. Eget eros tellus diam enim molestie sapien adipiscing semper duis. Id facilisi fringilla vivamus velit pharetra senectus adipiscing sit. Faucibus mus odio vel ultrices risus aliquam sed imperdiet. Tincidunt scelerisque viverra aliquet urna orci. Morbi senectus sodales ut.",
  },
];

const Notes = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {/* title */}
      <div className="title text-white">
        <div className="flex items-center">
          <Button
            variant="outline"
            className="border-none text-3xl text-white active:scale-75"
            onClick={() => navigate(-1)}
          >
            <BsArrowLeft />
          </Button>
          <div className="flex-1">
            <p className="text-2xl font-bold"> Notes</p>
            <p className="opacity-80">
              Lorem ipsum dolor sit amet consectetur. Amet ultricies a integer
              lectus sit.
            </p>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 lg:px-20">
        <Masonry columnsCount={3} gutter="16px">
          {data.map((i) => (
            <div className="box   text-white" key={i.id}>
              <p className="text-end text-muted"> Date : {i.date}</p>
              <p className="mb-2 mt-4 text-center text-lg font-bold">
                Pet Name : {i.pet_name}
              </p>

              <p className="text-center"> Dr.Name : {i.dr_name} </p>

              <p className="mb-1 mt-6"> Notes : </p>
              <p className="text-muted"> {i.note} </p>
            </div>
          ))}
        </Masonry>
      </div>
    </Wrapper>
  );
};

export default Notes;

const Wrapper = styled.section`
  .box {
    background: rgba(148, 204, 237, 0.25);
    padding: 20px;
  }
`;
