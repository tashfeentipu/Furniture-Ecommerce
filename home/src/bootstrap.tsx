import { createRoot } from "react-dom/client";
import { Home } from "./App";

const mount = ({
    mountPoint,
    initialPathname,
}: {
    mountPoint: HTMLElement;
    initialPathname?: string;
}) => {
    const root = createRoot(mountPoint);
    root.render(<Home />);

    return () => queueMicrotask(() => root.unmount());
};

export { mount };