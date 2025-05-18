<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import type { PageProps } from "./$types.js";

	let { data }: PageProps = $props();
</script>

{#each data.blocks as block}
	<Button class="m-4" href="/blocks/{block}">{block}</Button>
{/each}
