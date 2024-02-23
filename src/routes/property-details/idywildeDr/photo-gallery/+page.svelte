<script lang="ts">
	let elemCarousel: HTMLDivElement;
	import photos from '$lib/images/properties/idywilde/large';

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

	// Images
	import photo1 from '$lib/images/properties/idywilde/large/002_img4468.jpg';
	import photo2 from '$lib/images/properties/idywilde/large/001_img4468-twilight.jpg';
	import photo3 from '$lib/images/properties/idywilde/large/003_img4471.jpg';
</script>

<section>
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
		<!-- Button: Left -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
			<i class="fa-solid fa-arrow-left" />
		</button>
		<!-- Full Images -->
		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each photos as photo}
				<img
					class="snap-center w-full rounded-container-token"
					src={photo}
					alt={photo}
					loading="lazy"
				/>
			{/each}
		</div>
		<!-- Button: Right -->
		<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
			<i class="fa-solid fa-arrow-right" />
		</button>
	</div>
</section>
