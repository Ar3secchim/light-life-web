import { StatusBar } from 'expo-status-bar'
import { Button, Text, View, Image } from 'react-native'
import SignIn from './SignIn'

export function App() {
  return (
    <View className="flex flex-1 bg-gray items-center justify-center p-10">
      <StatusBar style="light" />

      <Image
        className="w-max h-max"
        source={require('assets/singIn.png')}
        alt="as"
      />

      <Text className="text-white text-center text-xl font-extrabold m-4">
        FAÇA DA SUA MELHOR VERSÃO
      </Text>
      <Text className="text-white text-sm text-center mb-10 ">
        O passo a passo que você precisa para mudar seus hábitos e alcançar a
        alta performance pessoal e profissional.O passo a passo que você precisa
        para mudar seus hábitos e alcançar a alta performance pessoal e
        profissional.
      </Text>

      <Button onPress={SignIn} color="#538177" title="Comece aqui" />
    </View>
  )
}
