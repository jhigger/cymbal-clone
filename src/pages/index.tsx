/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";
import Cards from "~/components/Cards";

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
					<Cards />
					<a
						href="#"
						className="btn my-40 h-16 rounded-full border-0 bg-emerald-500 px-8 text-2xl normal-case text-white shadow-2xl hover:bg-emerald-600"
					>
						Grab Your Free Sales Bot
					</a>
					<footer className="footer footer-center rounded p-10 pb-20 text-base-content">
						<div>
							<div className="grid grid-flow-col gap-4">
								<a>
									<FaTwitter size={24} />
								</a>
								<a>
									<FaDiscord size={24} />
								</a>
								<a>
									<FaFacebookF size={24} />
								</a>
							</div>
						</div>
						<div>
							<p>
								Copyright © 2023 - All right reserved by Kairos
							</p>
						</div>
					</footer>
				</div>
			</main>
		</>
	);
};

const Hero = () => {
	return (
		<div className="hero py-40">
			<div className="hero-content text-center">
				<div className="flex max-w-md flex-col items-center justify-center gap-4">
					<div className="mx-auto w-max rounded-lg bg-slate-700 px-2 py-1.5 text-sm font-bold text-white">
						FREE NFT SALES BOT
					</div>
					<div>
						<h1 className="text-5xl font-bold lg:w-max">
							Supercharge your Discord server
						</h1>
						<p className="py-6">
							Real-time NFT sales in your Discord server — all for
							free.
						</p>
					</div>
					<a
						href="#"
						className="btn-accent btn-outline btn rounded-full px-8 shadow-2xl"
					>
						Setup Cymbal Bot
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
