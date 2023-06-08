/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="min-h-screen">
				<div className="container mx-auto flex flex-col items-center justify-center p-4">
					<Hero />
					<div className="card bg-base-100 shadow-2xl lg:card-side lg:max-w-[733px]">
						<div className="card-body">
							<h2 className="card-title">Step 1</h2>
							<p>
								Add Cymbal Bot to your server by logging in with
								your Discord account.
							</p>
						</div>
						<figure className="overflow-visible bg-indigo-500">
							<div className="flex h-40 w-80 items-center justify-center">
								<a
									className="btn rounded-full border-0 bg-white px-8 normal-case text-indigo-500 hover:bg-indigo-600 hover:text-white"
									href="#"
								>
									Sign in with Discord
								</a>
							</div>
						</figure>
					</div>
				</div>
			</main>
		</>
	);
};

const Hero = () => {
	return (
		<div className="hero py-40">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">
						Supercharge your Discord server
					</h1>
					<p className="py-6">
						Real-time NFT sales in your Discord server — all for
						free.
					</p>
					<button className="btn-accent btn-outline btn rounded-full">
						Setup Cymbal Bot
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
