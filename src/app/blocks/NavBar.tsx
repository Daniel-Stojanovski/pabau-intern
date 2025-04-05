import React, { useState } from 'react';
import { Radio, Flex, Button, Divider } from "antd";
import type { CheckboxGroupProps } from 'antd/es/checkbox';

import * as i from 'react-bootstrap-icons';

//EN
const statusOptions: CheckboxGroupProps<string>['options'] = [
    { label: 'Whatever', value: 'All' },
    { label: 'Alive', value: 'Alive' },
    { label: 'Dead', value: 'Dead' },
    { label: 'Unknown', value: 'unknown' },
];
const speciesOptions: CheckboxGroupProps<string>['options'] = [
    { label: 'Either', value: 'All' },
    { label: 'Human', value: 'Human' },
    { label: 'Alien', value: 'Alien' },
];
const sortOptions: CheckboxGroupProps<string>['options'] = [
    { label: 'None', value: "None"},
    { label: 'Name', value: 'Name' },
    { label: 'Origin', value: 'Origin' },
];

//DE
const statusOptionsDe: CheckboxGroupProps<string>['options'] = [
    { label: 'Alle', value: 'All' },
    { label: 'Lebend', value: 'Alive' },
    { label: 'Tot', value: 'Dead' },
    { label: 'Unbekannt', value: 'unknown' },
];
const speciesOptionsDe: CheckboxGroupProps<string>['options'] = [
    { label: 'Entweder', value: 'All' },
    { label: 'Mensch', value: 'Human' },
    { label: 'Außerirdischer', value: 'Alien' },
];
const sortOptionsDe: CheckboxGroupProps<string>['options'] = [
    { label: 'Keine', value: "None"},
    { label: 'Name', value: 'Name' },
    { label: 'Herkunft', value: 'Origin' },
];

// const sortByOptions: CheckboxGroupProps<string>['options'] = [
//     { label: <i.SortAlphaDown/>, value: 'az' },
//     { label: <i.SortAlphaDownAlt/>, value: 'za' },
// ];

const stickyTop: React.CSSProperties = {
    position: 'fixed',
    top: '0',
}

const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.6rem',
    background: '#fff',
    textAlign: 'center',
};

const padStyle: React.CSSProperties = {
    padding: '0.4rem',
}


export default function NavBar({
    statusFilter,
    speciesFilter,
    // sortOption,
    onStatusChange,
    onSpeciesChange,
    onSortChange,
    switchLanguage
  }: {
    statusFilter: string;
    speciesFilter: string;
    sortOption: string;
    onStatusChange: (val: string) => void;
    onSpeciesChange: (val: string) => void;
    onSortChange: (val: string) => void;
    switchLanguage: boolean;
  }){

    // const [sortDirection, setSortDirection] = useState<'az' | 'za'>('az');
  
    return (
      <div style={padStyle}>
        <Flex style={boxStyle} gap="middle" justify={'space-around'} align="center" vertical>
            <h2>{ switchLanguage ? 'Charaktere der Rick & Morty-Show' : 'Rick & Morty Show Characters'}</h2>
            <Flex  justify={'space-between'} align={'center'}>
                <h4>{switchLanguage ? 'Sieb' : 'Filter'}</h4>
                <Radio.Group style={padStyle}
                    block
                    options={switchLanguage ? statusOptionsDe : statusOptions}
                    defaultValue="All"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                    optionType="button"
                    buttonStyle="solid"
                />
                <Radio.Group style={padStyle}
                    block
                    options={switchLanguage ? speciesOptionsDe : speciesOptions}
                    defaultValue="All"
                    value={speciesFilter}
                    onChange={(e) => onSpeciesChange(e.target.value)}
                    optionType="button"
                    buttonStyle="solid"
                />
                <Divider type='vertical'/>
                <h4>{switchLanguage ? 'Sortieren' : 'Sort'}</h4>
                <Radio.Group style={padStyle}
                    block
                    options={switchLanguage ? sortOptionsDe : sortOptions}
                    defaultValue="None"                   
                    optionType="button"
                    buttonStyle="solid"
                    onChange={(e) => onSortChange(e.target.value)}
                />
                {/* <Radio.Group style={padStyle}
                    block
                    options={sortByOptions}   
                    // defaultValue="az"                 
                    optionType="button"
                    buttonStyle="solid"
                    onChange={(e) => onSortChange(e.target.value)}
                /> */}
                {/* <Button onClick={() => setSortDirection(sortDirection === 'az' ? 'za' : 'az')}>
                    {sortDirection === 'az' ? <i.SortAlphaDown/> : <i.SortAlphaDownAlt/>}
                </Button> */}
            </Flex>
        </Flex>        
      </div>
  );
}