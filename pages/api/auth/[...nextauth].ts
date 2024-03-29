import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Stripe from "stripe";
import type { NextAuthOptions } from "next-auth";
import prisma from "@/utils/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string, {
        apiVersion: "2022-11-15",
      });
      // lets create a stripe customer
      if (user.name && user.email) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name,
        });
        // also update the prisma user with the stripe customer id
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            stripeCustomerId: customer.id,
          },
        });
      }
    },
  },
};

export default NextAuth(authOptions);
