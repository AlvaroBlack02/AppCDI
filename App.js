import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [DataNasc, setDataNasc] = useState('');
  const [DataAtual, setDataAtual] = useState('');

  function CalcularIdade(){

    const Idade = DataAtual - DataNasc;

    alert ("Você têm " +Idade+ " anos de idade");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo de Idade</Text>

      <TextInput
      style={styles.campoAtual}
      placeholder="Data Atual"
      keyboardType="numeric"
      onChangeText={setDataAtual}
      />

      <TextInput
      style={styles.campoNasc}
      placeholder="Data de Nascimento"
      keyboardType="numeric"
      onChangeText={setDataNasc}
      />
      
  
      <TouchableOpacity style={styles.botao} onPress={CalcularIdade}>
        <Text stlye={styles.textoBotao}> Descobrir idade </Text>
      </TouchableOpacity>
      
      
    </View>

  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcd2ee',
  },
  
titulo:{
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 30,
  marginTop: 40,
  marginBottom:40,
  },

campoNasc:{
  backgroundColor: '#fff',
  marginTop: 40,
  borderRadius: 30,
  padding: 10,
  fontSize: 15,
  color: '#000',
},

campoAtual:{
  backgroundColor: '#fff',
  marginTop: 40,
  borderRadius: 30,
  padding: 10,
  borderRadius: 10,
  color:'#000',
},

botao:{
  backgroundColor: '#6c7b8b',
  alignItems: 'center',
  margin: 15,
  padding: 30,
  alignItems: 'center',
  marginTop: 40,
  borderRadius: 30,
},

textoBotao:{
  color: '#000',
  fontSize: 25,
},

}); 