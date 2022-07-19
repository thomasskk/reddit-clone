import { Context } from '../context'

export const TrackerService = (ctx: Context) => {
  return {
    //////////////////////////////////////////
    getIp() {
      const xforwardedfor = ctx.req.headers['x-forwarded-for']
      const ip =
        typeof xforwardedfor === 'string'
          ? xforwardedfor?.split(',').shift()
          : ctx.req.socket?.remoteAddress

      return ip || 'unknown'
    },
    //////////////////////////////////////////
  }
}
