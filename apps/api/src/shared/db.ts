import mongoose from 'mongoose';
import { env } from './config.js';

export async function connectDb(): Promise<void> {
  try {
    await mongoose.connect(env.MONGODB_URI);
  } catch (error) {
    console.error('MongoDB connection failed', error);
  }
}

export async function pingDb(): Promise<boolean> {
  if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected) {
    return false;
  }

  const db = mongoose.connection.db;

  if (!db) {
    return false;
  }

  try {
    await db.admin().ping();
    return true;
  } catch (error) {
    console.error('MongoDB ping failed', error);
    return false;
  }
}
