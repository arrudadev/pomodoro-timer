import React from 'react';

import { useLocalStorageState } from '../hooks/useLocalStorageState';

const SettingsContext = React.createContext<any>({});

interface Settings {
  pomodoroInterval: number;
  shortBreakInterval: number;
  longBreakInterval: number;
  pomodoroSessions: number;
}

const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useLocalStorageState<Settings>(
    '@pomodorTimer/settings',
    {
      pomodoroInterval: 25,
      shortBreakInterval: 5,
      longBreakInterval: 15,
      pomodoroSessions: 4,
    },
  );

  const changeSettings = (newSettings: Settings) => {
    setSettings(newSettings);
  };
  return (
    <SettingsContext.Provider value={{ changeSettings, settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
