import type EnumIcons from "../../icons/EnumIcons";


interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: typeof EnumIcons.Outlined[keyof typeof EnumIcons.Outlined] | typeof EnumIcons.Rounded[keyof typeof EnumIcons.Rounded];
}

/**
 * Ícone da lib (classes `drg-outlined-*` e `drg-rounded-*`).
 * O `className` recebido é somado às classes do ícone, sem substituí-las.
 */
export const Icon = ({ name, className, ...props }: IconProps) => {
  const classes = ["drg-icon", name, className].filter(Boolean).join(" ");
  return <i {...props} className={classes} />;
}
