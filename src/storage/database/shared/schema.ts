import { pgTable, serial, varchar, integer, timestamp, index } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const healthCheck = pgTable("health_check", {
	id: serial().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const votes = pgTable(
  "votes",
  {
    id: serial().primaryKey(),
    game_slug: varchar("game_slug", { length: 64 }).notNull(),
    category: varchar("category", { length: 64 }).notNull(),
    item_id: varchar("item_id", { length: 128 }).notNull(),
    score: integer("score").notNull(),
    ip_hash: varchar("ip_hash", { length: 64 }).notNull(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index("votes_game_slug_idx").on(table.game_slug),
    index("votes_game_category_idx").on(table.game_slug, table.category),
    index("votes_item_id_idx").on(table.game_slug, table.category, table.item_id),
    index("votes_ip_hash_idx").on(table.ip_hash),
    index("votes_created_at_idx").on(table.created_at),
  ]
);
