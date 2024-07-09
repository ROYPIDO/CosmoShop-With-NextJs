import React from "react";
import { Table } from "react-bootstrap";

const DashboardProducts = ({ products }) => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{products.map((item, index) => (
					<tr key={item.id}>
						<td>{index+1}</td>
						<td>{item.title}</td>
						<td>{item.category}</td>
						<td>${item.price}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default DashboardProducts;
