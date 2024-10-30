<script lang="ts">
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import '../app.css';
	import { navigating } from '$app/stores';

	let { children } = $props();

	let displayLoading = $state(false);

	$effect(() => {
		if ($navigating) displayLoading = true;
		if (!$navigating) displayLoading = false;
	});
</script>

<Navigation />

{@render children()}
