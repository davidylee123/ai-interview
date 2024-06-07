/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:pQCOqMZzE52s@ep-delicate-water-a56sw6ld.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
};