import { Radio, Flex } from "antd";
import type { FlexProps } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

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
    { label: 'Name', value: 'Name' },
    { label: 'Origin', value: 'Origin' },
];

const boxStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.2rem',
    border: '1px solid #40a9ff',
};

const padStyle: React.CSSProperties = {
    padding: '0.4rem',
}

export default function NavBar({
    statusFilter,
    speciesFilter,
    sortOption,
    onStatusChange,
    onSpeciesChange,
    onSortChange
  }: {
    statusFilter: string;
    speciesFilter: string;
    sortOption: string;
    onStatusChange: (val: string) => void;
    onSpeciesChange: (val: string) => void;
    onSortChange: (val: string) => void;
  }){
  
    return (
      <div>
        <Flex gap="middle" align="center" vertical>
            <h2> 
                Rick & Morty Show Characters
            </h2>
            <Flex style={boxStyle} justify={'space-between'} align={'center'}>
                <h4>Filter</h4>
                <Radio.Group style={padStyle}
                    block
                    options={statusOptions}
                    defaultValue="All"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                    optionType="button"
                    buttonStyle="solid"
                />
                <Radio.Group style={padStyle}
                    block
                    options={speciesOptions}
                    defaultValue="All"
                    value={speciesFilter}
                    onChange={(e) => onSpeciesChange(e.target.value)}
                    optionType="button"
                    buttonStyle="solid"
                />
                <h4>Sort</h4>
                <Radio.Group style={padStyle}
                    block
                    options={sortOptions}                    
                    optionType="button"
                    buttonStyle="solid"
                />
            </Flex>
        </Flex>        
      </div>
  );
}