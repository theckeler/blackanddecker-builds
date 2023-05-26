import SelectChange from "../functions/selectChange";

export default function Info() {
	return (
		<div className="p-4" style={{ backgroundColor: "#baeef6" }}>
			<h2 className="h4 pb-2 mb-2 border-b">Product Information</h2>

			<ul>
				<li className=" mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Type <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<select
						id="request-type"
						className="w-full"
						onChange={(e) => {
							SelectChange(e, ["info-product", "info-buy", "info-doc"]);

							if (
								e.currentTarget.value === "info-product" ||
								e.currentTarget.value === "info-buy"
							) {
								document
									.querySelector(`#address-block`)
									.classList.remove("hidden");
							}
						}}>
						<option value="" defaultChecked>
							Select One
						</option>
						<option value="info-product">
							Product Information (Use / Feature/ Operation / Compatibility of
							product or accessory)
						</option>
						<option value="info-buy">Where to Buy</option>
						<option value="info-doc">Document Request</option>
					</select>
				</li>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Model Number <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Quantity <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 mb-2">
					<label className="font-bold">Version/Type Number</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
			</ul>

			<ul className="hidden" id="info-product-options">
				<li className="mt-4 font-bold">
					Tool
					<sup className="text-red">*</sup>
				</li>
				<li>
					<select className="w-full">
						<option value="" defaultChecked>
							Select One
						</option>
						<option>I already own the tool</option>
						<option>I don&apos;t have the tool</option>
					</select>
				</li>
			</ul>

			<ul className="hidden" id="info-doc-options">
				<li className="mt-4 font-bold">
					Type of Document Request
					<sup className="text-red">*</sup>
				</li>
				<li>
					<select className="w-full">
						<option value="" defaultChecked>
							Select One
						</option>
						<option>Catalog</option>
						<option>Digital Instruction Manual</option>
						<option>Diagram/Part List</option>
						<option>SDS-MSDS Certificates</option>
						<option>Other Documents</option>
					</select>
				</li>
			</ul>
		</div>
	);
}
