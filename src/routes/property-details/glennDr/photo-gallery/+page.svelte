<script lang="ts">
	let elemCarousel: HTMLDivElement;
	import photos from '$lib/images/properties/glenndr/large';
	import { Icon } from 'svelte-materialdesign-icons';

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
</script>

<section class="container mx-auto m-2">
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/property-details/glennDr">Property Detail</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Photos</li>
	</ol>
</section>
<section class="container mx-auto">
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<Icon name="chevron-left" class="shrink-0 h-6 w-6 inline-flex" />
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each photos as photo}
				<img class="snap-center rounded-container-token" src={photo} alt={photo} loading="lazy" />
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<Icon name="chevron-right" class="shrink-0 h-6 w-6 inline-flex" />
		</button>
	</div>
</section>
