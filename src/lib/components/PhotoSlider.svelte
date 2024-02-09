<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	// or other themes
	import '@splidejs/svelte-splide/css';

	// Images
	import photos from '$lib/images/properties/idywilde/large';
</script>

<section>
	<Splide
		options={{ rewind: true }}
		aria-label="Image Slider"
		class="container max-w-screen-xl mx-auto max-h-screen"
	>
		{#each photos as photo}
			<SplideSlide>
				<img src={photo} alt="House pick 1" />
			</SplideSlide>
		{/each}
	</Splide>
</section>
