"use server";

import { db } from "@/lib";

const getAuthStatus = async () => {
  // Auth disabled, always return success or mock user
  return { success: true };
};

export default getAuthStatus;
