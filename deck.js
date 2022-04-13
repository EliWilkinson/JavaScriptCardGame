//good for making games other than war

const SUITS = ["♥", "♦", "♠", "♣"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
    constructor(cards= freshDeck()) {  // =freshDeck() gives us a limit on cards
        this.cards = cards
    }

get numberOFCards() {
    return this.cards.length
}
 
    shuffle() {
        //this.cards.sort((a,b) => Math.random()- .5)...this isn't random
        for(let i = this.numberOFCards-1; i>0; i--) {
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    //.flatmap combines the arrays of suits into one of 52
    //.map would return 4 arrays of 13 instead, harder to work with here
    return SUITS.flatMap(suit => {
        return VALUES.map(value=> {
            return new Card(suit, value) 
        })
    })
}