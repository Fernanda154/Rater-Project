import React from 'react';
import { CustonButton } from './style'; 
interface IProps {
    name: string;
    id?: string;
    iconButtom?: React.ReactNode;
    color?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ name, iconButtom, id, color, style, onClick }) => {
    return (
        <CustonButton id={id} onClick={onClick} style={{ backgroundColor: color, ...style }} >
            {name}
            {iconButtom}
        </CustonButton>
    );
};

export default Button;
