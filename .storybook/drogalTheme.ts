import { create } from 'storybook/theming';
//@ts-ignore
import LogoDrogal from '../src/assets/Logo/logo-drogal.svg';
 
export default create({
  base: 'light',
  brandTitle: 'Drogal Design System',
  brandUrl: 'https://www.drogal.com.br',
  brandImage: LogoDrogal,
  brandTarget: '_blank',
  fontBase: '"Inter", sans-serif',
});