import Button from "../elements/Button";

const TrackOrder = ({ title, sub, addClass, addStyle }) => {
	return (
		<form
			action="https://www.troybilt.com/en_US/track-my-order"
			className="trackorder flex flex-column"
			method="GET"
			name="trackorder-form">
			<h2 className="text-center">Track My Order</h2>

			<p className="track-order-header-text text-center">
				Looking to track your order? Look no further! Simply click below to get
				started and stay up-to-date on the whereabouts of your purchase.
			</p>
			<p className="mt-auto">
				<Button
					copy="Track My Order"
					url="https://www.troybilt.com/en_US/track-my-order"
					addClass="btn btn-block btn-secondary mt-auto"
				/>
			</p>
		</form>
	);
};

export default TrackOrder;
