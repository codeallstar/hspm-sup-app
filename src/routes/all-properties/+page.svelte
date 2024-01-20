<script>
	import { Icon } from 'svelte-materialdesign-icons';

	import FeaturedProperties from '$lib/components/FeaturedProperties.svelte';
</script>

<!-- Featured Properties Section -->
<section class="container mx-auto p-4">
	<h2 class="text-center font-bold text-2xl mb-6">All Properties</h2>
	<FeaturedProperties />
	<h2 class="text-center font-bold text-3xl mb-6">More Properties Coming Soon!</h2>
	<div class="grid grid-cols-1">
		<a href="tel:+12318815282" class="btn variant-filled-primary text-2xl">
			<Icon name="phone" class="shrink-0 h-4 w-4" />&nbsp; Call Now!</a
		>
	</div>
</section>
