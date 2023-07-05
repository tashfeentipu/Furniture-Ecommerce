import('./bootstrap').then(
    ({ mount }) => {
        const localRoot = document.getElementById('fs_auth_ms');

        mount({
            mountPoint: localRoot!,
        });
    }
);