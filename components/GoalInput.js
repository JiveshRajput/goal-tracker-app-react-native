import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native';



export default function GoalInput({ goalSubmitHandler, visible, setShowGoalsInputModal }) {
    const [goalInput, setGoalInput] = useState('');

    function goalInputHandler(enteredText) {
        setGoalInput(enteredText);
    }

    function onGoalSubmit() {
        goalSubmitHandler(goalInput);
        setGoalInput('');
        setShowGoalsInputModal(!visible);
    }

    return (
        <>
            <Modal visible={visible} animationType='slide'>
                <View style={styles.modalContainer}>
                    <View style={styles.imageContainer} >
                        <Image style={styles.image} source={require('../assets/images/focus.png')} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput value={goalInput} style={styles.inputField} placeholder='Enter your goal' onChangeText={goalInputHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color='#14213d' title='Add Goal' onPress={onGoalSubmit} />
                        </View>
                        <View style={styles.button}>
                            <Button style={styles.button} color='#14213d' title='Close' onPress={() => setShowGoalsInputModal(!visible)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: '#e5e5e5',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputField: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#fca311',
        color: '#14213d',
        borderRadius: 5,
        flex: 1,
        marginRight: 4
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 110,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: { width: 100, height: 100 },
});


