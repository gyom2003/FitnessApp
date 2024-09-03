import { View, Text, Image, Linking, StyleSheet, Button } from 'react-native';
import React from 'react';

export const Cards = (props) => {
  return (
    <View style={styles.card}>
        <Image source={props.imageSource} style={styles.image}/>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.buttonContainer}>
          <Button 
          title='Learn More'
          color="lightsteelblue"
          onPress={() => Linking.openURL('https://google.com')}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'true', 
        
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 10, 
        marginTop: 20,
        alignItems: 'center',
        maxWidth: '45%', 
      },
      image: {
        width: 100,
        height: 120,
        borderRadius: 5,
        marginBottom: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
      },
      buttonContainer: {
        width: '100%',
        alignItems: 'center',
      },
  });
  