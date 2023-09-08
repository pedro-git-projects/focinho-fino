import React from "react"
import { View, Button } from "react-native"

interface Props {
    isDisabled?: boolean
    size: "Big" | "Small"
    text: string
    onClick(): void
}

export function FancyButton(props: Props) {
    const [toggled, setToggled] = React.useState(false)
    return (
        <View style={{ alignItems: "center", paddingTop: 200 }}>
            <Button
                title={props.text}
                disabled={props.isDisabled || false}
                onPress={() => {
                    setToggled(!toggled)
                    props.onClick()
                }}
            />
        </View>
    )
}

