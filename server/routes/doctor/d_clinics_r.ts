import {Router} from "express";
import DClinics from "../../controller/doctor/d_clinics_c";
const DClinicRoute = Router();

DClinicRoute.post("/create",(req,res)=>{const c = new DClinics(); c.create_clinics(req,res)});
DClinicRoute.post("/update",(req,res)=>{const c = new DClinics(); c.update_clinics(req,res)});


export default DClinicRoute;