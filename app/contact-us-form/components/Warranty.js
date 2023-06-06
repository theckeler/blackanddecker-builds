import SelectChange from "../functions/selectChange";

export default function Warranty() {
	return (
		<div className="p-4" style={{ backgroundColor: "#baeef6" }}>
			<h2 className="h4 pb-2 mb-2 border-b">Warranty Related</h2>

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
							SelectChange(e, ["warranty-defective", "warranty-status"]);
						}}>
						<option value="" defaultChecked>
							Select One
						</option>
						<option value="warranty-defective">
							Warranty Related - Defective Product
						</option>
						<option value="warranty-status">
							Warranty Related - Status (Order, Repair, Refund)
						</option>
					</select>
				</li>
			</ul>

			<ul>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Model Number <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
			</ul>

			<ul className="hidden" id="warranty-defective-options">
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Quantity <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Version/Type Number
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 mb-4">
					<p className="mb-2 text-sm">
						To provide a faster resolution, please provide us with any of the
						following two options to validate the warranty on your product{" "}
						<sup className="text-red">*</sup>
					</p>

					<ul>
						<li>
							<select
								id="request-type"
								className="w-full"
								onChange={(e) => {
									SelectChange(e, ["warranty-receipt", "warranty-date-code"]);
								}}>
								<option value="" defaultChecked>
									Select One
								</option>
								<option value="warranty-receipt">Proof of purchase</option>
								<option value="warranty-date-code">Date Code</option>
							</select>
						</li>
					</ul>

					<ul
						className="w-full p-4 mt-2 hidden"
						id="warranty-receipt-options"
						style={{ backgroundColor: "#D4F5F0" }}>
						<li className="font-bold">
							Proof of purchase (Button to upload the receipt)
							<sup className="text-red">*</sup>
						</li>
						<li className="mt-2">
							<input type="file" className="required w-full" />
						</li>
					</ul>

					<ul
						className="w-full p-4 mt-2 hidden"
						id="warranty-date-code-options"
						style={{ backgroundColor: "#D4F5F0" }}>
						<li className="font-bold">
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
					</ul>
				</li>
				<li className="font-bold">
					Date of Purchase
					<sup className="text-red">*</sup>
				</li>
				<li className="mt-2">
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-8 mb-2 font-bold">
					Did you follow the troubleshooting steps described in the instruction
					manual?
					<sup className="text-red">*</sup>
				</li>
				<li>
					<select className="w-full">
						<option></option>
						<option>Yes</option>
						<option>No</option>
					</select>
				</li>
			</ul>

			<ul className="hidden" id="warranty-status-options">
				<li className=" mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Order Number
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
			</ul>
		</div>
	);
}
