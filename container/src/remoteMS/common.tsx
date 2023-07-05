// import { mount } from "home/home";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default (mount: Function) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isFirstRunRef = useRef(true);
    const unmountRef = useRef(() => { });
    // Mount MS
    useEffect(
        () => {
            if (!isFirstRunRef.current) {
                return;
            }
            unmountRef.current = mount({
                mountPoint: wrapperRef.current!,
            });
            isFirstRunRef.current = false;
        },
        [],
    );

    useEffect(() => unmountRef.current, []);

    return <div ref={wrapperRef} />;
};