"use server";

import { signIn } from "@/auth";
import {
	transformFormDataToJson,
	transformYupErrors,
} from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";

const FormSchema = Yup.object({
	username: Yup.string().required("Required"),
	password: Yup.string().required("Required"),
});

export const signInWithCredentialsAction = async (prevState, formData) => {
	const fields = transformFormDataToJson(formData);

	try {
		FormSchema.validateSync(fields, { abortEarly: false });
		await signIn("credentials", fields);
	
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		} else if (err instanceof AuthError) {
			return {
				ok: false,
				message: "Authentication failed",
				errors: {},
			};
		}

		// signIn methodu basarili oldugunda ortaya bir NEXT_REDIRECT firlatilir. Kodlarimiz try-catch icinde oldugu icin bu firlatilan redirection calismaz, hata gibi algilanir ve yakalanir. Bu sebeple alttaki throw err, yakalan bu redirection islemini tekrar firlatarak calismasini saglar.

		throw err;
	}
};

export const signInWithSocialAction = async (formData) => {
	const provider = formData.get("provider");

	try {
		await signIn(provider);
	} catch (err) {
		if (err instanceof AuthError) {
			return {
				ok: false,
				message: "Authentication failed",
				errors: {},
			};
		}

        throw err;
	}
};
