import React from 'react';

import { StyleSheet, View, Text, Button, Alert, Modal } from 'react-native';

import SelectThought from './SelectThought/SelectThought'
export default function DriftWatching(props) {
    const [isSelectThoughtMode, setIsSelectThoughtMode] = useState(false);

    const onSelectThoughtClosing = () => {
        setIsSelectThoughtMode(false);
    };
    return (

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button title="Close" color="red" onPress={props.onClose} />
                </View>
                <SelectThought
                    visible={isSelectThoughtMode}
                    onClose={onSelectThoughtClosing}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 50,
    },
    button: {

    }
});
