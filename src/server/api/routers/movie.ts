import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const movieRouter = createTRPCRouter({

  allMovieIds: publicProcedure
    .query( ({ ctx }) => {
      console.log(ctx);
      return ctx.db.movie.findMany({
        select: {
          id: true
        }
      })
    }),


  movie : publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      // console.log(ctx);
      return ctx.db.movie.findUnique({where: { id: input.id }})
    })

});