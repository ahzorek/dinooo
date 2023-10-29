import { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  ctx.state.ip = ctx.remoteAddr.hostname
  // ctx.state.req = req
  
  const resp = await ctx.next();
  return resp;
}
