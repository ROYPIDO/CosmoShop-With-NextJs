"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const DeleteProductButton = ({ productId }) => {
	const handleDelete = async () => {
		const answer = confirm("Are you sure to delete?");
		if (!answer) return;

		const res = await deleteProductAction(productId);

        if(!res.ok){
            alert(res.message);
        }

	};

	return (
		<Button
			variant="danger"
			className="btn btn-link text-dark ms-2"
			onClick={handleDelete}
		>
			<FaTrash />
		</Button>
	);
};

export default DeleteProductButton;
