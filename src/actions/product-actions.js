"use server";
import { API_URL } from "@/helpers/config";
import { transformYupErrors } from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import * as Yup from "yup";

const FormSchema = Yup.object({
	title: Yup.string().required("Required"),
	price: Yup.number().typeError("Invalid price").required("Required"),
	discounted: Yup.number().typeError("Invalid discount").required("Required"),
	category: Yup.string().required("Required"),
});

export const createProductAction = async (prevState, formData) => {
	// FormData formatinda gelen formData degiskeni JS object e cevirilir
	const fields = Object.fromEntries(formData.entries());

	try {
		//Validation
		FormSchema.validateSync(fields, { abortEarly: false });

		//Mutation
		const res = await fetch(`${API_URL}/products`, {
			method: "post",
			body: JSON.stringify(fields),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw new Error("Something went wrong");

		// Revalidation
		revalidatePath("/products");
		revalidatePath("/dashboard/products");

		return { ok: true, message: "Product was created", errors: {} };
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		}

		return {
			ok: false,
			message: "Something went wrong. Try again later",
			errors: null,
		};
	}
};

export const updateProductAction = async (prevState, formData) => {
	// FormData formatinda gelen formData degiskeni JS object e cevirilir
	const fields = Object.fromEntries(formData.entries());
    console.log(fields)
	try {
		//Validation
		FormSchema.validateSync(fields, { abortEarly: false });

		//Mutation
		const res = await fetch(`${API_URL}/products/${1}`, {
			method: "put",
			body: JSON.stringify(fields),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) throw new Error("Something went wrong");

		// Revalidation
		revalidatePath("/products");
		revalidatePath("/dashboard/products");

		return { ok: true, message: "Product was updated", errors: {} };
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		}

		return {
			ok: false,
			message: "Something went wrong. Try again later",
			errors: null,
		};
	}
};

export const deleteProductAction = async (id) => {
	try {
		if (!id) throw new Error("Id is missing");

		const res = await fetch(`${API_URL}/products/${id}`, {
			method: "delete",
		});

		if (!res.ok) throw new Error("Something went wrong");

		revalidatePath("/products");
		revalidatePath("/dashboard/products");

        return {
			ok: true,
			message: "Product was deleted",
			errors: {},
		};


	} catch (err) {
		return {
			ok: false,
			message: err.message,
			errors: {},
		};
	}
};
