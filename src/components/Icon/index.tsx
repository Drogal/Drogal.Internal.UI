import type EnumIcons from "../../icons/EnumIcons";


interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: typeof EnumIcons.Outlined[keyof typeof EnumIcons.Outlined] | typeof EnumIcons.Rounded[keyof typeof EnumIcons.Rounded];
}

const Icon = (props: IconProps) => {
  return <i className={`drg-icon ${props.name}`} {...props} />;
}
export default Icon;