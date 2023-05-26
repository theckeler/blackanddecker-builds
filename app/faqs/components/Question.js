const Question = ({ title }) => {
	const faqOpen = (e) => {
		e.preventDefault();
		const parentE = e.currentTarget.parentElement;
		console.log(e.currentTarget.parentElement);
		parentE.querySelector(".icon-plus").classList.toggle("rotate-45");
		parentE.nextElementSibling.classList.toggle("hidden");
	};

	return (
		<button
			className="font-bold w-full flex items-center"
			onClick={(e) => {
				faqOpen(e);
			}}>
			<span className="text-left select-none">{title}</span>
			<span className="ml-auto w-6 icon-plus">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
					<path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
				</svg>
			</span>
		</button>
	);
};

export default Question;
