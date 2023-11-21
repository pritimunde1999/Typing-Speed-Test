import React from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utilities/themeJSON'; // Import from the correct path
import { useTheme } from '../Context/ThemeContext';

const ThemeColor = () => {
  
     const { setTheme, theme } = useTheme();
   
 

   function handleTheme(e){
      console.log(e);
      setTheme(e.value);
       localStorage.setItem('theme', JSON.stringify(e.value));
   }
  

  return (
    <div className='selectTheme'>
       <Select 
                    onChange={handleTheme}
                    options={themeOptions}
                    menuPlacement='top'
                    defaultValue={{ label: theme.label, value: theme }}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'white'

                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: theme.background,
                            borderColor: theme.textColor
                        }),
                        option: (baseStyles, state) => {
                            return {
                                ...baseStyles,
                                backgroundColor: state.isFocused ? theme.background : theme.textColor,
                                color: state.isFocused ? theme.textColor : theme.background,
                                cursor: 'pointer'
                            }


                        }

                    }}

                />
    </div>
  );
};

export default ThemeColor;
