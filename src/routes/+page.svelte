<script>
	import { Icon } from 'svelte-materialdesign-icons';

	import hero from '$lib/images/heroplaceholder.jpg';
	import house1 from '$lib/images/houseplaceholder1.jpg';
</script>

<!-- Hero -->
<div
	class="relative overflow-hidden bg-cover bg-no-repeat"
	style="
   background-position: 50%;
   background-image: url({hero});
   height: 500px;
 "
>
	<div
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed"
	>
		<div class="flex h-full items-center justify-center">
			<div class="px-6 text-center text-white md:px-12">
				<h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
					Harbor Springs area vacation rentals where <br /><span>nature meets luxury.</span>
				</h1>
				<button
					type="button"
					class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					Get started
				</button>
			</div>
		</div>
	</div>
</div>
<!-- Featured Properties Section -->
<section class="container mx-auto p-4">
	<h2 class="text-center font-bold text-2xl mb-6">Featured Properties</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={house1} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">NEW</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located just under 3 miles from town right on Lake
						Michigan. This 3 bedroom 3 bath home has a large living space, with a wood fireplace.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;3 bath
					</div>
					<div class="badge variant-filled">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-ringed">More Info</a>
				</footer>
			</div>
		</div>
	</div>
</section>
