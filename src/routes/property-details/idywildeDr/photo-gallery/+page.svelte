<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';

	// Images
	import photo1 from '$lib/images/properties/idywilde/large/002_img4468.jpg';
	import photo2 from '$lib/images/properties/idywilde/large/001_img4468-twilight.jpg';
	import photo3 from '$lib/images/properties/idywilde/large/003_img4471.jpg';
</script>

<section>
	<Splide
		options={{ rewind: true }}
		aria-label="Image Slider"
		class="container max-w-screen-xl mx-auto"
	>
		<SplideSlide>
			<img src={photo1} alt="House pick 1" />
		</SplideSlide>
		<SplideSlide>
			<img src={photo2} alt="House pick 2" />
		</SplideSlide>
		<SplideSlide>
			<img src={photo3} alt="House pick 3" />
		</SplideSlide>
	</Splide>
</section>
