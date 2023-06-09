const Cards = () => {
	const steps: CardType[] = [
		{
			title: "Step 1",
			desc: "Add Cymbal Bot to your server by logging in with your Discord account.",
			figure: (
				<div className="flex h-full w-full items-center justify-center bg-indigo-500">
					<a
						className="btn rounded-full border-0 bg-white px-8 normal-case text-indigo-500 hover:bg-indigo-600 hover:text-white"
						href="#"
					>
						Sign in with Discord
					</a>
				</div>
			),
		},
		{
			title: "Step 2",
			desc: "Choose a collection to track! You can pick any major collection from both Ethereum and Solana.",
			right: false,
			figure: <div className="h-full w-full bg-blue-500" />,
		},
		{
			title: "Step 3",
			desc: "Get real-time NFT sales data piped straight into your Discord server — all for free.",
			figure: <div className="h-full w-full bg-yellow-500" />,
		},
	];

	return (
		<div className="grid gap-14">
			{steps.map((step) => {
				return <Card key={step.title} {...step} />;
			})}
		</div>
	);
};

type CardType = {
	title: string;
	desc: string | JSX.Element;
	figure?: JSX.Element;
	right?: boolean;
};

const Card = (props: CardType) => {
	const { title, desc, figure, right = true } = props;

	const Figure = () => {
		return <figure className="h-40 lg:w-96">{figure}</figure>;
	};

	return (
		<div className="card bg-base-100 shadow-2xl lg:card-side lg:max-w-[733px]">
			{!right && <Figure />}
			<div className="card-body w-full">
				<h2 className="card-title">{title}</h2>
				<p>{desc}</p>
			</div>
			{right && <Figure />}
		</div>
	);
};

export default Cards;
