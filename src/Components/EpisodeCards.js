function EpisodeCards(props) {
	return (
		<div className="py-10 flex">
			<img className="rounded-2xl" src={props.img} alt="" />
			<div className="text-md text-white space-y-8 flex flex-col justify-center px-4">
				<div className="font-bold">
					Episode {props.episode}
				</div>
				<div className="font-light text-gray-300">
					{props.description}
				</div>
			</div>
		</div>
	);
}

export default EpisodeCards;
