import { View, Text, Platform } from 'react-native'
import React from 'react'

// Platform component are usinf to find out which OS device you are using
const PlatformExample = () => {
    return (
        <View>
            <Text>Platform Example</Text>
            <Text>
                {Platform.OS === 'ios' ? 'Welcome to IOS User!' : 'Welcome to Andriod User!'}
            </Text>
            <Text>Second Exmaple</Text>
            <Text>{
                Platform.select({
                    ios: 'Your are using IOS Device!',
                    android: "Your are using android Device",
                    macos: "Your are using MacOS Device"
                })}</Text>
        </View>
    )
}

export default PlatformExample