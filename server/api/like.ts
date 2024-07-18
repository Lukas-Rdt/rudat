import { sql } from "drizzle-orm";
import { likes } from "~/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const allLikes = await db.select().from(likes).execute();
    return allLikes;
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const projectName = body.name;

    const existingProjects = await db
      .select()
      .from(likes)
      .where(sql`name = ${projectName}`)
      .execute();

    if (existingProjects.length === 0) {
      await db
        .insert(likes)
        .values({
          name: projectName,
          likeCount: 0,
        })
        .execute();
    }

    await db
      .update(likes)
      .set({
        likeCount: sql`likeCount + 1`,
      })
      .where(sql`name = ${projectName}`)
      .execute();

    const updatedLikes = await db
      .select()
      .from(likes)
      .where(sql`name = ${projectName}`)
      .execute();

    return updatedLikes;
  }
});
