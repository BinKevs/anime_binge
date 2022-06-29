function TrendingThisWeek(props) {
	return (
		<div
			onClick={props.setshowTrend}
			className="py-10 min-w-[400px] w-[400px] min-h-[260px] h-[260px] relative overflow-y-hidden"
		>
			<img className=" " src={props.img} alt="" />
			<div className="absolute bottom-14 text-white mx-4">
				<div className="text-xl pb-2">
					{props.title}
				</div>
				<div>
					<div className="flex justify-between w-[370px] text-[.8rem]">
						<div className="">
							<i
								className="fa fa-star mr-2 text-[#FFFF00]"
								aria-hidden="true"
							></i>
							{props.rate}
						</div>
						<div>{props.category}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TrendingThisWeek;
