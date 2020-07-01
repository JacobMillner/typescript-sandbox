export enum Suit {
  Club,
  Diamond,
  Heart,
  Spades,
}

export enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
}

type Card = [Suit, CardNumber];

const createDeck = (): Card[] => {
  let deck: Card[] = [];
  for (let s = 0; s < Object.keys(Suit).length; s += 2) {
    // suits
    for (let n = 0; n < Object.keys(CardNumber).length; n += 2) {
      // card numbers
      deck.push([s / 2, n / 2]);
    }
  }
  return deck;
};

const shuffleDeck = (deck: Card[]): Card[] => {
  // use the  Fisher-Yates Algorithm!
  for (var i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

export class Dealer {
  cards: Card[] = [];
  constructor() {
    this.cards = createDeck();
  }

  dealHand = (numCards: number): Card[] => {
    if (numCards > this.getLength()) throw new Error('Not enough cars left!');
    if (numCards < 0) throw new Error('Requires positive number of cards!');
    return this.cards.splice(this.getLength() - numCards, numCards);
  };

  getLength = (): number => this.cards.length;

  readCard = (card: Card): string => {
    let [suit, cardNumber] = card;
    return ` ${CardNumber[cardNumber]} of ${Suit[suit]}`;
  };
}
