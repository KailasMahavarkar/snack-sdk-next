const defaults = {
	codeChangesDelay: 500,
	files: {
		"App.js": {
			type: "CODE",
			contents: `
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Button } from "@oxygen/native";

console.log("reanimted --> ", Button);

export default function App() {
	const width = useSharedValue(100);
	const handlePress = () => {
		width.value += 50;
	};
	return (
		<View style={styles.container}>
			<Animated.View style={Object.assign(Object.assign({}, styles.box), { width })} />
			<Button onPress={handlePress} title="Click me" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	box: {
		height: 100,
		backgroundColor: "#b58df1",
		borderRadius: 20,
		marginVertical: 64,
	},
});

      `,
		},
		"assets/image.png": {
			type: "ASSET",
			contents:
				"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f7d32b1787708aba49b3586082d327b",
		},
		"assets/audio.mp3": {
			type: "ASSET",
			contents:
				"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c9c43b458d6daa9771a7287cae9f5b47",
		},
		"assets/fonts/Inter-Black.otf": {
			type: "ASSET",
			contents:
				"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/44b1541a96341780b29112665c66ac67",
		},
	},
	dependencies: {
		"expo-av": { version: "*" },
		"expo-font": { version: "*" },
		"expo-app-loading": { version: "*" },
		"react-native-reanimated": { version: "*" },
		"react-native-gesture-handler": { version: "*" },
		"@oxygen/native": { version: "*" },
	},
};

export default defaults;
