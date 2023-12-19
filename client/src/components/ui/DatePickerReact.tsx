import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

type DatePickerProps = typeof ReactDatePicker.prototype.props & {
  lable: string;
};

const DatePickerReact = (props: DatePickerProps) => {
  return (
    <Wrapper>
      <label className="flex justify-start text-white font-semibold text-sm ml-2 mb-1">
        {props.lable}
      </label>
      <ReactDatePicker
        {...props}
        className="w-full h-12 outline-none rounded-2xl"
        showIcon
        minDate={new Date()}
        popperPlacement="bottom-end"
      />
    </Wrapper>
  );
};

export default DatePickerReact;
const Wrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    font-family: "sans-pro", sans-serif;
    background: #4581a3;
  }
  .react-datepicker__input-container input {
    background: radial-gradient(
      231% 135.8% at 0.9% 2.98%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border: 1px solid #2dcbd7;
    padding: 14px;

    color: #fff;
  }
  .react-datepicker__calendar-icon {
    right: 18px;
    color: #fff;
    width: 1.1rem;
    height: 1.5rem;
    top: 22%;
    padding: 0px;
    filter: brightness(0) saturate(100%) invert(74%) sepia(94%) saturate(411%)
      hue-rotate(154deg) brightness(105%) contrast(97%);
  }

  .react-datepicker__day--keyboard-selected {
    color: black !important;
  }
  .react-datepicker__day--disabled {
    color: rgba(255, 255, 255, 0.6) !important;
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
    width: 320px;
    padding: 8px;
    border-radius: 20px;
  }
  .react-datepicker__header {
    background: #4581a3;
    border-bottom: 0px;

    .react-datepicker__current-month {
      color: #fff;
      font-size: 1.1rem;
      text-align: start;
      margin-left: 18px;
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
    font-size: 1rem;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .react-datepicker__week {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .react-datepicker__day-names {
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    font-weight: 500;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 6px 0px;

    .react-datepicker__day-name {
      color: #fff;
    }
  }
  .react-datepicker__day {
    padding: 3.5px 18px;
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
