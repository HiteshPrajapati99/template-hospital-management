import express from "express";
import path from "path";
import logger from "morgan";
import cors from "cors";
import YAML from "yamljs";
import postmanToOpenApi from "postman-to-openapi";
import swaggerUi from "swagger-ui-express";
import { withAuthenticate, withOutAuthenticate } from "./routes";
import { PORT } from "./config/env_config";
import { auth_middleware } from "./middleware/auth_middleware";
import fileUpload from "express-fileupload";

// INTIALIZATION
const server: express.Application = express();

// ADD DEPENDENCY
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(logger("dev"));
server.use(cors({ origin: process.env.ALLOW_ORIGIN! }));

server.use(fileUpload({
  createParentPath:true,
  
  limits: { fileSize: 50 * 1024 * 1024 },
}));


// SUPPORT STATIC
server.use(express.static(path.join(__dirname, "public")));

// MAKE THE SWEGGER
postmanToOpenApi(
  "postman/PETdx.postman_collection.json",
  path.join("postman/swagger.yml"),
  { defaultTag: "General" }
)
  .then((data) => {
    let result = YAML.load("postman/swagger.yml");
    result.servers[0].url = "/";
    server.use("/swagger", swaggerUi.serve, swaggerUi.setup(result));
  })
  .catch((e) => {
    console.log("Swagger Generation stopped due to some error",e);
  });

// Implement Routes
server.use("/api",withOutAuthenticate);
server.use(auth_middleware);
server.use("/api/auth", withAuthenticate);


// ERROR HANDLING
// server.use(
//   (
//     err: ErrorRequestHandler,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     return res.status(STATUSCODE.INTERNAL_SERVER).json({
//       s: 0,
//       m: RESPONSE_MESSAGE.SOMETHING_WENT_WRONG,
//     });
//   }
// );

// LISTEN SERVER
server.listen(PORT! || 5001, () => {
  console.log(`Hey budy your server is running on PORT-${PORT}. :)`);
});
