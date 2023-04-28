import SelectChange from "./functions/SelectChange";

import Address from "./components/Address";
import Warranty from "./components/Warranty";
import Website from "./components/Website";
import Info from "./components/Info";
import General from "./components/General";
import Orders from "./components/Orders";

const App = () => {
	return (
		<div className="container py-8">
			<h2 className="h3 text-center mb-8">Submit a Request</h2>
			<form className="w-full">
				<ul className="mx-auto" style={{ maxWidth: "42rem" }}>
					<li className="mb-2">
						<label
							htmlFor="edit-email-address"
							className="js-form-required form-required font-bold">
							Email Address <sup className="text-red">*</sup>
						</label>
					</li>
					<li>
						<input
							type="email"
							id="edit-email-address"
							name="email_address"
							className="required w-full"
						/>
					</li>
					<li className="mt-4 mb-2">
						<label
							htmlFor="edit-name"
							className="js-form-required form-required font-bold">
							Name <sup className="text-red">*</sup>
						</label>
					</li>
					<li>
						<input
							type="text"
							id="edit-name"
							name="name"
							className="required w-full"
						/>
					</li>
					<li className="mt-4 mb-2">
						<label
							htmlFor="edit-phone"
							className="js-form-required form-required font-bold">
							Phone Number <sup className="text-red">*</sup>
						</label>
					</li>
					<li>
						<input
							type="text"
							id="edit-phone"
							name="phone"
							className="required w-full"
						/>
					</li>

					<li className="mt-4 mb-2">
						<label
							htmlFor="edit-phone"
							className="js-form-required form-required font-bold">
							Request Type: <sup className="text-red">*</sup>
						</label>
					</li>
					<li className="mt-4 mb-2">
						<select
							id="request-type"
							className="w-full"
							onChange={(e) => {
								SelectChange(e, [
									"warranty",
									"website",
									"info",
									"general",
									"orders",
								]);

								if (
									e.currentTarget.value === "warranty" ||
									e.currentTarget.value === "website" ||
									e.currentTarget.value === "general" ||
									e.currentTarget.value === "orders"
								) {
									document
										.querySelector(`#address-block`)
										.classList.remove("hidden");
								} else {
									document
										.querySelector(`#address-block`)
										.classList.add("hidden");
								}

								document.querySelectorAll(".after-input").forEach((e) => {
									e.classList.remove("hidden");
								});

								document.querySelector("#request-submit").disabled = false;
							}}>
							<option value="" defaultChecked>
								Select One
							</option>
							<option value="warranty">Warranty Related</option>
							<option value="website">Website Related</option>
							<option value="info">Product Information</option>
							<option value="general">General Inquiries/Others</option>
							<option value="orders">
								Support for orders placed throughblackanddecker.com
							</option>
						</select>
					</li>

					<li>
						<Address />
					</li>

					{/* Warranty */}
					<li className="main-option hidden mt-8" id="warranty-options">
						<Warranty />
					</li>

					{/* Website */}
					<li className="main-option hidden mt-8" id="website-options">
						<Website />
					</li>

					{/* Info */}
					<li className="main-option hidden mt-8" id="info-options">
						<Info />
					</li>

					{/* General */}
					<li className="main-option hidden mt-8" id="general-options">
						<General />
					</li>

					{/* Orders */}
					<li className="main-option hidden mt-8" id="orders-options">
						<Orders />
					</li>

					<li className="hidden mt-8 mb-2 font-bold after-input">
						Brief Description
						<sup className="text-red">*</sup>
					</li>
					<li className="hidden mt-8 after-input">
						<textarea className="w-full" rows="8"></textarea>
					</li>
					<li className="hidden mt-8 font-bold after-input">
						<input type="checkbox" className="mr-2" />
						Check Terms and Conditions
						<sup className="text-red">*</sup>
					</li>
					<li className="mt-8">
						<button
							class="btn-primary"
							type="submit"
							disabled
							id="request-submit">
							Submit
						</button>
					</li>
				</ul>
			</form>
		</div>
	);
};

export default App;
