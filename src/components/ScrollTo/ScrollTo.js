import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollTo = () => {
    const {pathname, hash} = useLocation();

    useEffect(() => {
        const onLoaded = () => {
            const el = document.getElementById('hash');
            el.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            });
        };

        if (!!hash) {
            window.addEventListener('load', onLoaded);
        } else {
            window.scrollTo(0, 0);
        }

        return window.removeEventListener('load', onLoaded);
    }, [pathname, hash]);

    return null;
};
