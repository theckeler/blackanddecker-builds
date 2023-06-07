import "./globals.css";
import Header from "@/templates/Header";
import Footer from "@/templates/Footer";

export const metadata = {
	title: "B&D Builds",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.shopify.com/s/files/1/0640/1409/0461/t/3/assets/base.dd4adfbb.css"
				/>
				<link
					rel="stylesheet"
					href="https://display.ugc.bazaarvoice.com/static/StanleyBlackAndDecker/main_site/140/17925/en_US/stylesheets/screen.css"
				/>
				<header>
					<Header />
				</header>

				{children}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
