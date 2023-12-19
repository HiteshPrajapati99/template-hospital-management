export const algorithm = "aes-256-cbc";

// Define your static security key (256 bits for AES-256)
export const staticSecurityKey = Buffer.from("12345678901234567890123456789012");

// Define your static initialization vector (IV) (128 bits for AES)
export const staticInitVector = Buffer.from("1234567890123654");
