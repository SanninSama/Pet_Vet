import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function AlimentacaoItem({ valor, onExclusao }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{valor}</Text>
      <TouchableOpacity onPress={onExclusao}>
        <Text style={styles.excluirButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 8,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
  },
  excluirButton: {
    color: 'red',
    fontSize: 16,
    marginRight: 8,
  },
});
