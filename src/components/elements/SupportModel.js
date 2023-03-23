const SupportModel = ({ title, sub, addClass, addStyle }) => {
	return (
		<form
			action="/on/demandware.store/Sites-troybilt-Site/en_US/Search-Show"
			className="flex flex-column h-100"
			method="get"
			name="simpleSearch"
			noValidate=""
			role="search">
			<h2 className="text-center">{title}</h2>
			<p className="text-center">{sub}</p>

			<label htmlFor="search-by-number">Model #, Part # or Item #</label>

			<input
				autoComplete="off"
				className="form-control search-field"
				id="search-by-number"
				name="q"
				required=""
				type="search"
				aria-describedby="16680858695420"
			/>

			<div className="mt-3">
				<img
					src="https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dwf746b099/Model-Plates/Find_Model_Number_Troy_Bilt.jpg"
					alt=""
					className="ml-auto mr-auto"
				/>
				<p className="my-2">
					The Model number is eleven characters long and is printed on the left
					of the product identification label. Characters can include numbers,
					letters or hyphens.
				</p>
			</div>

			<button className="btn btn-secondary btn-pf-search mt-auto" type="submit">
				Find Support
			</button>
		</form>
	);
};

export default SupportModel;
