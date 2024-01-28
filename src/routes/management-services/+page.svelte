<script>
	import { Icon } from 'svelte-materialdesign-icons';

	import hero from '$lib/images/hero_harborsprings.jpg';
	import FeaturedProperties from '$lib/components/FeaturedProperties.svelte';
	// Logo
	import Logo from '$lib/images/HarborsidePropertyManagement_Logo_Only.png';
</script>

<!-- Hero -->
<div
	class="relative overflow-hidden bg-cover bg-no-repeat"
	style="
   background-position: 50%;
   background-image: url({hero});
   height: 600px;
 "
>
	<div
		class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,1%,29%,.6)] bg-fixed"
	>
		<div class="flex h-full items-center justify-center">
			<div class="px-6 text-center text-white md:px-12">
				<img src={Logo} alt="Harborside Property Management Logo" class="w-80" />
				<h1 class="mt-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">Harborside</h1>
				<h2 class="mb-6 text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">
					Property Management
				</h2>

				<h3 class="mb-6 text-lg font-bold tracking-tight md:text-xl xl:text-2xl">
					Management Services
				</h3>

				<a href="/all-properties" class="btn variant-filled-primary text-xl">
					All Properties&nbsp;<Icon name="arrow-right-circle" class="shrink-0 h-4 w-4" /></a
				>
			</div>
		</div>
	</div>
</div>
