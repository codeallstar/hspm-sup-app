<script>
	import { Icon } from 'svelte-materialdesign-icons';

	import hero from '$lib/images/heroplaceholder.jpg';
	import FeaturedProperties from '$lib/components/FeaturedProperties.svelte';
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
				<a href="/all-properties" class="btn variant-ringed-primary text-xl">
					All Properties&nbsp;<Icon name="arrow-right-circle" class="shrink-0 h-4 w-4" /></a
				>
			</div>
		</div>
	</div>
</div>
<!-- Featured Properties Section -->
<section class="container mx-auto p-4">
	<h2 class="text-center font-bold text-2xl mb-6">Featured Properties</h2>
	<FeaturedProperties />
</section>
