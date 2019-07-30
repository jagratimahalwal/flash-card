import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";


class CradView extends React.Component{

  constructor(props){
    super(props);
    this.state={
      front: true,
      currentCard : 0
    }
  }

  handleCard = () => {
    this.setState(state =>({
      front: !state.front
    }))

  }

  nextCard = () => {
    this.setState(state => ({
      currentCard : state.currentCard + 1
    }))
  }

  render(){

    console.log(Object.keys(this.props.cards).length);
    
    let cardHeading='';
    let cardDisplay ='' ;

    try{
      if(this.state.front){
            cardDisplay = this.props.cards[this.state.currentCard].front;
            cardHeading = 'Front of the Card'
        
      }else {
        cardDisplay = this.props.cards[this.state.currentCard].back;
        cardHeading = 'Back of the Card'
      }
    }catch(e){
      cardDisplay='';
      cardHeading ='No More Cards';
    }
    return(
      <div>
        <h2>Viewer View</h2>
        <div class="row" >
          <div class="column">
            <div class="card" onClick={this.handleCard}>
              <h2>{cardHeading}</h2>
            <h3>{cardDisplay}</h3>
            </div>
          </div>
        
        </div>
        <button onClick={this.nextCard}>Next Card</button>
        <hr />
        <button onClick={this.props.switchMode}>Change View</button>
      </div>
    );
  }
}

export default CradView;
