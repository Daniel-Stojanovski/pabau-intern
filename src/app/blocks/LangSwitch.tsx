import React, { useState } from 'react';

import { Flex, Switch } from 'antd';

interface LangSwitchProps {
    switchLanguage: boolean;
    onLanguageChange: (checked: boolean) => void;
}

const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.6rem',
    background: '#fff',
    textAlign: 'center',
    margin: '0.4rem',
};

const marginStyle: React.CSSProperties = {
    margin: '0.2rem 0.4rem',
}

export default function LangSwitch({ switchLanguage, onLanguageChange }: LangSwitchProps) {
    return (
        <Flex justify={'space-between'} style={boxStyle}>
            <h4 style={marginStyle}>EN</h4>
            <Switch style={marginStyle} checked={switchLanguage} onChange={onLanguageChange}/>
            <h4 style={marginStyle}>DE</h4>
        </Flex>
    );
};