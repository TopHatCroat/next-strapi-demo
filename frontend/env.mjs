import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {
    PUBLIC_BACKEND_URL: z.string().url().optional(), //optional for now, but maybe it should be required?
  },
  runtimeEnv: process.env,
})
