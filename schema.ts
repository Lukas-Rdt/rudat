import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const contact = sqliteTable("contact", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
});

export const likes = sqliteTable("likes", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  likeCount: integer("likeCount", { mode: "number" }).default(0),
});

export const comments = sqliteTable("comments", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  comment: text("comment").notNull(),
  project: text("project").notNull(),
});
