// src/lib/validation.ts
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    // you can add more complexity rules if you want
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, "Must contain a special character"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;