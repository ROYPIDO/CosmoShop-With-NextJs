import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const config = {
	providers: [
		GitHub,
		Google,
		Credentials({
			credentials: {
				username: { label: "Username", value: "emilys" },
				password: {
					label: "Password",
					type: "password",
					value: "emilyspass",
				},
			},
			authorize: async (credentials) => {
				const res = await fetch("https://dummyjson.com/auth/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(credentials),
				});
				if (!res.ok) return null;
				const user = await res.json();
				return user;
			},
		}),
	],
	callbacks: {
		authorized({ request, auth }) {
			const { pathname, searchParams } = request.nextUrl;

			const isUserLoggedIn = !!auth;
			const isUserInLoginPage = pathname === "/login";

			if (isUserLoggedIn && isUserInLoginPage) {
				const callbackUrl =
					searchParams.get("callbackUrl") || "/dashboard";

				const url = new URL(callbackUrl, request.nextUrl);
				return Response.redirect(url);
			}

			if (pathname.startsWith("/dashboard")) return isUserLoggedIn;

			return true;
		},
	},
	pages: {
		signIn: "/login",
	},
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
