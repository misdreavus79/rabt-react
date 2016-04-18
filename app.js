"use strict";

var HelloWorld = React.createClass({
	displayName: "HelloWorld",

	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			name: "Eli"
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: 1
		};
	},
	componentDidMount: function componentDidMount() {
		this.setState({
			value: this.state.value + 19
		});
	},
	render: function render() {
		var greeting = "World";
		if (this.props.isPerson) {
			greeting = React.createElement(Person, { name: this.props.name });
		}
		return (//if the name property isn't here, (1)
			React.createElement(
				"section",
				null,
				React.createElement(
					"h1",
					null,
					"Hello ",
					greeting,
					"!"
				),
				React.createElement(
					"p",
					null,
					this.state.value
				)
			)
		);
	}
});

var Person = React.createClass({
	displayName: "Person",

	propTypes: {
		name: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			name: "Eli"
		};
	},
	render: function render() {
		return React.createElement(
			"span",
			null,
			this.props.name
		);
	}
});

ReactDOM.render(React.createElement(HelloWorld, { isPerson: false, name: "PPP" }), //it won't get passed through by putting it here (2)
document.getElementById('pageContainer'));
