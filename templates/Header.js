export default function Header({}) {
	return (
		<nav style={{ backgroundColor: "#e5e5e5", minHeight: "320px" }}>
			<div className="wrapper ml-auto mr-auto container">
				<a
					href="/"
					style={{
						padding: "60px 20px",
						maxWidth: "1400px",
						minHeight: "20rem",
						fontSize: "10.5em",
						fontWeight: "600",
						overflow: "hidden",
						textDecoration: "none",
						display: "block",
						color: "#fff",
					}}>
					HEADER
				</a>
			</div>
		</nav>
	);
}
