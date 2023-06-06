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
					href="https://cdn.shopify.com/s/files/1/0640/1409/0461/t/3/assets/base.dd4adfbb.css"
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
