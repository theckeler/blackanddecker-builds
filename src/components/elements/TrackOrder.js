import Button from "../elements/Button";

const TrackOrder = ({ title, sub, addClass, addStyle }) => {
	return (
		<div>
			<h2 className="text-center">Track My Order</h2>

			<p className="track-order-header-text text-center">
				Looking to track your order? Look no further! Simply click below to get
				started and stay up-to-date on the whereabouts of your purchase.
			</p>
			<p className="mt-auto">
				<Button
					copy="Track My Order"
					url="https://www.mtdparts.com/en_US/track-my-order"
					addClass="btn btn-block btn-secondary mt-auto"
				/>
			</p>
		</div>
	);
};

export default TrackOrder;
