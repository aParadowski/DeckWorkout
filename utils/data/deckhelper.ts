import { IWorkoutCard } from '../../src/components';

const shuffleCards = function(originalDeck: IWorkoutCard[]): IWorkoutCard[] {
  const shuffledDeck = originalDeck;
  let currentIndex = shuffledDeck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shuffledDeck[currentIndex];
    shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
    shuffledDeck[randomIndex] = temporaryValue;
  }
  return shuffledDeck;
};


export default shuffleCards;