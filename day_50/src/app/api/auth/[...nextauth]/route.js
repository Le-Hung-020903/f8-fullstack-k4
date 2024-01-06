import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET ?? "",
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
    ],
    session: {
        strategy: "jwt",
    },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) token.role = user.role;
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         if (session?.user) session.user.role = token.role;
    //         return session;
    //     },
    // },
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
