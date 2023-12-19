import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { styled } from "styled-components";
import UserInfo from "./UserInfo";
import PetInfo from "./PetInfo";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Medical from "./Medical";
import Symptoms from "./Symptoms";
import { TUserTabs, T_USER_INPUTS } from "../types";
import "twin.macro";
import { useFormik } from "formik";

const UserRegister = () => {
  const [activeTab, seTUserTabs] = useState<TUserTabs>("user_info");

  const initialValues: T_USER_INPUTS = {
    f_name: "",
    p_number: "",
    email: "",
    password: "",
    c_password: "",
    pet_name: "",
    species: "",
    breed: "",
    age: "",
    gender: "",
    sterilized: "",
    color: "",
    weight: "",
    animal_type: "",
    notes: "",
    pet_bite: false,
    group_appointment: false,
    give_pet_vaccines: false,
    pet_vaccines_date: "",
    known_allergies: false,
    allergies_desc: "",
    previous_treatments: false,
    p_treatment_date: "",
    product_req: "",
    current_symptoms: "",
  };
  const { values, handleChange } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const TAB_LIST = [
    {
      avtar: 1,
      title: "User Info",
      value: "user_info",
    },
    {
      avtar: 2,
      title: "Pet Info",
      value: "pet_info",
    },
    {
      avtar: 3,
      title: "Medical History",
      value: "medical",
    },
    {
      avtar: 4,
      title: "Symptoms Entry",
      value: "symptoms",
    },
  ];

  return (
    <Wrapper>
      <div className="flex min-h-[100dvh] w-full items-center justify-center py-8">
        <div
          tw="box-content px-6
          md:(rounded-[30px] p-10)"
          className="box-content"
        >
          <p className="text-center text-[26px] font-bold text-white">
            Create Your Account
          </p>
          <div>
            <Tabs
              defaultValue="user_info"
              value={activeTab}
              onValueChange={(v) => seTUserTabs(v as TUserTabs)}
            >
              <TabsList className="my-12 flex w-full bg-transparent md:my-6 ">
                {TAB_LIST.map((i, idx) => (
                  <TabsTrigger
                    key={i.avtar}
                    value={i.value}
                    className="text-[16px] text-white opacity-80 data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:opacity-100"
                  >
                    <div tw="flex flex-col justify-center items-center gap-2 md:( flex-row)">
                      <Avatar
                        style={{
                          background:
                            activeTab === i.value
                              ? "linear-gradient(259deg, #005D69 0%, #60F1FB 100%)"
                              : "rgba(17, 81, 134, 0.50)",
                        }}
                      >
                        <AvatarFallback>{i.avtar}</AvatarFallback>
                      </Avatar>
                      <p
                        // className="break-words"
                        style={{
                          wordWrap: "break-word",
                          whiteSpace: "break-spaces",
                        }}
                      >
                        {i.title}
                      </p>
                      {idx !== TAB_LIST.length - 1 && (
                        <img
                          src="/images/tabs-line.png"
                          alt="line-image"
                          width="50"
                          height="90"
                          className="hidden md:block"
                        />
                      )}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="user_info">
                <UserInfo
                  seTUserTabs={seTUserTabs}
                  formProps={{ handleChange, values }}
                />
              </TabsContent>
              <TabsContent value="pet_info">
                <PetInfo seTUserTabs={seTUserTabs} />
              </TabsContent>
              <TabsContent value="medical">
                <Medical seTUserTabs={seTUserTabs} />
              </TabsContent>
              <TabsContent value="symptoms">
                <Symptoms />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default UserRegister;

export const Wrapper = styled.div`
  background: linear-gradient(
    225deg,
    #03152d 0%,
    #032c50 40.04%,
    #024576 67.18%,
    #006db2 87.91%,
    #008ee4 100%
  );
  width: 100%;
  height: 100%;
  min-height: 100dvh;

  .box-content {
    @media (min-width: 768px) {
      background: linear-gradient(136deg, #03335b 0%, #06375f 100%);
      box-shadow:
        35px 35px 88px 0px rgba(1, 23, 41, 0.9),
        -35px -35px 70px 0px rgba(5, 75, 133, 0.9),
        35px -35px 70px 0px rgba(1, 23, 41, 0.2),
        -35px 35px 70px 0px rgba(1, 23, 41, 0.2),
        -1px -1px 2px 0px rgba(1, 23, 41, 0.5) inset,
        1px 1px 2px 0px rgba(5, 75, 133, 0.3) inset;
      border: 1px solid #3dbac5;
    }
  }
`;
