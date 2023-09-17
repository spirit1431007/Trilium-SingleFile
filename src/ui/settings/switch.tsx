import {createSignal, ParentProps} from "solid-js";


interface SwitchProps<T extends ((value: boolean) => void)> extends ParentProps {
    initial: boolean;
    onChange?: T;
}

export default function Switch<T extends ((value: boolean) => void)>(props: SwitchProps<T>) {
    const [isChecked, setChecked] = createSignal(props.initial); // eslint-disable-line solid/reactivity

    function toggle() {
        props.onChange?.(!isChecked());
        setChecked(!isChecked());
    }

    return <div class="switch-input" classList={{checked: isChecked()}}>
        <i class="bx" classList={{"bxs-toggle-left": !isChecked(), "bxs-toggle-right": isChecked()}} onClick={toggle} />
    </div>;
}