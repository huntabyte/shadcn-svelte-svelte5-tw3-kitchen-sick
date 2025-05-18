<script lang="ts">
	import * as comps from "$lib/examples/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	// needed for certain demos
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";

	function changeMode() {
		const el = document.documentElement;
		console.log(el);
		if (el.className === "dark") el.className = "";
		else el.className = "dark";
	}
</script>

<Button class="m-4" onclick={changeMode}>Change modes</Button>

<Tooltip.Provider>
	{#each Object.entries(comps) as [name, Comp]}
		<div class="py-8 px-4 border">
			<h1>{name}</h1>
			<Comp />
		</div>
	{/each}
</Tooltip.Provider>
