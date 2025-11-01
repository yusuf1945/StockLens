import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Resolve .env path manually — one level above /scripts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "..", ".env") });

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("ERROR: MONGODB_URI must be set in .env");
    process.exit(1);
  }

  try {
    const startedAt = Date.now();
    await mongoose.connect(uri, { bufferCommands: false });
    const elapsed = Date.now() - startedAt;

    const dbName = mongoose.connection?.name || "(unknown)";
    const host = mongoose.connection?.host || "(unknown)";

    console.log(
      `✅ OK: Connected to MongoDB [db="${dbName}", host="${host}", time=${elapsed}ms]`
    );

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("❌ ERROR: Database connection failed");
    console.error(err);
    try {
      await mongoose.connection.close();
    } catch {}
    process.exit(1);
  }
}

main();
