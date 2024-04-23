<script>
	import { Section, Page404 } from 'flowbite-svelte-blocks';
	import maintenanceIllustration from '$lib/assets/illustrations/maintenance.png';
</script>

<Section name="page404">
	<div class="flex justify-center">
		<img alt="The project logo" src={maintenanceIllustration} class="max-w-lg" />
	</div>
	<Page404>
		<svelte:fragment slot="paragraph">
			<p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
				Maaf ya, kami masih dalam proses pengembangan 🙏🙏😊
			</p>
		</svelte:fragment>
	</Page404>
</Section>
