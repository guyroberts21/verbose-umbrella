// Classes required
// 1. Card (suit, rank, value)
// 2. Deck (cards, createDeck, shuffle)
// 3. Player (name, cards)
// 4. Board (players, main properties, startGame)

enum Suits {
	Diamonds = 'DIAMONDS',
	Hearts = 'HEARTS',
	Spades = 'SPADES',
	Clubs = 'CLUBS',
}

interface Card {
	suit: string
	rank: string
	value: number
}

interface IDeck {
	cards: Card[]
	createDeck(): void
	shuffleDeck(): void
}

interface IBoard {
	players: Player[]
	startGame(): void
}

class Deck implements IDeck {
	cards: Card[]

	constructor() {
		this.cards = []
	}

	// TODO: Create object/other data-structure to store the value of each card (in order to make the game interesting!)
	createDeck(): void {
		const suits = [Suits.Diamonds, Suits.Hearts, Suits.Spades, Suits.Clubs]
		const ranks = [
			'ace',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'jack',
			'queen',
			'king',
		]
		for (let rank of ranks) {
			let card: Card
			for (let suit of suits) {
				// Change here!
				card = { suit, rank, value: 1 }
				this.cards.push(card)
			}
		}
	}

	shuffleDeck(): void {
		const deck = this.cards

		let m = deck.length
		let t: Card
		let i: number

		while (m) {
			i = Math.floor(Math.random() * m--)

			t = deck[m]
			deck[m] = deck[i]
			deck[i] = t
		}

		// Update cards
		this.cards = deck
	}
}

class Player {
	readonly name: string
	cards: Card[]

	constructor(name) {
		this.name = name
		this.cards = []
	}
}

class Board implements IBoard {
	players: Player[]

	startGame() {
		console.log('Starting game!')
	}
}
