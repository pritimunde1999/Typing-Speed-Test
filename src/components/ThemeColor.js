import React from 'react';
import Select from 'react-select';

const ThemeColor = ({ setTheme }) => {
  const options = [
    { value: 'white', label: 'Lighten-White' },
    { value: 'black', label: 'Darken-Black' },
    { value: 'rgb(211,211,211)', label: 'Coloured-Grey' },
    { value: 'pink', label: 'Coloured-Pink' },
    { value: 'rgb(153,153,255)', label: 'Coloured-Purple' },
    { value: 'rgb(51,204,255)', label: 'Coloured-Blue' },
    { value: 'rgb(204,255,204)', label: 'Coloured-Green' },
  ];

  const customStyles=() => ({
   
      control: (base, state) => ({
      ...base,
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '5px',
    
    }),
    
     option: (provided) => ({
      ...provided,
      fontSize: '14px',
      padding: '6px 8px', // Adjust the padding as needed
    }),

    menu: (provided) => ({
      ...provided,
      position: 'absolute',
      top: '-530%', // Move the menu above the control
      left: 0,
    }),
    
  });
 

  const defaultValue = options.find((option) => option.value === 'white'); 
  

  return (
    <div className='selectTheme'>
      <Select
        options={options}
        styles={customStyles()}
        defaultValue={defaultValue}
        onChange={(selectedOption) => setTheme(selectedOption.value)}
      />
    </div>
  );
};

export default ThemeColor;
