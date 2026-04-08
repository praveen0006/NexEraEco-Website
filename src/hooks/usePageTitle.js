import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (title) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = 'NexEraEco | SolarXite';
        document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    }, [title, location]);
};

export default usePageTitle;
