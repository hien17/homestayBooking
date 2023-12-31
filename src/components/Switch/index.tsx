import { FC, memo } from 'react';
import './index.scss';
import { shortenString } from 'utils/function/format';
import useToggle from 'hooks/useToggle';

interface SwitchProps {
    checked?: boolean;
    onChange?: (value: boolean) => void;
    checkedText: string;
    uncheckedText: string;
    checkedBg: string;
    uncheckedBg: string;
}

const Switch: FC<SwitchProps> = ({
    checked = false,
    onChange,
    checkedText,
    uncheckedText,
    checkedBg,
    uncheckedBg,
}) => {
    const [isChecked, toggleSwitch] = useToggle(checked);

    return (
        <label className={`switch ${isChecked ? 'checked' : ''}`}>
            <input
                title="My switch"
                type="checkbox"
                checked={isChecked}
                onClick={() => {
                    toggleSwitch();
                    if (onChange) {
                        onChange(!isChecked);
                    }
                }}
            />
            <span
                className="slider"
                style={{ backgroundColor: isChecked ? checkedBg : uncheckedBg }}
            ></span>

            <span className={`text ${isChecked ? '' : 'checked'}`}>
                {isChecked
                    ? shortenString(checkedText, 5)
                    : shortenString(uncheckedText, 5)}
            </span>
        </label>
    );
};

Switch.displayName = 'Switch';
export default memo(Switch);
