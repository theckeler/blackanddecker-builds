import CatSection1 from "./components/CatSection1";
import CatSection2 from "./components/CatSection2";
import CatSection3 from "./components/CatSection3";

import "./scss/main.scss";

export default function Page() {
	return (
		<div>
			<CatSection1 />
			<CatSection2 />
			<CatSection3 />
		</div>
	);
}
