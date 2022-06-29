function Nav() {
	return (
		<nav class="p-10 flex justify-between text-white">
			<div class="my-auto text-xl font-bold">AnimeBinge</div>
			<div class="space-x-4">
				<a href="">Home</a>
				<a href="">Discover</a>
				<a href="">About Us</a>
				<button class="rounded border border-white bg-transparent py-2 px-4 font-semibold text-white">
					Sign Up
				</button>
				<button class="rounded bg-[#106580] py-2 px-4 font-semibold text-white ">
					Login
				</button>
			</div>
		</nav>
	);
}

export default Nav;
