class DisplayMessages extends React.Component {
    // Change code below this line
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // Add handleChange() and submitMessage() methods here
    handleChange() {
        const newMessage = document.querySelector("input").value;
        this.setState (() => {
            return {
                input: newMessage
            };
        });
    }

    render() {
        const allMessages = this.state.messages.map(message => <li>{message}</li>);
        return (
        <div>
            <h2>Type in a new Message:</h2>
            { /* Render an input, button, and ul below this line*/ }
            <input onChange={this.handleChange} value={this.state.input} />
            <button></button>
            <ul>{allMessages}</ul>
            { /* Change code above this line */ }
        </div>
        );
    }
};