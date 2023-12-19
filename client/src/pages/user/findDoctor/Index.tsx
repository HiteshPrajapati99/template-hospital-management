import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SelectView from "@/components/ui/SelectView";
import { Button } from "@/components/ui/button";
import MapBox from "./MapBox";
import UserList from "./UserList";
import { Checkbox } from "@/components/ui/checkbox";

const FindDoctor = () => {
  const [SlectedPage, setSlectedPage] = useState<"map" | "list">("map");

  return (
    <>
      {/* title  */}
      <div className="title">
        <p className="text-2xl font-bold text-white">
          Search Doctor, Make an Appointment
        </p>
        <p className="text-white opacity-70">
          Discover the best doctors, clinic & hospital the city nearest to you.
        </p>
      </div>

      {/* data and Map */}

      <div className="block  gap-10 p-8 md:flex ">
        <div className="w-full  md:w-[30%]">
          <div className="grid gap-4">
            <Input placeholder="Search" RightIcon={<AiOutlineSearch />} />

            <SelectView label="Country" placeholder="india" />
            <SelectView label="State" placeholder="Ahmedabad" />
            <SelectView label="Radius" placeholder="20 km" />
            <SelectView label="Specialty" placeholder="Dentistry" />
            <SelectView
              label="Review"
              placeholder="5"
              options={[
                {
                  key: "1",
                  value: 1,
                },
                {
                  key: "2",
                  value: 2,
                },
                {
                  key: "3",
                  value: 3,
                },
                {
                  key: "4",
                  value: 4,
                },
                {
                  key: "5",
                  value: 5,
                },
              ]}
            />

            <div className="flex items-center gap-3">
              <Checkbox id="emergency" />
              <label
                htmlFor="emergency"
                className="text-lg font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                It’s an Emergency?
              </label>
            </div>
          </div>
        </div>

        <div className=" h-full md:w-[70%]">
          <div className="mt-6 text-center md:mt-0 md:text-left">
            <Button
              className="duration-400 rounded-l-xl rounded-r-none px-14 py-6 text-xl font-medium transition"
              size="lg"
              variant={SlectedPage == "map" ? "default" : "ghost"}
              onClick={() => setSlectedPage("map")}
            >
              MAP
            </Button>
            <Button
              className="duration-400 rounded-l-none rounded-r-xl px-16 py-6 text-xl font-medium transition"
              size="lg"
              variant={SlectedPage == "list" ? "default" : "ghost"}
              onClick={() => setSlectedPage("list")}
            >
              LIST
            </Button>
          </div>

          <div className="py-6">
            {SlectedPage === "map" ? <MapBox /> : <UserList />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDoctor;
