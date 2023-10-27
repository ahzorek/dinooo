import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  console.log(ctx);
  console.log(req);
  const resp = await ctx.next();
  return resp;
}
