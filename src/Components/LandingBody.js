import line_1 from "../Static/Line.png";
import circle_1 from "../Static/Circle.png";
function LandingBody() {
	return (
		<section className="text-white ml-10 flex flex-col h-[80vh] ">
			<div className=" my-auto w-1/2">
				<div className="space-y-6">
					<div>
						<div className=" text-6xl font-bold">
							Kimetsu no Yaiba
						</div>
						<div className="flex space-x-2 text-sm">
							<div className="">
								<i
									className="fa fa-star mr-2 text-[#FFFF00]"
									aria-hidden="true"
								></i>
								5.0
							</div>
							<div>
								Category:
								Adventure
								fiction, Dark
								fantasy, Martial
								Arts
							</div>
						</div>
					</div>
					<div className=" text-lg">
						Demon Slayer: Kimetsu no Yaiba
						is a Japanese manga series
						written and illustrated by
						Koyoharu Gotouge. It follows
						teenage Tanjiro Kamado, who
						strives to become a demon slayer
						after his family was slaughtered
						and his younger sister Nezuko
						turned into a demon.
					</div>
					<div className=" space-x-4">
						{" "}
						<button class="rounded bg-[#106580] py-2 px-4 font-semibold text-white ">
							<i
								className="fa fa-play"
								aria-hidden="true"
							></i>
							Watch Now
						</button>
						<button class="rounded border border-white bg-transparent py-2 px-4 font-semibold text-white">
							<i
								className="fa fa-heart-o"
								aria-hidden="true"
							></i>
						</button>
					</div>
				</div>
			</div>
			<div className="text-white flex  justify-between mr-10 pb-16">
				<div className="flex space-x-4 font-semibold">
					<div className="border-b-4 border-[#106580]">
						Overview
					</div>
					<div>Episodes</div>
					<div>Details</div>
				</div>
				<div className="flex space-x-2">
					<img
						src={line_1}
						className="my-auto"
						alt=""
					/>
					<img
						src={circle_1}
						className="my-auto"
						alt=""
					/>
					<img
						src={circle_1}
						className="my-auto"
						alt=""
					/>
					<img
						src={circle_1}
						className="my-auto"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
}

export default LandingBody;
