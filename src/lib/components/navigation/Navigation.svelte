<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a on:click={drawerClose} href="/">Home</a></li>
		<li><a on:click={drawerClose} href="/all-properties">All Properties</a></li>
		<li><a on:click={drawerClose} href="/management-services">Management Services</a></li>
		<li><a on:click={drawerClose} href="/what-we-do">What We Do</a></li>
		<li><a on:click={drawerClose} href="/contact-us">Contact</a></li>
		<li><a on:click={drawerClose} href="/about-us">About</a></li>
	</ul>
</nav>
