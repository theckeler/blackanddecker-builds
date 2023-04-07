const Question = ({ title }) => {
	const faqOpen = (e) => {
		e.preventDefault();
		e.stopPropagation();
		e.currentTarget.parentElement.nextElementSibling.classList.toggle("hidden");
	};

	return (
		<button
			className="font-bold w-full flex items-center"
			onClick={(e) => {
				faqOpen(e);
			}}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="0 96 960 960"
				className="w-auto inline-block mr-2 select-none"
				style={{ maxWidth: "32px" }}>
				<path
					d="M185 871V600h91v180h180v91H185Zm500-320V371H505v-91h271v271h-91Z"
					fill="#aaaaaa"
				/>
			</svg>
			<span className="text-left select-none">{title}</span>
		</button>
	);
};

export default Question;
