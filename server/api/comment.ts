import { comments } from "~/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const comment = await db.select().from(comments).execute();
    return comment;
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);

    await db
      .insert(comments)
      .values({
        name: body.name,
        comment: body.comment,
        project: body.project,
      })
      .execute();

    return {
      name: body.name,
      comment: body.comment,
      project: body.project,
    };
  }
});
