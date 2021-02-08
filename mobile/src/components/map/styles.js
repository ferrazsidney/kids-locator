import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

import {StyleSheet} from 'react-native';

export const LocationBox = styled.View`
    background: #FFF;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,
        
        android: css`
            margin-top: 10px;
            margin-left: 10px;
        `,
    })}
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ ios: 60, android: 40 })}px;
    left: 20px;
`;

export default StyleSheet.create({
    alignCabecalho: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },


});

export const Menu = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ ios: 60, android: 40 })}px;
    left: 10px;
`;