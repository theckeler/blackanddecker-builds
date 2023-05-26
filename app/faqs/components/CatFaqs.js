import Question from "./Question";

const Faqs = () => {
	const ulCSS = "list-disc px-6";
	const liCSS = "mb-2";

	return (
		<div
			className="md:h-full overflow-scroll m-0 mt-3 max-w-2xl"
			style={{ maxHeight: "calc(100vh - 100px)" }}>
			<div>
				<ul className="faq border rounded-lg py-2 px-4">
					<li className="question">
						<Question title="Which cordless vacuum has the strongest suction?" />
					</li>
					<li className="hidden answer pt-3">
						<ul className={ulCSS}>
							<li className={liCSS}>
								Suction power determines how well your vacuum will pick up
								everything from bread crumbs to fine pet hairs or table dust.
							</li>
							<li className={liCSS}>
								Pick a vacuum cleaner that provides strong airflow, like the
								<a href="https://www.blackanddecker.com/products/bsv2020g/powerseries-extreme-cordless-stick-vacuum-cleaner">
									Powerseries Extreme 20V MAX* Cordless Stick Vacuum
								</a>
							</li>
							<li className={liCSS}>
								*Maximum initial battery voltage (measured without a workload)
								is 20 volts. Nominal voltage is 18 volts.
							</li>
							<li className={liCSS}>
								It is a 2023 Better Homes & Gardens Clean House Award Winner.
							</li>
						</ul>
					</li>
				</ul>

				<ul className="faq border rounded-lg py-2 px-4 mt-3">
					<li className="question">
						<Question
							title="What is the difference between a cordless vacuum and a cordless
						stick vacuum?"
						/>
					</li>
					<li className="hidden answer pt-3">
						<ul className={ulCSS}>
							<li className={liCSS}>
								Cordless vacuums are lightweight and easy to maneuver. When
								coupled with a strong battery, you get a powerful engine,
								airflow and suction.
							</li>
							<li className={liCSS}>
								A cordless stick vacuum has a long handle, making it easy to use
								on floors, without bending and stooping. Look for models with
								LED lights on the base to help you see what needs to be cleaned,
								such as the award winning
								<a href="https://www.blackanddecker.com/products/bsv2020g/powerseries-extreme-cordless-stick-vacuum-cleaner">
									Powerseries Extreme 20V MAX* Cordless Stick Vacuum
								</a>
							</li>
							<li className={liCSS}>
								The stick design will allow the vacuum to reach into
								hard-to-reach corners or under furniture.
							</li>
							<li className={liCSS}>
								Many cordless vacuums are non-stick versions, such as handheld
								dustbusters by BLACK+DECKER. Explore handheld cordless vacuums
								here:
								<a href="Dustbuster Handheld Vacuums | BLACK+DECKER (blackanddecker.com)">
									Dustbuster Handheld Vacuums | BLACK+DECKER
									(blackanddecker.com)
								</a>
							</li>
						</ul>
					</li>
				</ul>

				<ul className="faq border rounded-lg py-2 px-4 mt-3">
					<li className="question">
						<Question title="Do cordless vacuums work well?" />
					</li>
					<li className="hidden answer pt-3">
						<ul className={ulCSS}>
							<li className={liCSS}>
								Cordless vacuums are powerful weapons in the war on dirt. Having
								evolved over the years, you’ll find modern cordless vacuums to
								have strong airflow and suction power, making them very nimble
								and effective cleaners. BLACK+DECKER offers an impressive
								20-volt lithium-ion battery powered Powerseries cordless vacuum.
								It packs a punch and is powerful enough to tackle most everyday
								jobs, including pet hair, everyday dust, dry spills, and dirt.
								The
								<a href="https://www.blackanddecker.com/products/bsv2020g/powerseries-extreme-cordless-stick-vacuum-cleaner">
									Powerseries Extreme 20V MAX* Cordless Stick Vacuum
								</a>
								offers 55 minutes of run time and 3 speed control.
							</li>
						</ul>
					</li>
				</ul>

				<ul className="faq border rounded-lg py-2 px-4 mt-3">
					<li className="question">
						<Question title="Are stick vacuums as good as regular vacuums?" />
					</li>
					<li className="hidden answer pt-3">
						<ul className={ulCSS}>
							<li className={liCSS}>
								Modern stick vacuums are perfect for everyday cleaning. Powerful
								cordless stick vacuums such as the{" "}
								<a href="https://www.blackanddecker.com/products/bsv2020g/powerseries-extreme-cordless-stick-vacuum-cleaner">
									Powerseries Extreme 20V MAX* Cordless Stick Vacuum
								</a>
								are packed with high voltage and feature long running times. The
								lightweight, bagless features make cleaning fast and easy.
								Corded vacuums have the advantage of virtually unlimited running
								time, since they run off electricity. They will be heavier than
								a cordless option and may require special cleaning processes for
								dirt collection vestibules and/or filters.
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Faqs;
