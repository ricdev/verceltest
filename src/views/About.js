import React from "react";

import quotesAbt from "../images/quotesAbt.jpg";

const About = () => {
	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="mt-16">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					About Us{" "}
					<span role="img" aria-label="ear">
						🦻
					</span>
				</h3>
				<div className="flex gap-10 justify-center items-center flex-col lg:flex-row mt-10">
					<div className="">
						<img
							src={quotesAbt}
							className="w-96 rounded-xl lg:rounded-l-xl"
							alt=""
						/>
					</div>
					<div className="w-full lg:w-1/3 flex gap-5 mb-10 lg:mb-0 flex-col">
						<span role="img" aria-label="stars">
							⭐⭐⭐
						</span>
						<p>
							Inspirational quotes are greatly beneficial to everyone,
							especially writers, regardless of where they are in the writing
							process. Quotes can help generate ideas within brainstorming,
							which can influence the ideas within the piece. They can send you
							in new directions by presenting the ideas of others.
						</p>
						<span role="img" aria-label="stars">
							⭐⭐⭐
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
