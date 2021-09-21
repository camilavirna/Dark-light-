import React, { useContext } from "react";
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';
import { Container } from './styles';
import { shade } from "polished";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
           Camila Virna  

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={true}
                uncheckedIcon={true}
                height={20}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
        
    );
};

export default Header; 