/**
 * Objeto const com todos os ícones disponíveis no sistema Drogal Outlined Icons.
 * Use este objeto para garantir type-safety ao usar ícones no componente Icon.
 * 
 * @example
 * import { IconsOutlinedEnum } from './icons/EnumIcons';
 * <Icon className={IconsOutlinedEnum.home} />
 */

import { IconsOutlinedEnum } from "./outlined/EnumOutlinedIcon";
import { IconsRoundedEnum } from "./rounded/EnumRoundedIcon";


const EnumIcons = { 
  Outlined: { ...IconsOutlinedEnum },
  Rounded: { ...IconsRoundedEnum }
};

export default EnumIcons