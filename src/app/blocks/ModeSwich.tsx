import React, { useState } from 'react';

import { Switch } from 'antd';

export default function ModeSwitch() {
    return (
        <>
            <h4>Light</h4>
            <Switch/>
            <h4>Dark</h4>
        </>
    );
};