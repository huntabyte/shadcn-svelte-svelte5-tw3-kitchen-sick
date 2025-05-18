<script lang="ts">
	import * as comps from "$lib/examples/index.js";
</script>

{#each Object.entries(comps) as [name, Comp]}
	<div class="py-8 px-4 border">
		<h1>{name}</h1>
		<Comp />
	</div>
{/each}
