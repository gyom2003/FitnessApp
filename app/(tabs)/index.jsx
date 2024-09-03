import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import  { Cards } from '../../components/body/Cards';
import img1 from '../../assets/cards/img1.jpg';
import img2 from '../../assets/cards/img2.jpg';
import img3 from '../../assets/cards/img3.png';

const Index = () => {
  const titleRef = 'test title'
  const descriptionRef = 'test description'
  return (
    <View style={styles.container}>
      <Cards imageSource={img1} title={titleRef} description={descriptionRef}/>
      <Cards imageSource={img2} title={titleRef} description={descriptionRef}/>
      <Cards imageSource={img3} title={titleRef} description={descriptionRef}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});



export default Index