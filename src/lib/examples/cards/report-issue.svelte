<script lang="ts">
	import { useId } from "bits-ui";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as Select from "$lib/components/ui/select/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Textarea } from "$lib/components/ui/textarea/index.js";

	const areas = [
		{
			value: "team",
			label: "Team",
		},
		{
			value: "billing",
			label: "Billing",
		},
		{
			value: "account",
			label: "Account",
		},
		{
			value: "deployments",
			label: "Deployments",
		},
		{
			value: "support",
			label: "Support",
		},
	];

	const securityLevels = [
		{
			value: "1",
			label: "Severity 1 (Highest)",
		},
		{
			value: "2",
			label: "Severity 2",
		},
		{
			value: "3",
			label: "Severity 3",
		},
		{
			value: "4",
			label: "Severity 4 (Lowest)",
		},
	];

	const id = useId("report-issue");
	let securityLevel = $state(securityLevels[1].value);
	const securityLevelLabel = $derived(
		securityLevels.find((l) => l.value === securityLevel)?.label ??
			"Select level"
	);
	let area = $state(areas[1].value);
	const areaLabel = $derived(
		areas.find((a) => a.value === area)?.label ?? "Select"
	);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Report an issue</Card.Title>
		<Card.Description>What area are you having problems with?</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-6">
		<div class="grid gap-4 sm:grid-cols-2">
			<div class="grid gap-2">
				<Label for="aria-{id}">Area</Label>
				<Select.Root type="single" bind:value={area}>
					<Select.Trigger id="aria-{id}">
						{areaLabel}
					</Select.Trigger>
					<Select.Content>
						{#each areas as { value, label } (value)}
							<Select.Item {value} {label} />
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
			<div class="grid gap-2">
				<Label for="security-level-{id}">Security Level</Label>
				<Select.Root type="single" bind:value={securityLevel}>
					<Select.Trigger id="security-level-{id}" class="w-full truncate">
						{securityLevelLabel}
					</Select.Trigger>
					<Select.Content>
						{#each securityLevels as { value, label } (value)}
							<Select.Item {value} {label} />
						{/each}
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="subject-{id}">Subject</Label>
			<Input
				id="subject-{id}"
				name="subject-{id}"
				placeholder="I need help with..."
			/>
		</div>
		<div class="grid gap-2">
			<Label for="description-{id}">Description</Label>
			<Textarea
				id="description-{id}"
				name="description-{id}"
				placeholder="Please include all information relevant to your issue."
			/>
		</div>
	</Card.Content>
	<Card.Footer class="justify-between space-x-2">
		<Button variant="ghost">Cancel</Button>
		<Button>Submit</Button>
	</Card.Footer>
</Card.Root>
