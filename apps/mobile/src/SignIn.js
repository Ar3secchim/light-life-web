import { StatusBar } from 'expo-status-bar'
import { View, Text, Image, Button, TextInput } from 'react-native'

export function SignIn() {
  return (
    <View>
      <StatusBar style="light" />
      <Text>Bem vindo</Text>
      <Image source={require('assets/singIn.png')} alt="as" />

      <TextInput value="Email" />
      <TextInput value="Senha" />

      <Button color="#538177" title="Entrar" />
    </View>
  )
}
