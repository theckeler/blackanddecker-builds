const Section1 = () => {
	return (
		<div className="shopify-section">
			<section className="plp-hero relative">
				<div
					className="plp-hero__breadcrumbs px-[15px] md:px-[32px] lg:px-[50px] xl:px-[60px] py-[10px] xl:py-[32px] md:absolute md:top-0 md:left-0 z-10 aos-init aos-animate"
					data-aos="fade-up"
					data-aos-delay="100">
					<div className="breadcrumbs--plp">
						<ol className="block leading-none">
							<li className="breadcrumb-item inline mr-1 p2 after:content-['>'] after:ml-1 last:after:content-none last:mr-0 [.breadcrumbs--plp_&amp;]:p1">
								<a
									className="text-xs lg:text-2xs underline-offset-2 link-underline font-normal [.breadcrumbs--plp_&amp;]:underline-offset-[2.5px] [.breadcrumbs--plp_&amp;]:p1"
									href="/">
									Home
								</a>
							</li>
							<li className="breadcrumb-item inline mr-1 p2 after:content-['>'] after:ml-1 last:after:content-none last:mr-0 [.breadcrumbs--plp_&amp;]:p1">
								Cordless Stick Vacuums
							</li>
						</ol>
					</div>
				</div>
				<div
					className="plp-hero__wrapper relative"
					style={{ backgroundColor: "#00cce8" }}>
					<div className="plp-hero__inner flex flex-col-reverse md:flex-row justify-between">
						<div
							className="plp-hero__content flex flex-col justify-center items-start mx-[15px] mb-[35px] md:pt-14 md:pb-10 md:mx-[32px] lg:py-14 lg:mx-[50px] xl:mx-[60px] md:mb-0 aos-init aos-animate"
							data-aos="fade-up"
							data-aos-delay="300">
							<h1 className="h2 plp-hero__title">Cordless Stick Vacuums</h1>
							<div className="p1 mt-[6px] plp-hero__description">
								<p>
									Choose a powerful cordless stick vacuum cleaner by
									BLACK+DECKER® and experience convenience at your
									fingertips.&nbsp; Our cordless vacuum lineup will have your
									home looking spotless in no time.
								</p>
								{/* NEW BY TODD - START */}
								<a
									href="https://blackanddecker-prod.myshopify.com/pages/vacuum-finder"
									class="btn-secondary mt-4">
									Learn More
								</a>
								{/* NEW BY TODD - END */}
							</div>
						</div>
						<div
							className="
        plp-hero__media rounded-bl-[33px] lg:rounded-bl-[100px] overflow-hidden aspect-[936/344] relative will-change-transform
        w-[calc(100%-15px)] md:w-[500px] lg:w-[695px] xl:w-[936px] ml-auto
        mb-[34px] lg:mb-[56px]
        shrink-0
      ">
							<picture data-module="responsive-image">
								<source
									srcset="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options=w300"
									media="(min-resolution: 200dpi), (-webkit-min-device-pixel-ratio: 2)"
								/>

								<img
									className="absolute w-full h-full object-cover"
									src="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options="
									width="600"
									height="350"
									loading="eager"
									alt=""
									fetchpriority="high"
								/>
							</picture>

							<background-video
								data-module="background-video"
								data-init-sources=""
								className="absolute inset-0 ">
								<div className="absolute inset-0 z-0">
									<picture data-module="responsive-image">
										<source
											srcset="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options=w300"
											media="(min-resolution: 200dpi), (-webkit-min-device-pixel-ratio: 2)"
										/>

										<img
											className="absolute w-full h-full inset-0 hidden md:block object-cover"
											src="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options="
											width="600"
											height="350"
											loading="eager"
											alt=""
											fetchpriority="high"
										/>
									</picture>

									<picture data-module="responsive-image">
										<source
											srcset="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options=w300"
											media="(min-resolution: 200dpi), (-webkit-min-device-pixel-ratio: 2)"
										/>

										<img
											className="absolute w-full h-full inset-0 hidden md:block object-cover"
											src="https://cld.accentuate.io/411630764253/1664404037230/StickVac_CatCard_600x350.png?v=1664513993796&amp;options="
											width="600"
											height="350"
											loading="eager"
											alt=""
											fetchpriority="high"
										/>
									</picture>
								</div>
							</background-video>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Section1;
