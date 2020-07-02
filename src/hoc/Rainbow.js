import React from 'react';

function Rainbow(WrappedComponent) {
	const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
	const randomColour = colours[Math.floor(Math.random() * 5)];
	const className = `${randomColour}-text`;

	return (props) => {
		return (
			<div className={className}>
				{/* ラップコンポーネントがpropsを受け取るものだった場合 */}
				<WrappedComponent {...props} />
			</div>
		);
	};
}

export default Rainbow;
