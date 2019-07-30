import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

class EditorView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "",
      back: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addCard = () => {
    this.props.addCard(this.state.front, this.state.back);
    this.setState({
      front: "",
      back: ""
    });
  };

  deleteCard = event => {
    this.props.deleteCard(event.target.dataset.index);
  };

  render() {
    const rows = this.props.cards.map((card, i) => {
      return (
        <tr key={i}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
            <button data-index={i} onClick={this.deleteCard}>
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h1>Card Editor</h1>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Dlelte</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <br />
        <input
          onChange={this.handleChange}
          name="front"
          placeholder="Front of card"
          value={this.state.front}
        />
        <input
          onChange={this.handleChange}
          name="back"
          placeholder="Back of card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add Card</button>
        <hr />
        <button onClick={this.props.switchMode}>Change View</button>
      </div>
    );
  }
}

export default EditorView;
