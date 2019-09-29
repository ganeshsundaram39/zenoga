import React from 'react';

import { StyleSheet, View, Text, Button, Alert, Modal } from 'react-native';
import { thoughts } from './thoughts';
import Thought from './Thought/Thought'

export default function SelectThought(props) {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.container}>
                <Text>Thoughts</Text>
                <FlatList
                    keyExtractor={item => item}
                    data={thoughts}
                    renderItem={itemData => (
                        <Thought
                            id={itemData.item}
                            {/* onDelete={removeGoalHandler} */}
                            title={itemData.item}
                        />
                    )}
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
    }
});
