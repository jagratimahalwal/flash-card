import React from "react";
import ReactDOM from "react-dom";
import CardView from "./components/CardView";
import EditorView from "./components/EditorView";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: false,
      cards: [{ front: 1, back: 1 }, { front: 2, back: 2 }]
    };
  }
  render() {
    if (this.state.editor) {
      return (
        <EditorView
          cards={this.state.cards}
          switchMode={this.switchMode}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
        />
      );
    } else {
      return <CardView 
          cards={this.state.cards} 
          switchMode={this.switchMode} />;
    }
  }

  switchMode = () => {
    this.setState(state => ({
      editor: !state.editor
    }));
  };

  addCard = (front, back) => {
    this.setState(state => ({
      cards: [...state.cards, { front: front, back: back }]
    }));
  };

  deleteCard = index => {
    this.setState(state => {
      const cards = [...state.cards];
      cards.splice(index, 1);
      return { cards };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
