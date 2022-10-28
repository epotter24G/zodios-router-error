import { zodiosContext } from "@zodios/express";
import { makeApi } from "@zodios/core";
import z from "zod";

const user = z.object({
  user: z
    .object({
      id: z.number(),
      name: z.string(),
      isAdmin: z.boolean(),
    })
    .optional(),
});

const baseCtx = zodiosContext(user);

const baseApi = makeApi([
  {
    method: "get",
    path: "/test",
    alias: "test",
    description: "test item",
    response: z.object({
      id: z.string(),
      name: z.string().nullable(),
    }),
  },
]);

const router = baseCtx.router(baseApi);

router.get("/test", (req, res) => {});
