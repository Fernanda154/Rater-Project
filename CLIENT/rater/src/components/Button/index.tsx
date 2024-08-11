import React from 'react';
import { CustonButton } from './style'; 
interface IProps {
    name: string;
    iconButtom?: React.ReactNode;
    color?: string;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ name, iconButtom, color, onClick }) => {
    return (
        <CustonButton onClick={onClick} style={{ backgroundColor: color }}>
            {name}
            {iconButtom}
        </CustonButton>
    );
};

export default Button;
