<script>
	import { Icon } from 'svelte-materialdesign-icons';

	import secondSt from '$lib/images/properties/rental1/002_img9669.jpg';
	import idywilde from '$lib/images/properties/idywilde/002_img4468.jpg';
	import glenDrive from '$lib/images/properties/glenndr/viewbeachglen.jpg';
</script>

<!-- Featured Properties Section -->
<section class="container mx-auto p-4">
	<h2 class="text-center font-bold text-2xl mb-6">All Properties</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={secondSt} alt="Second Street Rental" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Second St - Harbor Springs
					<div class="badge variant-filled">In Town</div>
				</h2>
				<article>
					<p>
						This spacious home is in downtown Harbor Springs, and a short walk or bike ride to
						shopping, Lake Michigan and walking trials.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled-secondary">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 4 bedrooms
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;5 bath
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 10
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details/secondSt" class="btn variant-filled-primary">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={idywilde} alt="Idywilde Rental House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Idylwilde Dr - Harbor Springs
					<div class="badge variant-filled">Lake Access</div>
				</h2>
				<article>
					<p>
						Beautiful Harbor Springs home located in a historic association with 1/2 mile of private
						association Lake Michigan beach. Downtown Harbor Springs is just a short drive away.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled-secondary">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;5 bath
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 8
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-filled-primary">More Info</a>
				</footer>
			</div>
		</div>
		<div class="card w-96 shadow-xl mb-8">
			<header><img src={glenDrive} alt="House" /></header>
			<div class="p-4 space-y-4">
				<h2 class="">
					Lake Living
					<div class="badge variant-filled">Private Beach Access</div>
				</h2>
				<article>
					<p>
						This Harbor Springs retreat is located walking distance or bike ride from town and right
						on Lake Michigan. This home has private lake access and a large private yard.
					</p>
				</article>
				<hr class="opacity-50" />
				<div class="flex justify-between">
					<div class="badge variant-filled-secondary">
						<Icon name="bed" class="shrink-0 h-4 w-4" />&nbsp; 3 bedrooms
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="bathtub" class="shrink-0 h-4 w-4" />&nbsp;2 bath
					</div>
					<div class="badge variant-filled-secondary">
						<Icon name="sleep" class="shrink-0 h-4 w-4" />&nbsp;sleeps 6
					</div>
				</div>
				<hr class="opacity-50" />
				<footer class="flex justify-end mt-4">
					<a href="/property-details" class="btn variant-filled-primary">More Info</a>
				</footer>
			</div>
		</div>
	</div>
	<h2 class="text-center font-bold text-3xl mb-6">More Properties Coming Soon!</h2>
	<div class="grid grid-cols-1">
		<a href="tel:2318815282" class="btn variant-filled-primary text-2xl">
			<Icon name="phone" class="shrink-0 h-4 w-4" />&nbsp; Call Now!</a
		>
	</div>
</section>
