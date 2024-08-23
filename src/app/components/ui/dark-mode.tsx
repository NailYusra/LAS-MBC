import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setIsDarkMode(currentTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;