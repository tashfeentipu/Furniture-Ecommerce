import('./bootstrap').then(
    ({ mount }) => {
        const localRoot = document.getElementById('fs_components_ms');

        mount({
            mountPoint: localRoot!,
        });
    }
);