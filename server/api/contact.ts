import { contact } from "~/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    const contacts = await db.select().from(contact).execute();
    return contacts;
  } else if (event.node.req.method === "POST") {
    const body = await readBody(event);

    await db
      .insert(contact)
      .values({
        email: body.email,
        subject: body.subject,
        message: body.message,
      })
      .execute();

    return {
      email: body.email,
      subject: body.subject,
      message: body.message,
    };
  }
});
