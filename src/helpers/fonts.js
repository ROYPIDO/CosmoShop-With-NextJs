import { Montserrat, Poppins } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "500", "800"],
	variable: "--font-montserrat",
});

export const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["200", "400", "600", "800"],
});
