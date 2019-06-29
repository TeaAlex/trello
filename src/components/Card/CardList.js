import React from 'react'
import CardPreview from "./CardPreview";
import { BrowserRouter as Router } from "react-router-dom";
import AddBtn from "./AddBtn";

const CardList = (props) => {
  const { name, cards } = props.list;
  return <div className="flex flex-col p-6 mr-2 bg-gray-200 rounded">
          <p className="font-bold uppercase text-blue-700 mb-4">{name}</p>
          <Router>
            {
              cards.map( (card, index) => <CardPreview key={index} card={card} list={props.list}/>)
            }
          </Router>
          <AddBtn list={props.list}/>
    </div>
};

export default CardList