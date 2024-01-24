<script>
	import { Icon } from 'svelte-materialdesign-icons';
	import secondSt from '$lib/images/properties/rental1/002_img9669.jpg';
	import idywilde from '$lib/images/properties/idywilde/002_img4468.jpg';
	import glenDrive from '$lib/images/properties/glenndr/viewbeachglen.jpg';
</script>

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
				Beach Access - Harbor Springs
				<div class="badge variant-filled">Lake Access</div>
			</h2>
			<article>
				<p>
					This brand new spacious home boasts a very large and relaxing layout with two master
					bedrooms, and a large bunk room to comfortably sleep 8.
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
				<a href="/property-details/idywildeDr" class="btn variant-filled-primary">More Info</a>
			</footer>
		</div>
	</div>
	<div class="card w-96 shadow-xl mb-8">
		<header><img src={glenDrive} alt="House" /></header>
		<div class="p-4 space-y-4">
			<h2 class="">
				Lake Living - Harbor Springs
				<div class="badge variant-filled">Private Beach Access</div>
			</h2>
			<article>
				<p>
					Situated right on Lake Michigan, this amazing home is just a short bike ride or walk to
					downtown shopping, restaurants and marina's.
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
				<a href="/property-details/glennDr" class="btn variant-filled-primary">More Info</a>
			</footer>
		</div>
	</div>
</div>
