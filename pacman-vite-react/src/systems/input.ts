import { useEffect } from 'react';

const useInput = (onKeyPress: (key: string) => void) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            onKeyPress(event.key);
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onKeyPress]);
};

export default useInput;