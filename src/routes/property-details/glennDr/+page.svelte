<script>
	// For Tabs
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	let tabSet = 0;

	import photo1 from '$lib/images/properties/glenndr/photo1.jpg';
	import photo2 from '$lib/images/properties/glenndr/photo2.jpg';
	import photo3 from '$lib/images/properties/glenndr/photo3.jpg';
	import photo4 from '$lib/images/properties/glenndr/photo4.jpg';
	import photo5 from '$lib/images/properties/glenndr/photo5.jpg';

	import { Icon } from 'svelte-materialdesign-icons';
</script>

<div class="wrapper container sm:mx-auto">
	<div class="grid sm:gap-2 sm:mt-2">
		<section class="grid md:grid-cols-3 lg:grid-cols-4 sm:gap-2">
			<img class="md:col-span-2 md:row-start-1 md:row-span-2" src={photo1} alt="" />
			<img class="hidden md:block" src={photo2} alt="" />
			<img class="hidden md:block md:col-start-3 md:row-start-2" src={photo3} alt="" />
			<img class="hidden lg:block" src={photo4} alt="" />
			<img class="hidden lg:block" src={photo5} alt="" />
		</section>
		<div class="sm:order-first m-2">
			<h2 class="text-sm title-font tracking-widest">Lake Living - Harbor Springs</h2>
			<h1 class="text-3xl title-font font-medium mb-4">
				Stunning view. Private Lake Michigan access!
			</h1>
			<div class="divider md:hidden" />
		</div>
	</div>
	<div class="grid gap-2 sm:grid-cols-2">
		<section class="text-center flex my-4">
			<p class="text-xl">
				<Icon name="bed" class="shrink-0 h-4 w-4 inline-flex" /> 3 Bedrooms |
				<Icon name="bathtub" class="shrink-0 h-4 w-4 inline-flex" /> 2 Baths |
				<Icon name="bed" class="shrink-0 h-4 w-4 inline-flex" /> 3 Beds |
				<Icon name="sleep" class="shrink-0 h-4 w-4 inline-flex" /> Sleeps 6
			</p>
		</section>
		<hr />

		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>Property Info</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Amenities</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Rooms & Beds</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<section class="space-y-4">
						<p>
							This Harbor Springs retreat is located walking distance or bike ride from town and
							right on Lake Michigan. This home has private lake access and a large private yard.
						</p>

						<p>
							Enjoy your meals in the formal dining room, or out on the back deck where you can do
							some grilling and utilize the large private yard.
						</p>
					</section>
				{:else if tabSet === 1}
					<section class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
						<span class="badge variant-filled">More Info Coming Soon</span>
					</section>
				{:else if tabSet === 2}
					<section class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
						<span class="badge variant-filled">More Info Coming Soon</span>
					</section>
				{:else}
					<p>Something went wrong...</p>
				{/if}
			</svelte:fragment>
		</TabGroup>

		<section class="sm:grid-col-start-2 sm:col-start-2">
			<div class="card mb-2">
				<header class="card-header">Price/Date</header>
				<section class="p-4">Call 231.881.5282</section>
				<footer class="card-footer">For More Information</footer>
			</div>
			<div class="card">
				<header class="card-header">Availability</header>
				<section class="p-4">Call 231.881.5282</section>
				<footer class="card-footer">For Availability</footer>
			</div>
		</section>
	</div>
	<hr class="my-4" />
	<section>
		<h3 class="h3 mb-2">Policies</h3>
		<h5 class="h5">Cancellation policy</h5>
		<hr class="my-2" />
		<p>
			<span class="font-bold">100% refund of amount paid</span> if you cancel at least 30 days before
			check-in.
		</p>
		<p>
			<span class="font-bold">50% refund of amount paid</span> (minus the service fee) if you cancel
			at least 14 days before check-in.
		</p>
		<p>
			<span class="font-bold">No refund</span> if you cancel less than 14 days before check-in.
		</p>
		<p>
			Free cancellation deadlines are in the property's timezone. Learn more about cancellation
			policies.
		</p>
		<h5 class="h5 mt-4 mb-2">Damage and incidentals</h5>
		<hr class="my-2" />
		<p class="mb-4">
			You will be responsible for any damage to the rental property caused by you or your party
			during your stay.
		</p>
		<h6 class="h6">House Rules</h6>
		<div class="grid grid-cols-2 gap-4">
			<ul>
				<li><span class="font-bold">Check in</span> after 4:00pm</li>
				<li><span class="font-bold">Check out</span> before 11:00am</li>
			</ul>
			<ul>
				<li>Maximum overnight guests: 10</li>
				<li>Minimum age to rent: 30</li>
			</ul>
			<ul>
				<li>Children allowed: ages 0-17</li>
				<li>No pets allowed</li>
			</ul>
			<ul>
				<li>No events allowed</li>
				<li>No smoking allowed</li>
			</ul>
		</div>
		<h5 class="h5 mt-4 mb-2">Cleaning practices</h5>
		<hr class="my-2" />
		<div class="grid grid-cols-2 space-y-2">
			<ul>
				<li>Cleaned with disinfectant</li>
				<li>All towels and bedding washed in hot water that’s at least 60ºC/140ºF</li>
			</ul>
			<ul>
				<li>
					High-touch surfaces cleaned with disinfectant (like countertops, light switches, handles,
					and faucets)
				</li>
				<li>Follows industry health association: COVID-19 Guidelines (CDC)</li>
			</ul>
		</div>
	</section>
	<hr />
	<section>
		<h3 class="h3">Area Info</h3>
	</section>
</div>
