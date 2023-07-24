import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default (mount: Function, baseName: string) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isFirstRunRef = useRef(true);
    const unmountRef = useRef(() => { });
    const navigate = useNavigate();
    const location = useLocation();

    const newBaseName = `/${baseName}`

    // Listen to navigation events dispatched inside mfe.
    useEffect(() => {
        const navigationEventHandler = (event: Event) => {
            const pathname = (event as CustomEvent<string>).detail;
            const newPathname = `${newBaseName}${pathname}`;
            if (newPathname === location.pathname) {
                return;
            }
            navigate(newPathname);
        };
        window.addEventListener(`${baseName} navigated`, navigationEventHandler);

        return () => {
            window.removeEventListener(
                `${baseName} navigated`,
                navigationEventHandler
            );
        };
    }, [location]);

    // Listen for container location changes and dispatch a notification.
    useEffect(
        () => {
            if (location.pathname.startsWith(newBaseName)) {
                window.dispatchEvent(
                    new CustomEvent("container navigated", {
                        detail: location.pathname.replace(newBaseName, ""),
                    })
                );
            }
        },
        [location],
    );

    // Mount MS
    useEffect(
        () => {
            if (!isFirstRunRef.current) {
                return;
            }
            unmountRef.current = mount({
                mountPoint: wrapperRef.current!,
                initialPathname: location.pathname.replace(
                    newBaseName,
                    ''
                ),
            });
            isFirstRunRef.current = false;
        },
        [],
    );

    useEffect(() => unmountRef.current, []);

    return <div ref={wrapperRef} />;
};