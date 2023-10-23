import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { AlimentacaoItem } from './AlimentacaoItem';

export function Alimentacao() {
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
        source={{ uri: 'https://img.freepik.com/fotos-premium/tigela-de-pata-de-gato-com-pegadas-de-comida-e-comida-espalhada-em-um-fundo-azul-nutricao-animal-cuidados-com-animais-humor_129479-2137.jpg?w=826' }}
        style={styles.imageBackground}
      >
        <Text style={styles.paragrafo}>Aqui você controla a alimentação do seu pet</Text>
        <Text style={styles.paragrafo}>Escreva abaixo os dados desejados e clique em adicionar</Text>

        <TextInput
          multiline
          onChangeText={handleInputChange}
          value={novoValor}
          style={styles.input}
          placeholder="Ex: Ração - Marca - Quantidade"
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <Text style={styles.espaço}></Text>
        <Text style={styles.paragrafo}>O que seu pet comeu foi:</Text>

        {valores.map((valor, index) => (
          <AlimentacaoItem
            key={index}
            valor={valor}
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
  paragrafo: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
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

export default Alimentacao;
