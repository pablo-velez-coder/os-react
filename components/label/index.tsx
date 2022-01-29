import React, { ReactNode } from 'react';

interface Props{
  children?: ReactNode;
  checked?:boolean;
  setChecked?:(bool:boolean) => void;
}

export const Label:React.FC<Props> = ({children, checked, setChecked}) => <label
onClick={()=>setChecked(prev=> !prev)}
htmlFor="something">

  {children}</label>;
