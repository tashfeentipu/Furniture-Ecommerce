import { createRoot } from "react-dom/client";
import { Auth } from "./App";

const mount = ({
    mountPoint,
    initialPathname,
}: {
    mountPoint: HTMLElement;
    initialPathname?: string;
}) => {
    const root = createRoot(mountPoint);
    root.render(<Auth />);

    return () => queueMicrotask(() => root.unmount());
};

export { mount };