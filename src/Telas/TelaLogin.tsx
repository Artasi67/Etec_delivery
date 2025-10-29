import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native"
import { NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useState } from "react";
import { View } from "react-native/types_generated/index";
import { TextInput } from "react-native/types_generated/index";
import { ActivityIndicator } from "react-native/types_generated/index";

type TelaLoginProps = NativeStackScreenProps<RootStackParamList, "Login">

const TelaLogin = ({navigation}: TelaLoginProps) => {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [carregando, setCarregando] = useState<boolean>(false);

    const Login = () => {
        setCarregando(true);
        setTimeout (() => {
            setCarregando(false);
            if(email.toLowerCase() == 'usuario@email.com' && senha == '1234'){
                navigation.replace('Home', {userName: 'Entregador'});
            }else {
                Alert.alert('Erro', 'E-mail ou Senha inválidos')
            }
        }, 1500)
    }

    return(
        <SafeAreaView style={estilos.container}>
            <View style={estilos.conteudo}>
                <Text style={estilos.titulo}>Bem-Vindo(a)</Text>
                <Text style={estilos.subtitulo}>Login</Text>

                <TextInput
                    style={estilos.input}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-addres"
                    autoCapitalize="none"
                />

                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry 
                    autoCapitalize="none"
                />

                <TouchableOpacity
                style={[estilos.botao, carregando && estilos.botaoDesabilitados]}
                onPress={Login}
                disabled={carregando}
                >
                    {carregando ? (
                        <ActivityIndicator size="small" color="#ffffff"/>
                    ) : (
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    )}

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f0f2f5",
        padding: 20,
    },
    titulo:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
        textAlign: "center"
    },
    subtitulo:{
        fontSize: 16,
        color: "#666666",
        marginBottom: 30,
        textAlign: "center"
    },
    input:{
        backgroundColor: "#007bff",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 15,
        borderWidth; 1,
        borderColor: "#dddddd"
    }
})

export default TelaLogin