import styled from '@emotion/native';
import { TextInput } from 'react-native-paper';

export const TextInputStyled = styled(TextInput)`
    width: 90%;
    margin: auto
`;

TextInputStyled.defaultProps = {
    mode: 'outlined',
};
