import { createRoot } from "react-dom/client";
import { Components } from "./App";

const mount = ({
    mountPoint,
    initialPathname,
}: {
    mountPoint: HTMLElement;
    initialPathname?: string;
}) => {
    const root = createRoot(mountPoint);
    root.render(<Components />);

    return () => queueMicrotask(() => root.unmount());
};

export { mount };