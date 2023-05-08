import React from 'react'
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function GoalItem({ itemData, deleteGoalHandler, visible }) {
    return (
        <>
            <View style={styles.goalListTitleContainer}>
                <Pressable style={({ pressed }) => pressed && styles.pressedItem} android_ripple={{ color: '#efefef' }} onPress={() => deleteGoalHandler(itemData.item.id)} >
                    <Text style={styles.goalListTitle}>{itemData.index + 1}. {itemData.item.goal}</Text>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    goalListTitleContainer: {
        borderRadius: 5,
        marginBottom: 4,
        backgroundColor: '#ffb703',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalListTitle: {
        color: '#023047',
        padding: 10,
    }
});


