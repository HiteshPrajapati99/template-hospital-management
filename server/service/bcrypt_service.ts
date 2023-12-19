import { compare, hash } from "bcrypt";

export const generate_password = async (password: string):Promise<(string | null)> => {
  const d = new Promise((resolve)=>{
    hash(password, 10, (err: Error | undefined, encrypted) => {
      if (typeof err === undefined) {
        resolve(null);
      }
      resolve(encrypted);
    });
  });

  return await d as (string | null);
};

export const compare_password = async (password: string, encrypt: string):Promise<boolean> => {
  const d = new Promise((resolve)=>{
    compare(password, encrypt, (err: Error | undefined, result) => {
      if (typeof err === undefined) {
        resolve(false);
      }
      resolve(result);
    });
  });

  return await d as boolean;
};

