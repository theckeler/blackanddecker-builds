import SelectChange from "../functions/SelectChange";

export default function General() {
	return (
		<div className="p-4" style={{ backgroundColor: "#baeef6" }}>
			<h2 className="h4 pb-2 mb-2 border-b">General Inquiries/Others</h2>

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
							SelectChange(e, ["general-defective", "general-status"]);
						}}>
						<option value="" defaultChecked>
							Select One
						</option>
						<option value="">Kudos</option>
						<option value="">Suggestion</option>
						<option value="">Corporate Complaint</option>
						<option value="">
							Requests (Donations/Sponsorships/PromotionalItems/Influencer
							Request)
						</option>
					</select>
				</li>
			</ul>
		</div>
	);
}
