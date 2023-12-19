import express from "express";
import AuthRoute from "./auth_r";
import UserRoute from "./users_r";
import DClinicRoute from "./doctor/d_clinics_r";
import PetRoute from "./pet_r";

const withOutAuthenticate = express();
withOutAuthenticate.use("/", AuthRoute);
withOutAuthenticate.use("/pet", PetRoute);

const withAuthenticate = express();
withAuthenticate.use("/users", UserRoute);
withAuthenticate.use("/doctor/clinics", DClinicRoute);

export { withOutAuthenticate, withAuthenticate };
