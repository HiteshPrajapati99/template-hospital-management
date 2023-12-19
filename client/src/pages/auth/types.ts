export type TUserTabs = "user_info" | "pet_info" | "medical" | "symptoms";
export type TDoctorTabs = "user_info" | "clinic_info" | "license" | "digital";

export interface T_USER_INPUTS {
  //   user tab
  f_name: string;
  p_number: string;
  email: string;
  password: string;
  c_password: string;

  // pet tab
  pet_name: string;
  species: string;
  breed: string;
  age: string;
  gender: string;
  sterilized: string;
  color: string;
  weight: string;
  animal_type: string;
  notes: string;
  pet_bite: boolean;
  group_appointment: boolean;

  // mediacl tab
  give_pet_vaccines: boolean;
  pet_vaccines_date: string;
  known_allergies: boolean;
  allergies_desc: string;
  previous_treatments: boolean;
  p_treatment_date: string;
  product_req: string;

  //    symptoms tab

  current_symptoms: string;
}
