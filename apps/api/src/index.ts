import { createApp } from './app.js';
import { env } from './shared/config.js';
import { connectDb } from './shared/db.js';

const app = createApp();

await connectDb();

app.listen(env.API_PORT, () => {
  console.log(`Server is running on port ${env.API_PORT}`);
});
