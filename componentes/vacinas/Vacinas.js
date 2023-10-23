import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from 'react-native';
import VacinaItem from './VacinaItem';

const Vacinas = () => {
  const [vacina, setVacina] = useState('');
  const [data, setData] = useState('');
  const [vacinasCadastradas, setVacinasCadastradas] = useState([]);

  const handleVacinaChange = (text) => {
    setVacina(text);
  };

  const handleDataChange = (text) => {
    setData(text);
  };

  const handleCadastro = () => {
    const novaVacina = { vacina, data };
    setVacinasCadastradas([...vacinasCadastradas, novaVacina]);
    setVacina('');
    setData('');
  };

  const handleExclusao = (index) => {
    const novasVacinas = [...vacinasCadastradas];
    novasVacinas.splice(index, 1);
    setVacinasCadastradas(novasVacinas);
  };

  return (
    <ImageBackground source={{ uri: "https://img.freepik.com/fotos-gratis/mao-segura-seringa-com-vacina-contra-sinal-ou-simbolo-de-icone-de-virus-em-fundo-azul-ilustracao-3d-desenhos-animados-de-saude-e-conceito-medico_56104-1648.jpg?w=1380&t=st=1685488665~exp=1685489265~hmac=91ced1d514a61cb0f3605d36bd3c1d9dbc5971efbf942c8ed3c8e4c093405a32" }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Aqui você cadastra as vacinas</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da vacina"
          value={vacina}
          onChangeText={handleVacinaChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a data da vacina"
          value={data}
          onChangeText={handleDataChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.paragrafo}>Vacinas cadastradas:</Text>
        <FlatList
          data={vacinasCadastradas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <VacinaItem
              vacina={item.vacina}
              data={item.data}
              onExclusao={() => handleExclusao(index)}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragrafo: {
    fontSize: 16,
    marginBottom: 10,
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
    width: 100,
    height: 80,
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

export default Vacinas;
