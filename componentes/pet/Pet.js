import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { PetItem } from './PetItem';

export function Pet() {
  const [valores, setValores] = useState([]);
  const [novoValor, setNovoValor] = useState('');

  const handleInputChange = (valor) => {
    setNovoValor(valor);
  };

  const handleCadastro = () => {
    if (novoValor) {
      setValores([...valores, novoValor]);
      setNovoValor('');
    }
  };

  const handleExclusao = (index) => {
    const novosValores = [...valores];
    novosValores.splice(index, 1);
    setValores(novosValores);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/vector-gratis/coleccion-mascotas-diferentes_23-2148539909.jpg?w=1380&t=st=1685296070~exp=1685296670~hmac=d4b78471667e4febfbbd001f7bea5d447c9a5ceba39317fe2bf495873fe4ecd5' }}
        style={styles.imageBackground}
      >
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.paragrafo}>Digite o nome do seu pet abaixo e clique no botão para cadastrar</Text>

        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={novoValor}
          multiline
          placeholder="Ex: Katara"
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.espaço}></Text>
        <Text style={styles.paragrafo}>Pet cadastrado:</Text>

        {valores.map((valor, index) => (
          <PetItem
            key={index}
            pet={valor}
            onExclusao={() => handleExclusao(index)}
          />
        ))}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragrafo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  espaço: {
    fontSize: 10,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 80,
    width: 100,
    backgroundColor: '#841584',
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pet;
