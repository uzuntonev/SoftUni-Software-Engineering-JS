const result = (function () {
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };
    const faces = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face;
        }
        set face(value){
            if(!faces.includes(value)){
                throw new Error('Error face value!');
            }
            this._face = value;
        }

        get suit(){
            return this._suit;
        }
        set suit(value){
            if(!Object.values(Suits).includes(value)){
                throw new Error('Error suit value');
            }
            this._suit = value;
        }
    }
    return {
        Card,
        Suits,
    };
}());


const Card = result.Card;
const Suits = result.Suits;

try {
    const card = new Card('Q', Suits.CLUBS);
    card.face = 'A';
    card.suit = Suits.DIAMONDS;
    const card2 = new Card('1', Suits.DIAMONDS);
} catch (error) {
    console.log(error);
}





























// const result = (function () {
//     const card = {
//         faces: [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ],
//         suits: {
//             CLUBS: '\u2663',
//             DIAMONDS: '\u2666',
//             HEARTS: '\u2665',
//             SPADES: '\u2660',
//         },

//     };

//     class Card {
//         constructor(face, suit) {
//             this.face = face;
//             this.suit = suit;
//         }

//         get face() {
//             return this._face;
//         }

//         set face(face) {
//             if (!card.faces.includes(face)) {
//                 throw new Error('Invalid face');
//             }
//             this._face = face;
//         }

//         get suit() {
//             return this._suit;
//         }

//         set suit(suit) {
//             if (!Object.values(card.suits).some(x => x === suit)) {
//                 throw new Error('Invalid suit');
//             }
//             this._suit = suit;
//         }
//     }

//     return {
//         Suits: card.suits,
//         Card: Card,
//     };
// }());

// const Card = result.Card;
// const Suits = result.Suits;

// try {
//     const card = new Card('Q', Suits.CLUBS);
//     card.face = 'A';
//     card.suit = Suits.DIAMONDS;
//     console.log(card); 
//     // const card2 = new Card('1', Suits.DIAMONDS);
// } catch (error) {
//     console.log(error);
// }
