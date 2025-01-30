<script lang="ts">
import ClipboardJS from 'clipboard';
import { afterNavigate } from '$app/navigation';
import { onDestroy } from 'svelte';

let clipboardInstances: ClipboardJS[] = [];

afterNavigate(() => {
	// Cleanup previous instances
	clipboardInstances.forEach(clipboard => clipboard.destroy());
	clipboardInstances = [];

	// Create copy buttons for all code blocks
	document.querySelectorAll('pre').forEach((pre) => {
    const code = pre.querySelector('code');
    if (!code || pre.querySelector('.copy-btn')) return;

    // Create a wrapper div with flexbox
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-start justify-between relative w-full bg-[#f6f8fa] dark:bg-[#151b23]';

    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-btn p-2 m-2 bg-[#f6f8fa] dark:bg-[#151b23] text-black dark:text-white rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 transition w-8 h-8 flex items-center justify-center';
    button.innerHTML = `
        <svg class="icon w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M15 3H5a2 2 0 0 0-2 2v12"></path>
        </svg>
    `;

    // Wrap `pre` inside `wrapper`
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    wrapper.appendChild(button);

    // Initialize ClipboardJS
    const clipboard = new ClipboardJS(button, {
        text: () => code.innerText
    });

    clipboard.on('success', (e) => {
        button.innerHTML = `
            <svg class="icon w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        setTimeout(() => {
            button.innerHTML = `
                <svg class="icon w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M15 3H5a2 2 0 0 0-2 2v12"></path>
                </svg>
            `;
        }, 2000);
        e.clearSelection();
    });
        clipboardInstances.push(clipboard);
	});
});

onDestroy(() => {
	clipboardInstances.forEach(clipboard => clipboard.destroy());
});
</script>

<slot />