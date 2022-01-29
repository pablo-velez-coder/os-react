import React, { ReactNode, useState } from 'react';

interface Props{
  children?: ReactNode[] | ReactNode;
}

export const Checkbox: React.FC<Props> = ({children}) =>{
  const [checked, setChecked] = useState(true);
  return React.Children.map(children, child => {
    console.log(child);
    if (typeof child.type === 'string'){
     /*  throw new Error('Element not allowed') */
     return null
    }
    const clone = React.cloneElement(child, {
      checked,
      setChecked
    });
    return clone
  })
}
