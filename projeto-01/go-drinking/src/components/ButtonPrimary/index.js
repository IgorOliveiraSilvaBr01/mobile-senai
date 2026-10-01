import {Pressable, Text} from 'react-native';
import { styles } from './style';

export const ButtonPrimary = ({ title }) => {
    return (
        <Pressable style={styles.btnPrimary}>
            <Text style={styles.textBtnPrimary}>{title}</Text>
        </Pressable>
    )
}