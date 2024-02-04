<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	// or other themes
	import '@splidejs/svelte-splide/css/skyblue';

	// Images
	import photos from '$lib/images/properties/idywilde/large';
</script>

<section class="container mx-auto">
	<Splide options={{ rewind: true }} aria-label="Test Image Slider">
		{#each photos as photo}
			<SplideSlide>
				<img src={photo} alt="House pick 1" />
			</SplideSlide>
		{/each}
	</Splide>
</section>
