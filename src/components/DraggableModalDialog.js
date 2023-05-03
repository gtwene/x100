import React from "react";
import { ModalDialog } from "react-bootstrap";
import Draggable from "react-draggable";

export default class DraggableModalDialog extends React.Component{
	render(){
	return <Draggable data-backdrop="false" handle=".modal-header"><ModalDialog {...this.props}/></Draggable>
	}
}