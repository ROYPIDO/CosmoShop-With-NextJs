"use server";
import { API_URL } from "@/helpers/config";
import { transformFormDataToJson, transformYupErrors } from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import * as Yup from "yup";

const FormSchema = Yup.object({
	title: Yup.string().required("Required"),
	price: Yup.number().typeError("Invalid price").required("Required"),
	discounted: Yup.number().typeError("Invalid discount").min(0, "Must be 0 or above").max(99, "Must be below 100").required("Required"),
	category: Yup.string().required("Required"),
});

export const createProductAction = async (prevState, formData) => {
	const fields = transformFormDataToJson(formData);

	try {
		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await fetch(`${API_URL}/products/add`, {
			method: "post",
			body: JSON.stringify({
				title: fields.title,
				price: Number(fields.price),
				discountPercentage: Number(fields.discounted),
				category: fields.category,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (!res.ok) throw new Error("Something went wrong");

		const data = await res.json();

		revalidatePath("/products");
		revalidatePath(`/products/${data.id}`);
		revalidatePath("/dashboard/products");
		revalidatePath(`/dashboard/products/${data.id}`);

		return { ok: true, message: "Product was created", errors: {} };
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		}
		return { ok: false, message: "Something went wrong. Try again later", errors: null };
	}
};

export const updateProductAction = async (prevState, formData) => {
	const fields = transformFormDataToJson(formData);

	try {
		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await fetch(`${API_URL}/products/${fields.id}`, {
			method: "put",
			body: JSON.stringify({
				title: fields.title,
				price: Number(fields.price),
				discountPercentage: Number(fields.discounted),
				category: fields.category,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (!res.ok) throw new Error("Something went wrong");

		revalidatePath("/products");
		revalidatePath(`/products/${fields.id}`);
		revalidatePath("/dashboard/products");
		revalidatePath(`/dashboard/products/${fields.id}`);

		return { ok: true, message: "Product was updated", errors: {} };
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		}
		return { ok: false, message: "Something went wrong. Try again later", errors: null };
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

		return { ok: true, message: "Product was deleted", errors: {} };
	} catch (err) {
		return { ok: false, message: err.message, errors: {} };
	}
};

