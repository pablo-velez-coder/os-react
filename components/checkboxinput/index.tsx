
interface Props {
  checked?:boolean;
  setChecked?:(bool:boolean) => void
}
export const CheckboxInput:React.FC<Props> = ({checked,setChecked}) => <input
checked={checked}
onChange={()=> setChecked(prev=>!prev)}
type="checkbox" />;
