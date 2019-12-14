
class BingoGame {
	initialState() {
		const header=  [
  		{ text: 'B', header: true },
  		{ text: 'I', header: true },
  		{ text: 'N', header: true },
  		{ text: 'G', header: true },
  		{ text: 'O', header: true}
  	];
		let values= [header];
		for (let i=0; i < 15; i++) {
		 	values.push([
		 		{ text:header[0].text + (1+i), header:false, selected: false, row:i+1, column:0 }, 
		 		{ text:header[1].text + (16+i), header:false, selected: false, row:i+1, column:1 }, 
		 		{ text:header[2].text + (31+i), header:false, selected: false, row:i+1, column:2 }, 
		 		{ text:header[3].text + (46+i), header:false, selected: false, row:i+1, column:3 }, 
		 		{ text:header[4].text + (61+i), header:false, selected: false, row:i+1, column:4 }]);
		}

		return { current: '', previous: '', values: values };
	}

	constructor(renderAppCallback) {
    this.renderAppCallback = renderAppCallback;
    Object.assign(this, this.initialState());
	}

  resetState() {
		this.setState(this.initialState());
	}

	setBoxToggled(props) {
		gameState.values[props.row][props.column].selected = !gameState.values[props.row][props.column].selected;
		this.setState({current: props.text, previous: gameState.current});
	}

  setState(newState) {
  	Object.assign(this, newState);
  	this.renderAppCallback();
  }
}