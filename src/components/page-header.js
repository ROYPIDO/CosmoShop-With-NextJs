import React from "react";
import styles from "./page-header.module.scss";

const PageHeader = ({ title, subtitle }) => {
	return (
		<div className={styles.pageHeader}>
			<h1>{title}</h1>
			{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
		</div>
	);
};

export default PageHeader;
