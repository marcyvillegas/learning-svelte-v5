<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let activePage = $state('/');

	$effect(() => {
		activePage = $page.url.pathname;
	});

	const tabs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'About',
			url: '/about'
		}
	];

	function redirectPage(page: string): void {
		goto(page);
	}
</script>

<!-- snippet -->
{#snippet tab(name: string, url: string)}
	<tab>
		<button
			class={`border border-red-950 p-3 ${activePage == url ? 'bg-orange-200' : ''}`}
			onclick={() => redirectPage(url)}>{name}</button
		>
	</tab>
{/snippet}

<div>
	<div class="mt-3 flex justify-center">WELCOME TO LEARNING SVELTE 5!!! 🚀👩‍🚀</div>
	<div class="mt-3 flex justify-center gap-3">
		{#each tabs as item}
			{@render tab(item.name, item.url)}
		{/each}
	</div>
</div>
