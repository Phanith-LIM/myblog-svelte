<script lang="ts">
import ClipboardJS from 'clipboard';
import { afterNavigate } from '$app/navigation';
import { onDestroy } from 'svelte';

let clipboardInstances: ClipboardJS[] = [];

afterNavigate(() => {
	// Cleanup previous clipboard instances
	clipboardInstances.forEach((clipboard) => clipboard.destroy());
	clipboardInstances = [];

	// Add copy button to each <pre> block
	document.querySelectorAll('pre').forEach((pre) => {
		const code = pre.querySelector('code');
		if (!code || pre.querySelector('.copy-btn')) return;

		// Create wrapper for flex layout
		const wrapper = document.createElement('div');
		wrapper.className =
			'relative flex items-start justify-between w-full bg-[#f6f8fa] dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden';

		// Style the <pre> element
		pre.className = 'flex-1 m-0 p-4 overflow-auto text-sm';

		// Create copy button
		const button = document.createElement('button');
		button.className =
			'copy-btn p-2 m-2 bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition flex items-center justify-center w-8 h-8';
		button.innerHTML = `
			<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
				<path d="M15 3H5a2 2 0 0 0-2 2v12"></path>
			</svg>
		`;

		// Insert wrapper and append elements
		pre.parentNode?.insertBefore(wrapper, pre);
		wrapper.appendChild(pre);
		wrapper.appendChild(button);

		// Initialize ClipboardJS
		const clipboard = new ClipboardJS(button, {
			text: () => code.innerText
		});

		clipboard.on('success', (e) => {
			button.innerHTML = `
				<svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			`;
			setTimeout(() => {
				button.innerHTML = `
					<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
						<path d="M15 3H5a2 2 0 0 0-2 2v12"></path>
					</svg>
				`;
			}, 1500);
			e.clearSelection();
		});

		clipboardInstances.push(clipboard);
	});
});

onDestroy(() => {
	clipboardInstances.forEach((clipboard) => clipboard.destroy());
});
</script>

<slot />