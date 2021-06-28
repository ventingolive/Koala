import React, {useState, createContext} from "react";

interface IContextProps {
    stopTimer: any,
    startTimer: any,
    pauseTimer: any,
    currentTimer: any,
    startCountDown: any,
    stopCountDown: any,
    cancelTimer: any,
    initCancelTimer: any,
    setTimerTime: any,
    showMenu: any,
    activateMenu: any

}
export const SettingContext = createContext({} as IContextProps);

const SettingsContextProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [currentTimer, setCurrentTimer] = useState('00:00:00') 
    const [startCountDown, setStartCountDown] = useState(false)
    const [stopCountDown, setStopCountDown] = useState(false)
    const [initCancelTimer, setInitCancelTimer] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    function startTimer(time: any) {
        setStartCountDown(true)
        setCurrentTimer(time)
    }
    function pauseTimer() {
        setStartCountDown(false)
    }
    function stopTimer(timerStop: any) {
        setStopCountDown(timerStop)
    }
    function cancelTimer() {
        setInitCancelTimer(true)
    }
    function setTimerTime (time: any) {
        setCurrentTimer(time)
    }
    function activateMenu (show: any) {
        setShowMenu(show)
    }

    return (
        <SettingContext.Provider value={{ 
            stopTimer, 
            startTimer,
            pauseTimer,
            currentTimer,
            startCountDown,
            stopCountDown,
            cancelTimer,
            initCancelTimer,
            setTimerTime,
            showMenu,
            activateMenu
             }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider