import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className=" flex-1 bg-zinc-900 items-center">
      <Text className="text-white text-4xl font-bold">Hellou World!!</Text>
      <StatusBar style="light" />
    </View>
  )
}
