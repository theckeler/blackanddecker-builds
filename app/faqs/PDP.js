import Section1 from "./components/PDPSection1";
import Section2 from "./components/PDPSection2";
import Section3 from "./components/PDPSection3";
import Section4 from "./components/PDPSection4";
import Section5 from "./components/PDPSection5";
import Section6 from "./components/PDPSection6";
import Section7 from "./components/PDPSection7";
import Section8 from "./components/PDPSection8";
import Section9 from "./components/PDPSection9";
import RecentlyViewed from "./components/CatSection3";
import PDPFaqs from "./components/PDPFaqs";

const App = () => {
	return (
		<>
			<Section1 />
			<Section2 />
			<Section3 />
			{/* <Section4 /> */}
			<Section5 />
			<Section6 />
			<Section7 />
			<Section8 />
			<Section9 />
			<RecentlyViewed />
			<PDPFaqs />
		</>
	);
};

export default App;
