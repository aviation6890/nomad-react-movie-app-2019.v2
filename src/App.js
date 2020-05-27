import React from 'react';
class App extends React.Component {
	state = {
		count: 0
	};

	add = () => {
		this.setState((current) => ({ count: current.count + 1 }));
	};

	minus = () => {
		this.setState((current) => ({ count: current.count - 1 }));
	};

	componentDidMount() {
		console.log('component rendered');
	}

	componentDidUpdate() {
		console.log('component update');
	}

	componentWillUnmount() {
		console.log('Good Bye');
	}

	render() {
		console.log('im render');
		return (
			<div>
				<h1>The Number is : {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		);
	}
}

export default App;
