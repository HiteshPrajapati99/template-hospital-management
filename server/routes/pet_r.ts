import { Router } from "express";
import Pet from "../controller/pet_c";
import { auth_middleware } from "../middleware/auth_middleware";
const PetRoute = Router();
const Spices = Router();
const Breed = Router();
const AnimalType = Router();
const Color = Router();

Spices.post("/add", auth_middleware, (req, res) => {
  const c = new Pet();
  c.add_spices(req, res);
});
Spices.get("/get-list", (req, res) => {
  const c = new Pet();
  c.get_spices(req, res);
});
Spices.post("/delete", auth_middleware, (req, res) => {
  const c = new Pet();
  c.delete_spices(req, res);
});

Breed.post("/add", auth_middleware, (req, res) => {
  const c = new Pet();
  c.add_breed(req, res);
});
Breed.get("/get-list", (req, res) => {
  const c = new Pet();
  c.get_breed(req, res);
});
Breed.post("/delete", auth_middleware, (req, res) => {
  const c = new Pet();
  c.delete_breed(req, res);
});

AnimalType.post("/add", auth_middleware, (req, res) => {
  const c = new Pet();
  c.add_animal_type(req, res);
});
AnimalType.get("/get-list", (req, res) => {
  const c = new Pet();
  c.get_animal_type(req, res);
});
AnimalType.post("/delete", auth_middleware, (req, res) => {
  const c = new Pet();
  c.delete_animal_type(req, res);
});

Color.post("/add", auth_middleware, (req, res) => {
  const c = new Pet();
  c.add_color(req, res);
});
Color.get("/get-list", (req, res) => {
  const c = new Pet();
  c.get_color(req, res);
});
Color.post("/delete", auth_middleware, (req, res) => {
  const c = new Pet();
  c.delete_color(req, res);
});

PetRoute.use("/spices", Spices);
PetRoute.use("/breed", Breed);
PetRoute.use("/animal-type", AnimalType);
PetRoute.use("/color", Color);

export default PetRoute;
