class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            messages: []
        }
    }
    // Add handleChange() and submitMessage() methods here

    render() {
        const allMessages = this.state.messages.map(message => <li>{message}</li>);
        return (
        <div>
            <h2>Type in a new Message:</h2>
            { /* Render an input, button, and ul below this line*/ }
            <input onChange={this.handleChange}>{this.input}</input>
            <button></button>
            <ul>{allMessages}</ul>
            { /* Change code above this line */ }
        </div>
        );
    }
};