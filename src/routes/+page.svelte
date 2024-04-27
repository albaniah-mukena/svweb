<script>
	import { Section, Page500 } from 'flowbite-svelte-blocks';
	import maintenanceIllustration from '$lib/assets/illustrations/maintenance.png';
</script>

<Section name="page500">
	<img alt="The project logo" src={maintenanceIllustration} class="mx-auto max-w-lg" />
	<Page500>
		<svelte:fragment slot="paragraph">
			<p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
				Maaf ya kak masih dalam proses pengembangan.
			</p>
		</svelte:fragment>
	</Page500>
</Section>
