import React, { useContext } from 'react';
import { SettingContext } from '../../context/SettingsContext';
import { StyledButton } from './styles';

// Write your countdown code in this component
export const MenuButton = () => {
    //context values/functions
    const { activateMenu } = useContext(SettingContext)

    return (
        <StyledButton onClick={() => { activateMenu(true) }}>Settings</StyledButton>
    );
};

