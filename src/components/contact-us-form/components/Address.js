export default function Address() {
	return (
		<ul
			className="hidden p-4 mt-8"
			id="address-block"
			style={{ backgroundColor: "#e3e3e3" }}>
			<li className="mb-2">
				<label className="js-form-required form-required font-bold">
					Address <sup className="text-red">*</sup>
				</label>
			</li>
			<li>
				<input type="text" className="required w-full" />
			</li>
			<li className="mt-4 mb-2">
				<label className="js-form-required form-required font-bold">
					City/Town <sup className="text-red">*</sup>
				</label>
			</li>
			<li>
				<input type="text" className="required w-full" />
			</li>
			<li className="mt-4 mb-2">
				<label className="js-form-required form-required font-bold">
					State/Province <sup className="text-red">*</sup>
				</label>
			</li>
			<li>
				<input type="text" className="required w-full" />
			</li>
			<li className="mt-4 mb-2">
				<label className="js-form-required form-required font-bold">
					ZIP/Postal Code <sup className="text-red">*</sup>
				</label>
			</li>
			<li>
				<input type="text" className="required w-full" />
			</li>
			<li className="mt-4 mb-2">
				<label className="js-form-required form-required font-bold">
					Country <sup className="text-red">*</sup>
				</label>
			</li>
			<li>
				<input type="text" className="required w-full" />
			</li>
		</ul>
	);
}
