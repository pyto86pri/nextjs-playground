import React, { useEffect } from 'react';

const SW = () => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(() => {
                    console.log('success');
                })
                .catch(e => {
                    console.warn(e.message);
                })
        }
    });
    return <></>;
}

export default SW;