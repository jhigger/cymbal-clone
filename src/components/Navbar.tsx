/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { RiDiscordFill } from "react-icons/ri";

const Navbar = () => {
	const { data: sessionData } = useSession();

	return (
		<div className="navbar bg-base-100 p-6">
			<div className="container mx-auto flex justify-between">
				<Link href="/">LOGO</Link>
				{sessionData ? (
					<div className="flex items-center gap-4">
						<p className="text-center text-white">
							{sessionData.user.name}
						</p>
						<div className="dropdown-end dropdown">
							<label
								tabIndex={0}
								className="btn-ghost btn-circle avatar btn"
							>
								<div className="w-10 rounded-full">
									<img
										src={sessionData.user.image || ""}
										alt="profile picture"
									/>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow ring-1 ring-base-200/80"
							>
								<li>
									<a>Manage Servers</a>
								</li>
								<li>
									<a>Visit Cymbal</a>
								</li>
								<li>
									<button onClick={() => void signOut()}>
										Sign out
									</button>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<DiscordSignInButton />
				)}
			</div>
		</div>
	);
};

const DiscordSignInButton = () => {
	return (
		<button
			className="btn bg-[#5865f2] text-white hover:bg-[#3c45a5]"
			onClick={() =>
				void signIn("discord", {
					callbackUrl: "/",
				})
			}
		>
			<RiDiscordFill size={24} />
			<span className="flex-grow">Sign in with Discord</span>
		</button>
	);
};

export default Navbar;
