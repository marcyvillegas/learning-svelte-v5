<script lang="ts">
	let { rocketPowder = $bindable(), chosenRocket } = $props();

	let isLaunched = $state(false);

	function handleLaunch() {
		isLaunched = true;
	}
</script>

<div class="mt-3 flex flex-col items-center gap-3">
	<div>Rocket Powder Percentage:</div>
	<input type="number" bind:value={rocketPowder} />
	<button
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
		disabled={rocketPowder < 100}
		onclick={handleLaunch}
	>
		{#if rocketPowder < 100}
			Cannot launch! Add more rocket powder
		{:else}
			Launch
		{/if}
	</button>
	<div>Rocket used: {chosenRocket}</div>
	<div>RESULT:</div>
	<!-- logic here -->
	<div class={isLaunched && 'bg-black p-4 font-bold text-red-500'}>
		{#if isLaunched && rocketPowder >= 100}
			{#if chosenRocket === 'falcon9'}
				SPACEX SUCCESS
			{:else if chosenRocket === 'scoutF'}
				BPS.SPACE SUCCESS
			{/if}
		{/if}
	</div>
</div>
