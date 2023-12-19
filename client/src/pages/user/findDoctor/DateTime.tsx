import { Button } from "@/components/ui/button";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = () => {
  const navigate = useNavigate();

  const [SelectedDate, setSelectedDate] = useState<{ date: Date; time: Date }>({
    date: new Date(),
    time: new Date(),
  });

  return (
    <Wrapper>
      {/* title  */}
      <div className="title">
        <p className="text-2xl text-white font-bold">Select a Date and Time</p>
        <p className="text-white opacity-70">
          PeDx.ai would like to schedule an appointment with a doctor. Please
          provide a preferred time and date for the appointment.
        </p>
      </div>

      {/* calender */}

      <div className="flex flex-col gap-3 justify-center items-center p-3 ">
        <div>
          <p className="text-white font-semibold ml-2 mb-1">Select Date</p>
          <ReactDatePicker
            selected={SelectedDate.date}
            onChange={(date) =>
              date && setSelectedDate({ ...SelectedDate, date })
            }
            className="w-full h-14 outline-none rounded-2xl"
          />
        </div>
        <div>
          <p className="text-white font-semibold ml-2 mb-1">Select Time</p>

          <ReactDatePicker
            selected={SelectedDate.date}
            onChange={(date) =>
              date && setSelectedDate({ ...SelectedDate, date })
            }
            showTimeSelect
            timeFormat="HH:mm aa"
            timeCaption="Select Time"
            timeIntervals={30}
            timeInputLabel="Slect Times"
            className="w-ful h-14 outline-none rounded-2xl"
            showTimeSelectOnly
            dateFormat="h:mm aa"
          />
        </div>
      </div>

      <div className="text-center">
        <Button
          className="text-black px-16 py-8 rounded-2xl text-lg font-semibold"
          onClick={() => navigate("/user/find_doctor/pet_info")}
        >
          Next <GrLinkNext />
        </Button>
      </div>
    </Wrapper>
  );
};

export default DateTime;

const Wrapper = styled.div`
  .react-datepicker__input-container input {
    background: radial-gradient(
      231% 135.8% at 0.9% 2.98%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border: 1px solid #2dcbd7;
    color: #fff;
    padding: 14px;
  }
  /* date picker */

  .react-datepicker {
    border-radius: 20px;
    border: none;
  }

  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__month-container {
    background: #4581a3;
    color: #fff;
    width: 350px;
    padding: 10px;
    border-radius: 20px;
  }
  .react-datepicker__header {
    background: #4581a3;
    color: #fff;

    .react-datepicker__current-month {
      color: #fff;
      font-size: 1.1rem;
      text-align: start;
      margin-left: 24px;
    }
  }

  .react-datepicker__navigation--next {
    right: 14px;
    top: 20px;
  }

  .react-datepicker__navigation--previous {
    left: 65%;
    top: 20px;
  }
  .react-datepicker__month {
    width: 100%;
    font-size: 1.1rem;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0px;
  }
  .react-datepicker__week {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .react-datepicker__day-names {
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    font-weight: 500;
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 6px 0px;

    .react-datepicker__day-name {
      color: #fff;
    }
  }
  .react-datepicker__day {
    padding: 6px 20px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    color: #fff;

    &:hover {
      border-radius: 50%;
      color: black;
    }
  }

  /* time Picker */

  .react-datepicker__time-container {
    width: 300px;
    font-size: 1.1rem;
    color: #fff;

    .react-datepicker__time-box {
      width: 100%;
    }
    .react-datepicker-time__header {
      color: #fff;
    }
    .react-datepicker__time-list-item:hover {
      color: black;
    }
  }
  .react-datepicker__time {
    border: 1px solid #2dcbd7;
    background: #4581a3;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    padding: 0;
  }
`;
