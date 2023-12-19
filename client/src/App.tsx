import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DOCTOR_MAIN_PAGE,
  D_ACCOUNT_FEEDBACK_ADMIN,
  D_ACCOUNT_FEEDBACK_PATIENT,
  D_ACCOUNT_MEDICAL_REPORT,
  D_ACCOUNT_NOTES,
  D_ACCOUNT_PAYMENT_H,
  D_Appointment,
  D_CHAT,
  D_HOME_PAGE,
  D_MY_ACCOUNT,
  D_NOTIFICATIONS,
  D_TIPS,
  DoctorRegister,
  LandingPage,
  LoginPage,
  RegisterReport,
  RegisterSelect,
  USER_MAIN_PAGE,
  U_ACCCOUNT_PHOTO,
  U_ACCOUNT_FEEDBACK_ADMIN,
  U_ACCOUNT_FEEDBACK_DOCTOR,
  U_ACCOUNT_PAYMENT,
  U_ACCOUNT_PET,
  U_Appointment,
  U_Chat,
  U_Find_Doctor,
  U_HomePage,
  U_MY_ACCOUNT,
  U_MyPet,
  U_Notification,
  U_Pet_Info,
  U_Tips,
  UserRegister,
} from "./pages";
import "./app.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register_type" element={<RegisterSelect />} />

          {/* user register */}
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/doctor/register" element={<DoctorRegister />} />
          <Route path="/register_report" element={<RegisterReport />} />

          {/* ======================== user Routes ====================  */}

          <Route path="/user" element={<USER_MAIN_PAGE />}>
            <Route index element={<U_HomePage />} />
            <Route path="find_doctor" element={<U_Find_Doctor />} />
            <Route path="appointment" element={<U_Appointment />} />
            {/* <Route path="find_doctor/select_date" element={<U_Select_Date />} /> */}
            <Route path="find_doctor/pet_info" element={<U_Pet_Info />} />
            <Route path="my_pet" element={<U_MyPet />} />
            <Route path="chat" element={<U_Chat />} />
            <Route path="tips" element={<U_Tips />} />
            <Route path="notifications" element={<U_Notification />} />
            <Route path="my_account" element={<U_MY_ACCOUNT />} />
            <Route path="my_account/pets" element={<U_ACCOUNT_PET />} />
            <Route path="my_account/photo" element={<U_ACCCOUNT_PHOTO />} />
            <Route
              path="my_account/payment_history"
              element={<U_ACCOUNT_PAYMENT />}
            />
            <Route
              path="my_account/feedback_doctor"
              element={<U_ACCOUNT_FEEDBACK_DOCTOR />}
            />
            <Route
              path="my_account/feedback_admin"
              element={<U_ACCOUNT_FEEDBACK_ADMIN />}
            />
          </Route>

          {/* ======================== doctor Routes ====================  */}

          <Route path="/doctor" element={<DOCTOR_MAIN_PAGE />}>
            <Route index element={<D_HOME_PAGE />} />
            <Route path="appointment" element={<D_Appointment />} />
            <Route path="chat" element={<D_CHAT />} />
            <Route path="tips" element={<D_TIPS />} />
            <Route path="notification" element={<D_NOTIFICATIONS />} />
            <Route path="my_account" element={<D_MY_ACCOUNT />} />
            <Route
              path="my_account/feedback_admin"
              element={<D_ACCOUNT_FEEDBACK_ADMIN />}
            />
            <Route
              path="my_account/feedback_patient"
              element={<D_ACCOUNT_FEEDBACK_PATIENT />}
            />
            <Route
              path="my_account/medical_report"
              element={<D_ACCOUNT_MEDICAL_REPORT />}
            />
            <Route path="my_account/notes" element={<D_ACCOUNT_NOTES />} />

            <Route
              path="my_account/payment_history"
              element={<D_ACCOUNT_PAYMENT_H />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
