import SelectChange from "../functions/SelectChange";

export default function Website() {
	return (
		<div className="p-4" style={{ backgroundColor: "#e3e3e3" }}>
			<h2 className="h4 pb-2 mb-2 border-b">Website Related</h2>

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
							SelectChange(e, ["website-subscriptions", "website-issues"]);
						}}>
						<option value="" defaultChecked>
							Select One
						</option>
						<option value="website-subscriptions">
							Website Related - Subscriptions
						</option>
						<option value="website-issues">
							Website Related - Product Registration/Account Issues
						</option>
					</select>
				</li>
			</ul>

			<ul className="hidden" id="website-subscriptions-options">
				{/* <li className="mt-4 mb-2">
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
				</li> */}
			</ul>

			<ul className="hidden" id="website-issues-options">
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
				<li className="mt-4 font-bold">
					Date Code
					<sup className="text-red">*</sup>
				</li>
				<li className="mt-2">
					<input
						type="text"
						className="required mr-2"
						minLength="4"
						maxLength="8"
						size="10"
						placeholder="Week"
					/>
					/
					<input
						type="text"
						className="required ml-2"
						minLength="4"
						maxLength="8"
						size="10"
						placeholder="Year"
					/>
				</li>
				<li className="mt-4 font-bold">
					Proof of purchase (Button to upload the receipt)
					<sup className="text-red">*</sup>
				</li>
				<li className="mt-2">
					<input type="file" className="required w-full" />
				</li>
				<li className="mt-4 font-bold">
					Date of Purchase
					<sup className="text-red">*</sup>
				</li>
				<li className="mt-2">
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 font-bold">
					Place of Purchase
					<sup className="text-red">*</sup>
				</li>
				<li className="mt-2">
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 font-bold">
					Type of Issues
					<sup className="text-red">*</sup>
				</li>
				<li>
					<select className="w-full">
						<option value="" defaultChecked>
							Select One
						</option>
						<option>Issues with my account</option>
						<option>Issues with my registered tools</option>
					</select>
				</li>
			</ul>
		</div>
	);
}
