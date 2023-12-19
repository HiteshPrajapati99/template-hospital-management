import { UploadedFile } from "express-fileupload";
import { InterfaceUser } from "../../service/const_interface_services";
import { FILE_PATH } from "../../service/const_values_service";
import DBService from "../../service/db_service";
import { Request, Response } from "express";

interface IClinic extends InterfaceUser {
  name: string;
  address: string;
  cc: string;
  phno: string;
}

interface ILicense extends InterfaceUser, IClinic {
  license_no: string;
  id: number;
}

type TLicense = Pick<ILicense, "license_no" | "id">;

export default class DClinics extends DBService {
  constructor() {
    super();
  }

  create_clinics = async (req: Request<{}, {}, IClinic, {}>, res: Response) => {
    if (
      this.varify<IClinic>({ parms: ["address", "cc", "name", "phno"], req })
    ) {
      return this.response.missing_field(res);
    }

    const { _user_id, address, cc, name, phno } = req.body;

    const ins = await this.insert(
      "insert into clinic_details (name,phno,address,cc,user_id) values(?,?,?,?,?)",
      [name, phno, address, cc, _user_id]
    );

    if (ins) {
      return this.response.success(res);
    }

    return this.response.error(res);
  };

  update_clinics = async (
    req: Request<{}, {}, ILicense, {}>,
    res: Response
  ) => {
    if (this.varify<TLicense>({ parms: ["id"], req })) {
      return this.response.missing_field(res);
    }

    let file_name;

    if (req.files && Object.keys(req.files).length) {
      file_name = await this.upload_file({
        file: req.files.license_media as UploadedFile,
        file_path: FILE_PATH.D_LICENSE_IMAGE,
      });
    }

    const { license_no, id, cc, name, phno } = req.body;

    const ins = await this.update({
      table: "clinic_details",
      condition: { id },
      parms: { license_no, license_media: file_name, cc, name, phno },
    });

    if (ins) {
      this.r = ins;
      return this.response.success(res);
    }

    return this.response.error(res);
  };
}
