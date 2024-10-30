<script lang="ts">
	import Launcher from './components/Launcher.svelte';

	let rocketPowder = $state(0);
	let chosenRocket = $state('');
</script>

<div class="flex flex-col gap-3">
	<div>Choose a rocket:</div>
	<select bind:value={chosenRocket} class="border border-red-950">
		<option value="falcon9">Falcon 9</option>
		<option value="scoutF">Scout F</option>
	</select>

	<!-- component here -->
	<Launcher {rocketPowder} {chosenRocket} />
</div>
