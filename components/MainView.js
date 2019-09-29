import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import DriftWatching from './DriftWatching/DriftWatching'
export default function MainView() {
    const [isWatchingMode, setIsWatchingMode] = useState(false);

    const onWatchingClosing = () => {
        setIsWatchingMode(false);
    };
    return (
        <>
            <Text style={styles.title}>Zenoga</Text>
            <View style={styles.button}>
                <Button
                    title="Drift Watching"
                    onPress={() => setIsWatchingMode(true)}
                />
            </View>
            <DriftWatching
                visible={isWatchingMode}
                onClose={onWatchingClosing}
            />
            <View style={styles.button}>
                <Button
                    title="Stats"
                    style={styles.button}
                    onPress={() => Alert.alert('Stats Button pressed')}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        marginTop: 10
    }
});
