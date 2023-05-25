export default function Orders() {
	return (
		<div className="p-4" style={{ backgroundColor: "#baeef6" }}>
			<h2 className="h4 pb-2 mb-2 border-b">
				Support for orders placed throughblackanddecker.com
			</h2>

			<ul>
				<li className=" mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Type <sup className="text-red">*</sup>
					</label>
				</li>
				<li>
					<select className="w-full">
						<option value="" defaultChecked>
							Select One
						</option>
						<option value="">Order status</option>
						<option value="">Order cancellation</option>
						<option value="">Product failure</option>
						<option value="">Incomplete product</option>
						<option value="">Refund request</option>
						<option value="">Return a product</option>
					</select>
				</li>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Date of Purchase
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
				<li className="mt-4 mb-2">
					<label className="js-form-required form-required font-bold">
						Order Number Related
					</label>
				</li>
				<li>
					<input type="text" className="required w-full" />
				</li>
			</ul>
		</div>
	);
}
