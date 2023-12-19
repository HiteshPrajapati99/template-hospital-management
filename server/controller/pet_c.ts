import DBService from "../service/db_service";
import { Request, Response } from "express";

interface ISpices {
  name?: string;
  id?: number;
}

interface IBreed {
  name?: string;
  id?: number;
}

interface IColor {
  name?: string;
  id?: number;
}

interface IAnimalType {
  name?: string;
  id?: number;
}

export default class Pet extends DBService {
  constructor() {
    super();
  }

  // SPICES
  add_spices = async (req: Request<{}, {}, ISpices, {}>, res: Response) => {
    if (this.varify<ISpices>({ parms: ["name"], req })) {
      return this.response.missing_field(res);
    }

    const { name } = req.body;

    const check = await this.selectOne(
      "select id from pet_spices where lower(name) = ?",
      [name]
    );

    if (check) {
      return this.response.error(res, "This spices already exists");
    }

    const ins = await this.insert("insert into pet_spices (name) values(?)", [
      name,
    ]);

    if (ins) {
      this.s = ins;
      return this.response.success(res);
    }
    return this.response.error(res);
  };

  get_spices = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    this.r = await this.select(
      "select * from pet_spices where status = 1 order by substring(name,1,1) asc",
      []
    );

    return this.response.success(res);
  };

  delete_spices = async (req: Request<{}, {}, ISpices, {}>, res: Response) => {
    if (this.varify<ISpices>({ parms: ["id"], req })) {
      return this.response.missing_field(res);
    }

    const { id } = req.body;
    const d = await this.delete("delete from pet_spices where id = ?", [id]);

    if (d) {
      return this.response.success(res);
    }

    return this.response.error(res);
  };

  // BREED
  add_breed = async (req: Request<{}, {}, IBreed, {}>, res: Response) => {
    if (this.varify<IBreed>({ parms: ["name"], req })) {
      return this.response.missing_field(res);
    }

    const { name } = req.body;

    const check = await this.selectOne(
      "select id from pet_breed where lower(name) = ?",
      [name]
    );

    if (check) {
      return this.response.error(res, "This breed already exists");
    }

    const ins = await this.insert("insert into pet_breed (name) values(?)", [name]);

    if (ins) {
      this.s = ins;
      return this.response.success(res);
    }
    return this.response.error(res);
  };

  get_breed = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    this.r = await this.select(
      "select * from pet_breed where status = 1 order by substring(name,1,1) asc",
      []
    );

    return this.response.success(res);
  };

  delete_breed = async (req: Request<{}, {}, ISpices, {}>, res: Response) => {
    if (this.varify<ISpices>({ parms: ["id"], req })) {
      return this.response.missing_field(res);
    }

    const { id } = req.body;
    const d = await this.delete("delete from pet_breed where id = ?", [id]);

    if (d) {
      return this.response.success(res);
    }

    return this.response.error(res);
  };

  // COLORS
  add_color = async (req: Request<{}, {}, IColor, {}>, res: Response) => {
    if (this.varify<IColor>({ parms: ["name"], req })) {
      return this.response.missing_field(res);
    }

    const { name } = req.body;

    const check = await this.selectOne(
      "select id from pet_color where lower(name) = ?",
      [name]
    );

    if (check) {
      return this.response.error(res, "This color already exists");
    }

    const ins = await this.insert("insert into pet_color (name) values(?)", [name]);

    if (ins) {
      this.s = ins;
      return this.response.success(res);
    }
    return this.response.error(res);
  };

  get_color = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    this.r = await this.select(
      "select * from pet_color where status = 1 order by substring(name,1,1) asc",
      []
    );

    return this.response.success(res);
  };

  delete_color = async (req: Request<{}, {}, IColor, {}>, res: Response) => {
    if (this.varify<IColor>({ parms: ["id"], req })) {
      return this.response.missing_field(res);
    }

    const { id } = req.body;
    const d = await this.delete("delete from pet_color where id = ?", [id]);

    if (d) {
      return this.response.success(res);
    }

    return this.response.error(res);
  };

  // ANIMAL_TYPE
  add_animal_type = async (
    req: Request<{}, {}, IAnimalType, {}>,
    res: Response
  ) => {
    if (this.varify<IAnimalType>({ parms: ["name"], req })) {
      return this.response.missing_field(res);
    }

    const { name } = req.body;

    const check = await this.selectOne(
      "select id from pet_animal_type where lower(name) = ?",
      [name]
    );

    if (check) {
      return this.response.error(res, "This animal type already exists");
    }

    const ins = await this.insert("insert into pet_animal_type (name) values(?)", [
      name,
    ]);

    if (ins) {
      this.s = ins;
      return this.response.success(res);
    }
    return this.response.error(res);
  };

  get_animal_type = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    this.r = await this.select(
      "select * from pet_animal_type where status = 1 order by substring(name,1,1) asc",
      []
    );

    return this.response.success(res);
  };

  delete_animal_type = async (
    req: Request<{}, {}, IAnimalType, {}>,
    res: Response
  ) => {
    if (this.varify<IAnimalType>({ parms: ["id"], req })) {
      return this.response.missing_field(res);
    }

    const { id } = req.body;
    const d = await this.delete("delete from pet_animal_type where id = ?", [id]);

    if (d) {
      return this.response.success(res);
    }

    return this.response.error(res);
  };
}
