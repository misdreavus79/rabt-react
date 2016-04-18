var HelloWorld = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		isPerson: React.PropTypes.bool
	},
	getDefaultProps: function(){
		return {
			name: "Eli"
		}
	},
	getInitialState: function(){
		return {
			value: 1
		}
	},
	componentDidMount: function(){
		this.setState({
			value: this.state.value + 19
		});
	},
	render: function(){
		var greeting = "World";
		if(this.props.isPerson){
			greeting = (<Person name={this.props.name} />)
		}
		return ( //if the name property isn't here, (1)
			<section>
				<h1>Hello {greeting}!</h1>  
				<p>{this.state.value}</p>
			</section>
		)
	}
});

var Person = React.createClass({
	propTypes: {
		name: React.PropTypes.string
	},
	getDefaultProps: function(){
		return {
			name: "Eli"
		}
	},
	render: function(){
		return (
			<span>{this.props.name}</span>
		)
	}
});

ReactDOM.render(
	<HelloWorld isPerson={false} name="PPP" />, //it won't get passed through by putting it here (2)
	document.getElementById('pageContainer')
);