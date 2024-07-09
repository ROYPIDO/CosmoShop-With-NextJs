import Csc from "@/components/csc";
import MyButton from "@/components/my-button";
import PageHeader from "@/components/page-header";
import { wait } from "@/helpers/misc";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description: "Our company supports ...",
};


const Page = async () => {
	//await wait(5000);

	//if (Math.random() > 0.5) throw new Error("Invalid parameters");

	return (
		<>
			<PageHeader title="Contact us"/>
			<Csc>
				<MyButton/>
			</Csc>
		</>
	);
};

export default Page;
