import React, { useContext } from 'react';
import { StyledHeader } from './styles';

import { SettingContext } from '../../context/SettingsContext';
import { Logo } from '../logo'
import { MenuButton } from '../menuButton'
import { Settings } from '../settings'

// Write your countdown code in this component
export const Header = () => {

    //context values/functions
    const { showMenu } = useContext(SettingContext)

    return (
        <StyledHeader>
            <Logo />
            {!showMenu && <MenuButton />}
            {showMenu && <Settings />}
        </StyledHeader>
    );
};