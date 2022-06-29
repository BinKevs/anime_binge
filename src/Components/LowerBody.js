import { useState } from "react";
import TrendingThisWeek from "./TrendingThisWeekCards";
import AOT from "../Static/AOT.png";
import Jujutsu from "../Static/JUJUTSU.png";
import OnePiece from "../Static/ONEPIECE.png";
import ThrowbackAnimeCards from "./ThrowbackAnimeCards";
import Ghost from "../Static/ghost.png";
import Slam from "../Static/slamdunk.png";
import Flame from "../Static/flameofreka.png";
import AOT2 from "../Static/AOT-2.png";
import EpisodeCards from "./EpisodeCards";
import AOTEP1 from "../Static/AOT-EP1.png";
import AOTEP2 from "../Static/AOT-EP2.png";
import AOTEP3 from "../Static/AOT-EP3.png";
function LowerBody() {
	const [showTrend, setshowTrend] = useState(false);
	return (
		<section className="bg-[#1A1A1A] p-10">
			<div>
				<div className=" text-4xl text-white font-bold">
					Trending{" "}
					<span className="text-[#FBC94A]">
						{" "}
						this week
					</span>
				</div>
				{showTrend ? (
					<div className="py-10 flex">
						<div className="w-[45%]">
							<div className="relative">
								<img
									src={
										AOT2
									}
									alt=""
								/>
								<div className="absolute bottom-8 text-white mx-4">
									<div className="text-xl pb-2">
										Attack
										On
										Titan
									</div>
									<div>
										<div className="flex justify-between w-[320px] text-[.8rem]">
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
												fiction,
												Dark
												fantasy,
												Martial
												Arts
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="text-white p-3 2xl:w-1/2">
								When man-eating
								Titans first
								appeared 100
								years ago,
								humans found
								safety behind
								massive walls
								that stopped the
								giants in their
								tracks. But the
								safety they have
								had for so long
								is threatened
								when a colossal
								Titan smashes
								through the
								barriers,
								causing a flood
								of the giants
								into what had
								been the human…
							</div>
						</div>
						<div className="w-[55%]">
							<div className="flex justify-between text-white text-xl">
								<div>
									Episode
								</div>
								<div>
									Season 1
								</div>
							</div>
							<EpisodeCards
								img={AOTEP1}
								description={
									"The citizens worry they will be at the Titans' mercy after many years of peace."
								}
								episode={1}
							/>
							<EpisodeCards
								img={AOTEP2}
								description={
									"The Shiganshina citizens are under attack from the Titans."
								}
								episode={2}
							/>
							<EpisodeCards
								img={AOTEP3}
								description={
									"Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training."
								}
								episode={3}
							/>
						</div>
					</div>
				) : (
					<>
						<div className="flex space-x-4 overflow-x-auto">
							<TrendingThisWeek
								img={AOT}
								title={
									"Attack On Titan"
								}
								setshowTrend={
									setshowTrend
								}
								rate={"5.0"}
								category={
									"Category: Adventure, fiction, Dark fantasy,Martial Arts"
								}
							/>
							<TrendingThisWeek
								img={Jujutsu}
								title={
									"Jujutsu Kaizen"
								}
								rate={"5.0"}
								category={
									"Category: Adventure, fiction, Dark fantasy,Martial Arts"
								}
							/>
							<TrendingThisWeek
								img={OnePiece}
								title={
									"One Piece"
								}
								rate={"5.0"}
								category={
									"Category: Adventure, fiction, Dark fantasy,Martial Arts"
								}
							/>
						</div>
						<div>
							<div className=" text-4xl text-white font-bold">
								Throwback Anime!{" "}
							</div>
							<div className="flex space-x-4">
								<ThrowbackAnimeCards
									img={
										Ghost
									}
								/>
								<ThrowbackAnimeCards
									img={
										Slam
									}
								/>
								<ThrowbackAnimeCards
									img={
										Flame
									}
								/>
							</div>
						</div>{" "}
					</>
				)}
			</div>
		</section>
	);
}

export default LowerBody;
