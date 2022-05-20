import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollTo = () => {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        const onLoaded = () => {
            const el = document.getElementById(hash.slice(1));
            el.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            });
        };

        if (hash) {
            window.addEventListener('load', onLoaded, {once: true});
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};
