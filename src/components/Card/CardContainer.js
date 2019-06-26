import React from 'react'
import Card from "./Card";
import {addComment, editDescription} from '../../redux/actions/cardActions'
import {connect} from "react-redux";

class CardContainer extends React.Component {
  
  render() {
    return <Card card={this.props.card}
                 addComment={this.props.addComment}
                 editDescription={this.props.editDescription}
    />
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment, card) => dispatch(addComment(comment, card)),
    editDescription: (description, card) => dispatch(editDescription(description, card))
  }
};

export default connect(undefined, mapDispatchToProps)(CardContainer)
