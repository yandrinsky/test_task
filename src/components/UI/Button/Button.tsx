import {FC} from "react";
import * as React from "react";
import css from "./style.module.css";

export enum ButtonVariant {
    primary = "primary",
    warning = "warning",
}

export enum ButtonSize {
    normal = "normal",
    small = "small",
}

interface ButtonProps {
    children: React.ReactNode,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    type?: ButtonVariant,
    size?: ButtonSize,
}

const Button:FC<ButtonProps> = ({type, size, children, onClick}) => {

    const cls = [
        css["Bnt"],
        type && type === ButtonVariant.warning ? css[ButtonVariant.warning] : css[ButtonVariant.primary],
        size && size === ButtonSize.small? css[ButtonSize.small] : css[ButtonSize.normal]
    ];

    return (
        <div>
            <button onClick={onClick} className={cls.join(" ")}>
                {children}
            </button>
        </div>
    );
};

export default Button;