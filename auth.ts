import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { EmailTemplate } from "@/components/email-template";
import clientPromise from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Resend({
      server: "smtp.resend.com",
      from: "Ná Regua App <naoresponda@na-regua.site>",
      apiKey: process.env.AUTH_RESEND_KEY,
      secret: process.env.AUTH_SECRET,
    }),
  ],
});
