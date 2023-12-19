export const enum RESPONSE_MESSAGE {
  EMAIL_PASSWORD_NOT_MATCH = "Email and password not match.",
  EMAIL_ALREADY_EXISTS = "This email is already exists.",
  SOMETHING_WENT_WRONG = "opps! something went wrong. Please try again.",
  TOKEN_MISSING = "Please provide the valid token",
  FILE_NOT_UPLOAD = "File not uploaded. Please try again.",
}

export const enum STATUSCODE {
  SUCCESS = 200,
  AUTHENTICATION_ERROR = 401,
  INTERNAL_SERVER = 500,
  BAD_REQUST = 400,
}

export const enum FILE_PATH {
  D_LICENSE_IMAGE = "doctor/license",
  D_SIGNATURE_IMAGE = "doctor/signature",
}
