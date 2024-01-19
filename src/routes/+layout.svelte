<script lang="ts">
	import '../app.postcss';
	// Skeleton UI Layout Helpers
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups and Dropdowns
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, popup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import DropNav from '$lib/components/navigation/Dropdown.svelte';
	// Drawer
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	// Navigation for drawer
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	initializeStores();
	const drawerStore = getDrawerStore();
	// Open Drawer Function
	function drawerOpen(): void {
		drawerStore.open({});
	}
	// Logo
	import logo from '$lib/images/HarborsidePropertyManagement_Logo_Only.png';
</script>

<!-- Drawer for small screens -->
<Drawer>
	<Navigation />
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button on:click={drawerOpen} class="lg:hidden btn btn-sm mr-4">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/"><img src={logo} alt="Harborside Property Management Logo" class="w-20" /></a>
				</div>
			</svelte:fragment>
			<div class="relative hidden lg:block">
				<!-- trigger -->
				<button
					class="btn hover:variant-soft-primary"
					use:popup={{ event: 'click', target: 'features' }}
				>
					<span>Explore</span>
					<i class="fa-solid fa-caret-down opacity-50" />
				</button>
				<!-- popup -->
				<div class="card p-4 w-60 shadow-xl -z-40" data-popup="features">
					<DropNav />
					<div class="arrow bg-surface-100-800-token" />
				</div>
			</div>
			<svelte:fragment slot="trail">
				<a href="tel:2318815282" class="btn variant-filled-primary"> Call Now! </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
