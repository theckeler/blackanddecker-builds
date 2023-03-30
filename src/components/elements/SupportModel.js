import Button from "../elements/Button";

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
					src="https://mtdproducts.my.salesforce-sites.com/ProductRegistration/resource/1619086108000/CmsTemp/ProductRegistration/img/troy-bilt-US-model-plate.jpg"
					alt=""
					className="ml-auto mr-auto"
				/>
				<p className="my-2">
					The Model number is eleven characters long and is printed on the left
					of the product identification label. Characters can include numbers,
					letters or hyphens.
				</p>
			</div>

			<Button
				copy="Find Support"
				url="https://www.mtdparts.com/en_US/ari-partstream.html"
				addClass="btn btn-block btn-secondary mt-auto"
			/>
		</form>
	);
};

export default SupportModel;
