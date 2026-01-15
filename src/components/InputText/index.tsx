
import { InputText as PureInputText, type InputTextProps } from "primereact/inputtext";

interface Props extends InputTextProps {
    labelText?: string;
    helpText?: string;
    labelClassName?: string;
    useLabel?: boolean;
}

export const InputText = (props: Props) => {
    return (

        <div className="flex flex-column gap-2">
            {props.useLabel && <label className={props.labelClassName}>{props.labelText}</label>}
            <PureInputText id="username" aria-describedby="username-help" {...props} />
            {props.helpText &&
                (
                    <small id="username-help">
                        {props.helpText}
                    </small>
                )
            }
        </div>

    )
}