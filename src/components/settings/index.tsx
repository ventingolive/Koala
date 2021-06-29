import React, { useContext } from 'react';
import { SettingContext } from '../../context/SettingsContext';
import { StyledCloseButton, StyledButton, StyledMenu, StyledInputAlign, StyledInputLabelAlign, StyledInput, StyledButtonAlign } from './styles';

// Write your countdown code in this component
export const Settings = () => {

    //context values/functions
    const { stopTimer } = useContext(SettingContext)
    const { cancelTimer } = useContext(SettingContext)
    const { setTimerTime } = useContext(SettingContext)
    const { activateMenu } = useContext(SettingContext)

    //trigger timer
    function initTimer() {
        var hours = (document.getElementById('inputHours') as HTMLInputElement).value;
        var minutes = (document.getElementById('inputMinutes') as HTMLInputElement).value;
        var seconds = (document.getElementById('inputSeconds') as HTMLInputElement).value;
        setTimerTime((hours === '' ? '00' : hours) + ':' + (minutes === '' ? '00' : minutes) + ':' + (seconds === '' ? '00' : seconds))
    };
    function initStartTimer() {
        activateMenu(false)
        initTimer()
    }
    function initPauseTimer() {
        activateMenu(false)
        stopTimer(true)
    }
    function initResumeTimer() {
        activateMenu(false)
        stopTimer(false)
    }
    function initCancelTimer() {
        activateMenu(false)
        cancelTimer(true)
    }
    return (
        <StyledMenu>
            <StyledCloseButton onClick={() => { activateMenu(false) }}>Close</StyledCloseButton>
            <StyledInputAlign>
                <StyledInputLabelAlign>
                    <StyledInput type="number" id="inputHours"></StyledInput><label htmlFor="inputHours">HOURS</label>
                </StyledInputLabelAlign>
                <StyledInputLabelAlign>
                    <StyledInput type="number" id="inputMinutes"></StyledInput><label htmlFor="inputHours">MINS</label>
                </StyledInputLabelAlign>
                <StyledInputLabelAlign>
                    <StyledInput type="number" id="inputSeconds"></StyledInput><label htmlFor="inputHours">SECS</label>
                </StyledInputLabelAlign>
            </StyledInputAlign>
            <StyledButtonAlign>
                <StyledButton onClick={() => { initStartTimer() }}>Start</StyledButton>
                <StyledButton onClick={() => { initPauseTimer() }}>Pause</StyledButton>
                <StyledButton onClick={() => { initResumeTimer() }}>Resume</StyledButton>
                <StyledButton onClick={() => { initCancelTimer() }}>Reset</StyledButton>
            </StyledButtonAlign>           
        </StyledMenu>
    );
};

