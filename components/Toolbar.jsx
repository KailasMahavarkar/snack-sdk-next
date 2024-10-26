import React from "react";

const css = (str) => str;

export const Toolbar = (props) => {
	const { title, children } = props;
	return (
		<div className={css(styles.toolbar)}>
			<div className={css(styles.toolbarTitle)}>{title}</div>
			{children}
		</div>
	);
};

const styles = {
	toolbar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		height: 40,
		marginBottom: 8,
	},
	toolbarTitle: {
		display: "flex",
		flex: 1,
		fontWeight: "bold",
		opacity: 0.7,
	},
};
