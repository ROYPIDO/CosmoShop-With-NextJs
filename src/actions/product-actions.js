"use server"
import { API_URL } from "@/helpers/config";
import { revalidatePath } from "next/cache";
import * as Yup from "yup";

const FormSchema = Yup.object({
    title: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    discounted: Yup.number().required("Required"),
    category: Yup.string().required("Required"),
})




export const createProductAction = async (formData) => {
    // FormData formatinda gelen formData degiskeni JS object e cevirilir
    const fields = Object.fromEntries(formData.entries());

    try {
        //Validation
        FormSchema.validateSync(fields);

        //Mutation
        const res = await fetch(`${API_URL}/products`, {
            method: "post",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(!res.ok) throw new Error("Something went wrong")

        // Revalidation   
        revalidatePath("/products");
        revalidatePath("/dashboard/products");

        
    } catch (err) {
        console.log(err)
    }

    



}



