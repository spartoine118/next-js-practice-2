import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  connectedDatabase,
  disconnectDatabase,
} from "../../../../database/connection";
import { User, UserCredentials, UserWithId } from "@/database/types/types";
import { login } from "@/services/auth.service";

const authOptions: AuthOptions = {
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        return { ...token, user: user };
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token.user) {
        session.user = token.user;
        return { ...session, user: token.user };
      }
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "password",
          type: "text",
          placeholder: "Enter a password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.password && !credentials?.username) {
          return null;
        }
        const query: UserCredentials = {
          email: credentials.username,
          password: credentials.password,
        };

        const data = await login(query);

        if (data) {
          // Any object returned will be saved in `user` property of the JWT
          const user = {
            id: data._id.toString(),
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
          };
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
