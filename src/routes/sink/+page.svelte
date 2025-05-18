<script lang="ts">
	import * as comps from "$lib/examples/index.js";
	import { Button } from "$lib/components/ui/button/index.js";

	function changeMode() {
		const el = document.documentElement;
		console.log(el);
		if (el.className === "dark") el.className = "";
		else el.className = "dark";
	}
</script>

<Button class="m-4" onclick={changeMode}>Change modes</Button>
{#each Object.entries(comps) as [name, Comp]}
	<div class="py-8 px-4 border">
		<h1>{name}</h1>
		<Comp />
	</div>
{/each}
