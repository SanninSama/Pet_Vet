import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VacinaItem = ({ vacina, data, onExclusao }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Vacina: {vacina}</Text>
      <Text style={styles.itemText}>Data: {data}</Text>
      <TouchableOpacity onPress={onExclusao}>
        <Text style={styles.excluirButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
  },
  excluirButton: {
    color: 'red',
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});

export default VacinaItem;
