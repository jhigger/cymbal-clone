import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
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
				<p>Copyright © 2023 - All right reserved by Kairos</p>
			</div>
		</footer>
	);
};

export default Footer;
