import React from "react";
import styles from "./page-header.module.scss";

const PageHeader = ({ title }) => {
	return (
		<h1 className={styles.header}>
			<span>{title}</span>
		</h1>
	);
};

export default PageHeader;
