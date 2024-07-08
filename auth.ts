import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import sendVerificationRequest from "@/lib/authSendRequest";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Resend({
      from: process.env.FROM,
      apiKey: process.env.AUTH_RESEND_KEY,
      sendVerificationRequest,
    }),
  ],
});
