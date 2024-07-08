import validator from "validator";
import { z } from "zod";
import { USERNAME_EXPRESSION } from "../utils/regularExpressions";

export const VALIDATORS_REGISTER = z.object({
  username: z
      .string()
      .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
      .refine(
        (value) => validator.matches(value, USERNAME_EXPRESSION),
        "El nombre de usuario no es valido",
      ),
  email: z.string().email("El email no es valido"),
  password: z
  .string()
  .min(8, "La contraseña debe ser de al menos 8 caracteres")
  .refine(
    (value) => validator.isStrongPassword(value),
    "La contraseña debe tener al menos 1 letra minúscula, 1 letra mayúscula, 1 número, 1 símbolo",
  ),
  repeated_password: z.string(),
})
.superRefine(({ password, repeated_password }, ctx) => {
  if (password !== repeated_password) {
    ctx.addIssue({
      code: "custom",
      path: ["repeated_password"],
      message: "Las contraseñas deben ser iguales",
    });
  }
});
