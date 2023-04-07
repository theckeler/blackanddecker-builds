import Question from "./Question";

const Section3 = () => {
	const addQuestion = (e) => {
		console.log("addQuestion");
		document.querySelector("#ask-question").classList.toggle("hidden");
	};

	const ulCSS = "list-disc px-6";

	return (
		<div className="shopify-section overflow-hidden section-recently-view">
			<a
				className="max-h-0 overflow-hidden block"
				name="faqs"
				id="faqs"
				href="#none"
				style={{ maxHeight: 0, height: 0 }}>
				FAQ Anchor
			</a>
			<recently-viewed-products data-handle>
				<div
					className="js-recently-view-header aos-init aos-animate"
					data-aos="fade-up">
					<div className="container">
						<hr className="border-t border-dark-grey pb-8 lg:pb-10 xl:pb-14" />
						<div data-module="rich-text" className="flex flex-col items-center">
							<h2 className="h2 text-center">Product Q&A</h2>
							<button
								//href="https://support.blackanddecker.com/hc/en-us/requests/new"
								className="btn-secondary mt-4 bg-black text-white"
								onClick={(e) => addQuestion(e)}>
								Submit a New Question
							</button>

							<div className="w-full hidden w-full" id="ask-question">
								<hr className="w-full mt-5" />
								<ul className="flex flex-col mt-4 mx-auto max-w-2xl">
									<li className="">
										<div className="w-full flex flex-col mx-auto p-6 wysiwyg">
											<h3 className="h3 text-center">
												Do you have a question about a Black and Decker product?
											</h3>
											<p className="mt-3 text-center">
												Our team is here to help! Whether you're wondering about
												the features of a power tool, the capacity of a kitchen
												appliance, or the runtime of a cordless vacuum, we're
												happy to provide you with accurate and helpful
												information. Simply submit your question and we'll get
												back to you as soon as we can. Our goal is to ensure you
												have a seamless shopping experience and make informed
												purchase decisions for all your Black and Decker needs.
											</p>
										</div>
									</li>
									<li className="">
										<form className="w-full flex flex-col mx-auto border rounded p-6">
											<div className="text-input block mb-4 has-label">
												<label
													className="block mb-2 text-input__label"
													htmlFor="customer_email_login">
													Email address <sup className="text-red">*</sup>
												</label>
												<input
													className="block w-full p1 rounded js-input"
													id="customer_email_login"
													type="email"
													name="email"
													placeholder
													autoComplete
													required
													value=""
												/>
												<span data-error className="text-red empty:hidden" />
											</div>

											<div className="text-input block mb-4 has-label">
												<label
													className="block mb-2 text-input__label"
													htmlFor="">
													First Name <sup className="text-red">*</sup>
												</label>
												<input
													className="block w-full p1 rounded js-input"
													id=""
													type="email"
													name="email"
													placeholder
													autoComplete
													required
													value=""
												/>
												<span data-error className="text-red empty:hidden" />
											</div>

											<div className="text-input block mb-4 has-label">
												<label
													className="block mb-2 text-input__label"
													htmlFor="">
													Question <sup className="text-red">*</sup>
												</label>
												<textarea
													className="block w-full p1 rounded js-input"
													id=""
													type="email"
													name="email"
													placeholder
													autoComplete
													required
													value=""
												/>
												<span data-error className="text-red empty:hidden" />
											</div>

											<button className="btn-primary w-full mt-5" type="submit">
												Ask
											</button>
										</form>
									</li>
								</ul>
								<hr className="w-full mt-5" />
							</div>
						</div>

						<div
							className="md:h-full overflow-scroll m-0 mt-3 max-w-6xl mb-8 mx-auto"
							style={{ maxHeight: "calc(100vh - 100px)" }}>
							<div>
								<ul className="faq border rounded-lg py-2 px-4">
									<li className="question">
										<Question title="Are slow feeder bowls good for dogs?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Speed eating is a common problem for pet owners. The
											faster Fido and Fluffy eat, the more likely they are to
											skip chewing and try to digest large chucks of food. This
											can lead to gagging, choking, vomiting or expectoration.
											It can also lead to poor digestion, bloating, and even gas
											– potentially smelly gas! Slow feeder bowls also provide
											mental stimulation.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="What should I look for in a slow feeder dog bowl?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											BLACK+DECKER offers dog bowls in stainless steel, silicone
											and plastic. Stainless steel bowls are durable and easy to
											clean. These bowls are typically dishwasher safe. Follow
											the cleaning instructions to maximize the strength and
											life of your BLACK+DECKER slow feeder pet bowls.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="Are slow feeder bowls good for dogs?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Speed eating is a common problem for pet owners. The
											faster Fido and Fluffy eat, the more likely they are to
											skip chewing and try to digest large chucks of food. This
											can lead to gagging, choking, vomiting or expectoration.
											It can also lead to poor digestion, bloating, and even gas
											– potentially smelly gas! Slow feeder bowls also provide
											mental stimulation.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="Do slow dog feeders work with wet food?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Slow feeder bowls for dogs and cats work with dry or wet
											food. Be sure to use a good cleaning brush such as the
											<a href="https://www.blackanddecker.com/products/bhpc130">
												BLACK+DECKER power-scrubbing grimebuster
											</a>
											. Clean after each feeding to ensure all remaining crumbs,
											and any slobbery saliva, are removed from the crevices.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="Do slow feeder bowls cause whisker fatigue?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Whisker fatigue is a real thing, experienced by many cat
											owners. A common cause is small, tight bowls where
											whiskers tend to get overstimulated as they brush against
											the sides of the receptacle. Wide, flat bowls are the best
											options when feeding cats, and you can couple a large,
											wide bowl with slow feeding features such as shallow
											ridges or grooves.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="Do slow feeders stimulate dogs?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											The built-in shapes, grooves, trenches, gutters, canals,
											furrows, ridges, and elevations help your dog explore and
											discover as they eat, forcing them to slow down and take
											smaller bites. Think of it as an oral puzzle for your
											favorite furry friend.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="How do I get my dog to eat slower with a slow feeder?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Have you tried to use a slow feeder and found that your
											dog prefers to just flip the bowl over and eat off the
											floor? Dogs with flat faces commonly do this; they find
											the ridges too difficult to conquer. Senior dogs may also
											prefer their old ways or their favorite bowl, instead.
											Don’t give up; there are different types of slow feeder
											options from BLACK+DECKER and other quality manufacturers.
											Start of slow, with favorite foods, and introduce the new
											bowl over time so that it is not such a drastic change.
										</p>
									</li>
								</ul>

								<ul className="faq border rounded-lg py-2 px-4 mt-3">
									<li className="question">
										<Question title="Is Slow Feeder Bowl OK for puppies?" />
									</li>
									<li className="hidden answer pt-3">
										<p className={ulCSS}>
											Puppies are notorious for fast eating. Maybe their
											youthful energy makes them more ravenous. Slow feeder
											bowls are safe and ideal for puppies. Make sure their head
											and mouth can fit into the bowl safely and comfortably and
											that the eating obstacles are not too big for them. Design
											matters. BLACK+DECKER slow feeding bows are available in a
											variety of sizes, for small dogs and puppies to large
											breeds and seniors. .
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					data-slot="product-grid-results"
					className="product-grid-results mb-[72px] md:mb-14 lg:mb-0 js-recently-view-content aos-init aos-animate"
					data-aos="fade-up"></div>
			</recently-viewed-products>
		</div>
	);
};

export default Section3;
