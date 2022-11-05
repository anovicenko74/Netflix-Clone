import React, {
    createContext,
    useState
} from 'react';


const defaultSettings = {
    theme: 'dark'
}

const SettingsContext = createContext({
    settings: defaultSettings,
});

export const SettingsProvider = ({ settings, children }) => {
    const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings);

    const changeSettings = (settings) => {
        setCurrentSettings((oldSettings) => {
            return ({ ...oldSettings, ...settings })
        })
    }

    const toggleTheme = () => {
        setCurrentSettings((oldSettings) => {
            return ({ ...oldSettings, theme: oldSettings.theme == 'dark' ? 'light' : 'dark' })
        })
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                changeSettings,
                toggleTheme,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
