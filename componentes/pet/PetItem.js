import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function PetItem({ pet, onExclusao }) {
  return (
    <View style={styles.respostaContainer}>
      <Text style={styles.respostaText}>{pet}</Text>
      <TouchableOpacity onPress={onExclusao}>
        <Text style={styles.excluirButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  respostaContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  respostaText: {
    fontSize: 16,
  },
  excluirButton: {
    color: 'red',
    fontSize: 16,
    marginRight: 8,
  },
});
