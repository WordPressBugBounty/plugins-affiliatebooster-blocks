export const EmptyStar = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style={{ fill: props.fillColor }}
		fill={props.fillColor}
		// width={props.size}
		// height={props.size}
		viewBox="0 0 510 510"
	>
		<path d="M510,197.472l-183.37-15.734L255,12.75l-71.629,168.988L0,197.472l139.103,120.539L97.41,497.25L255,402.186 l157.59,95.064l-41.692-179.239L510,197.472z M255,354.348l-95.957,57.886l25.398-109.166l-84.736-73.389l111.69-9.588 L255,117.172l43.605,102.918l111.689,9.588l-84.711,73.389l25.398,109.166L255,354.348z" />
	</svg>
);

export const HalfStar = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style={{ fill: props.fillColor }}
		fill={props.fillColor}
		// width={props.size}
		// height={props.size}
		viewBox="0 0 510 510"
	>
		<path d="M510,197.472l-183.37-15.734L255,12.75l-71.629,168.988L0,197.472l0,0l0,0l139.103,120.539L97.41,497.25L255,402.186l0,0 l157.59,95.039l-41.692-179.239L510,197.472z M255,354.348V117.172l43.605,102.918l111.689,9.588l-84.711,73.389l25.398,109.166 L255,354.348z" />
	</svg>
);

export const BlockIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 510 510"
	>
		<path
			d="M510,197.472l-183.37-15.734L255,12.75l-71.629,168.988L0,197.472l0,0l0,0l139.103,120.539L97.41,497.25L255,402.186l0,0 l157.59,95.039l-41.692-179.239L510,197.472z M255,354.348V117.172l43.605,102.918l111.689,9.588l-84.711,73.389l25.398,109.166 L255,354.348z"
			fill="#f64646"
		/>
	</svg>
);

export const FullStar = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style={{ fill: props.fillColor }}
		fill={props.fillColor}
		// width={props.size}
		// height={props.size}
		viewBox="0 0 510 510"
	>
		<polygon
			points="255,402.212 412.59,497.25 370.897,318.011 510,197.472 326.63,181.738 255,12.75 183.371,181.738 0,197.472 139.103,318.011 97.41,497.25"
			id="star"
		/>
	</svg>
);
