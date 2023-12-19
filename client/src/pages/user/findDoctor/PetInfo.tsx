import DatePickerReact from "@/components/ui/DatePickerReact";
import SelectView from "@/components/ui/SelectView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import styled from "styled-components";

type T_FORM_INPUTS = {
  date: Date;
  time: Date;
  pet: string;
  name: string;
  email: string;
  nots: string;
  reoprt: File | null;
};

const SubmitReport = () => {
  const initialValues: T_FORM_INPUTS = {
    date: new Date(),
    time: new Date(),
    pet: "",
    email: "",
    name: "",
    nots: "",
    reoprt: null,
  };

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  return (
    <Wrapper>
      {/* title  */}
      <div className="title">
        <p className="text-2xl text-white font-bold">
          Fill Information & Submit Report
        </p>
        <p className="text-white opacity-70">
          Please fill in the information below and submit your pet's report. If
          you have another pet, please add one more pet's details and submit the
          form.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="px-8  w-full md:w-1/2 py-8 grid gap-4 ">
          <DatePickerReact
            lable="Select Date"
            placeholderText="Pick Date"
            selected={values.date}
            onChange={(date) => setFieldValue("date", date)}
          />
          <DatePickerReact
            lable="Select Time"
            placeholderText="Pick Time"
            dateFormat="HH:mm aa"
            showTimeSelectOnly
            showTimeSelect
            selected={values.time}
            onChange={(date) => setFieldValue("time", date)}
          />

          <SelectView
            label="Select Pet"
            placeholder="Select Pet"
            options={[
              {
                key: "tommy",
                value: "Tommy",
              },
              {
                key: "cat",
                value: "Cat",
              },
            ]}
            value={values.pet ? values.pet : undefined}
            onValueChange={(val) => setFieldValue("pet", val)}
          />
          <Input
            placeholder="Enter Name..."
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Enter Email..."
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Textarea
            label="Notes"
            placeholder="Write..."
            rows={4}
            name="nots"
            value={values.nots}
            onChange={handleChange}
          />
          <div>
            <label className="flex justify-start text-white font-semibold text-sm ml-2 mb-1">
              Upload Report
            </label>
            <div className="file_inpu_bg flex items-center gap-2 border border-[#2dcbd7] rounded-[15px] px-3 py-2 justify-between">
              <span className="text-muted text-sm"> Pick the report</span>
              <input
                type="file"
                className="hidden"
                id="fileInput"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    setFieldValue("reoprt", e.target.files[0]);
                  }
                }}
              />
              <button className=" text-white rounded-lg file_input_btn active:scale-95">
                <label
                  htmlFor="fileInput"
                  className="flex items-center px-4 py-2 text-sm"
                >
                  Browse
                </label>
              </button>
            </div>
          </div>

          <div className="text-center">
            <Button className="px-16 py-7 text-xl font-medium rounded-2xl text-black">
              Book
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubmitReport;

const Wrapper = styled.div`
  .file_inpu_bg {
    background: radial-gradient(
      231% 135.8% at 0.9% 2.98%,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .file_input_btn {
    border-radius: 15px;
    background: linear-gradient(259deg, #017d8d 0%, #2cc2cc 85.29%);
  }
`;
