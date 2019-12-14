class GameCard {
  constructor(colorLabel, rgb, fontColor) {
    this.colorLabel = colorLabel;
    this.rgb = rgb;
    this.fontColor = fontColor;
  }

  cardStyle(currentStyle) {
    return Object.assign(currentStyle, {
          backgroundColor: "rgb(" + this.rgb.toString() + ")",
          color: this.fontColor || 'black',
        });
  }
}

class CurrentGame {
  constructor(renderAppCallback) {
    this.renderAppCallback = renderAppCallback;
    Object.assign(this, games[0]);
  }

  setCurrentlyPlayingState(event) {
    const newGame = games.find(e=> e.name === event.target.value)
    Object.assign(this, newGame)
    this.renderAppCallback();
  }
}

const games = [
  { 
    name: '-- select a game --',
    card: new GameCard('', [255,255,255], 'black'),
    rules: '', 
    selected: [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false]]
  },
	{ 
		name: 'Regular Bingo',
		card: new GameCard('Blue', [0,0,255], 'white'),
		rules: 'Any five in a row, can be horizontal, vertical, or diagonally.', 
		selected: [
			[false, false, false, false, true],
			[false, false, false, true, false],
			[false, false, true, false, false],
			[false, true, false, false, false],
			[true, false, false, false, false]]
	},
	{ 
		name: 'Horizontal Bingo',
    card: new GameCard('Orange', [255,136,0], 'white'),
		rules: 'Any five in a row horizontally.', 
		selected: [
			[false, false, false, false, false],
			[true, true, true, true, true],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false]]
	},
	{ 
		name: 'Four Corners',
    card: new GameCard('Green', [0,255,0], 'black'),
		rules: 'Just the 4 Corners', 
		selected: [
			[true, false, false, false, true],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[false, false, false, false, false],
			[true, false, false, false, true]]
	},
	{ 
		name: 'Railroad Tracks',
    card: new GameCard('Yellow', [255,255,0], 'black'),
		rules: '2 Vertical lines in columns 2 and 4', 
		selected: [
			[false, true, false, true, false],
			[false, true, false, true, false],
			[false, true, false, true, false],
			[false, true, false, true, false],
			[false, true, false, true, false]]
	},
	{ 
		name: 'Letter "T"',
    card: new GameCard('Pink', [255,136,255], 'black'),
		rules: 'Makes the letter "T" from row 1 and column 3.', 
		selected: [
			[true, true, true, true, true],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false],
			[false, false, true, false, false]]
	},
	{ 
		name: 'Straight and 4 Corners',
    card: new GameCard('Grey', [102,102,102], 'white'),
		rules: '4 Corners and any 5 in a row, can be horizontally, vertically, or diagonally.', 
		selected: [
			[true, false, false, false, true],
			[false, true, false, false, false],
			[false, false, true, false, false],
			[false, false, false, true, false],
			[true, false, false, false, true]]
	},
	{ 
		name: 'Bow Tie',
    card: new GameCard('Army Green', [0,136,0], 'white'),
		rules: 'Looks like a bow tie on a diagonal.', 
		selected: [
			[true, true, false, false, false],
			[true, true, false, false, false],
			[false, false, true, false, false],
			[false, false, false, true, true],
			[false, false, false, true, true]]
	},
	{ 
		name: 'Letter "S"',
    card: new GameCard('Brown', [68,34,0], 'white'),
		rules: 'Makes the letter "S".', 
		selected: [
			[true, true, true, true, true],
			[true, false, false, false, false],
			[true, true, true, true, true],
			[false, false, false, false, true],
			[true, true, true, true, true]]
	},
	{ 
		name: 'Small Frame',
    card: new GameCard('Red', [255,0,0], 'black'),
		rules: 'A small frame.', 
		selected: [
			[false, false, false, false, false],
			[false, true, true, true, false],
			[false, true, false, true, false],
			[false, true, true, true, false],
			[false, false, false, false, false]]
	},
	{ 
		name: 'Blackout',
    card: new GameCard('Purple',  [136,68,204], 'white'),
		rules: 'All 25 spaces covered.', 
		selected: [
			[true, true, true, true, true],
			[true, true, true, true, true],
			[true, true, true, true, true],
			[true, true, true, true, true],
			[true, true, true, true, true]]
	}
]