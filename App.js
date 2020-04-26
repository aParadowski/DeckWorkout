/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import { Text, Content, Button } from 'native-base';

import { WorkoutCard } from './src/components';
import deck from './utils/data/deck.json';
import shuffleDeck from './utils/data/deckhelper';

const shuffledDeck = shuffleDeck(deck.cards);
let remainingDeck = shuffledDeck;
 

const App: () => React$Node = () => {
  // this isn't quite working as it should, this intialize step
  // makes fetchNewCard pointless but it technically 'works'
  const [chosenCard, setCard] = useState(remainingDeck[0]);

  const fetchNewCard = () => {
    const chosenIndex = Math.floor(Math.random() * Math.floor(remainingDeck.length - 1));
    const newCard = remainingDeck[chosenIndex];
    setCard(newCard);
    remainingDeck.splice(chosenIndex, 1);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Content>
            <View style={{flex:0}}>
              <Button onPress={() => fetchNewCard()} style={{width: 180, marginLeft: 'auto', marginRight: 'auto'}}>
                <Text>Get Next Exercise</Text>
              </Button>
              <WorkoutCard exercise="Squats" key={chosenCard.img} type={chosenCard.img} values={chosenCard.values} />
              {/* {
                shuffledDeck.map(c => 
                  <WorkoutCard exercise="Squats" key={c.img} type={c.img} values={c.values} />
                )
              } */}
            </View>
          </Content> 
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
  body: {
    backgroundColor: 'white',
  }
});

export default App;
