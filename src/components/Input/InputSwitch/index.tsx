import {
  InputSwitch as PureInputSwitch,
  type InputSwitchProps
} from "primereact/inputswitch";
import LabelInput from "../../Label/LabelInput";

interface ExtendedProps extends InputSwitchProps {
  title: string;
}

/**
 * @description
 * Componente InputSwitch baseado no PrimeReact.
 * Utilizado para alternar estados booleanos como
 * ativado/desativado ou ligado/desligado.
 *
 * Este componente adiciona um wrapper com label opcional,
 * exibido quando a propriedade `title` é informada.
 *
 * Encapsula o componente `InputSwitch` do PrimeReact,
 * mantendo total compatibilidade com suas props originais.
 */
export const InputSwitch = (props: ExtendedProps) => {
  return (
    <div className="drg-input-spacing">
      <LabelInput title={props.title} name={props.name} />
      <PureInputSwitch {...props} />
    </div>
  );
};
