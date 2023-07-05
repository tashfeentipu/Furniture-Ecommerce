import('./bootstrap').then(
    ({ mount }) => {
        const localRoot = document.getElementById('fs_home_ms');

        mount({
            mountPoint: localRoot!,
        });
    }
);