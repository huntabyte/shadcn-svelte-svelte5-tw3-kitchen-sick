<script lang="ts">
	import Italic from "@lucide/svelte/icons/italic";
	import { Toggle } from "$lib/components/ui/toggle/index.js";
</script>

<Toggle aria-label="Toggle italic">
	<Italic class="mr-2 size-4" />
	Italic
</Toggle>
