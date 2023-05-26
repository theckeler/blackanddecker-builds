"use client";
import selectChange from "./functions/selectChange";

import Address from "./components/Address";
import Warranty from "./components/Warranty";
import Website from "./components/Website";
import Info from "./components/Info";
import General from "./components/General";
import Orders from "./components/Orders";

export default function ContactForm() {
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
							First Name <sup className="text-red">*</sup>
						</label>
					</li>

					<li>
						<input
							type="text"
							id="edit-name"
							name="last-name"
							className="required w-full"
						/>
					</li>

					<li className="mt-4 mb-2">
						<label
							htmlFor="edit-name"
							className="js-form-required form-required font-bold">
							Last Name <sup className="text-red">*</sup>
						</label>
					</li>

					<li>
						<input
							type="text"
							id="edit-name"
							name="last-name"
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
								selectChange(e, [
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

					<li>
						<Address />
					</li>

					<li className="hidden mt-8 mb-2 font-bold after-input">
						Brief Description
						<sup className="text-red">*</sup>
					</li>

					<li className="hidden mt-8 after-input">
						<textarea className="w-full" rows="8"></textarea>
					</li>

					<li className="hidden mt-8 after-input">
						<ul className="flex">
							<li>
								<input type="checkbox" className="mr-2" />
							</li>
							<li>
								<p className="font-bold">
									Check Terms and Conditions
									<sup className="text-red">*</sup>
								</p>
								<p className="text-xs">
									I certify that I have read the{" "}
									<a
										href="https://www.stanleyblackanddecker.com/privacy-policy/global-privacy-policy"
										className="underline">
										information
									</a>{" "}
									provided by Stanley Black &amp; Decker
								</p>
							</li>
						</ul>
					</li>

					<li className="hidden mt-8 after-input">
						<ul className="flex">
							<li>
								<input type="checkbox" className="mr-2" />
							</li>
							<li>
								<p className="font-bold">
									I consent to the processing of personal data for direct
									marketing activities, for sending of commercial, promotional
									and advertising communications by the data controller.
								</p>
								<p className="text-xs">
									You can unsubscribe at any time. For more information please
									visit our{" "}
									<a
										href="https://www.stanleyblackanddecker.com/privacy-policy/global-privacy-policy"
										className="underline">
										Privacy Policy
									</a>
									.
								</p>
							</li>
						</ul>
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
}
