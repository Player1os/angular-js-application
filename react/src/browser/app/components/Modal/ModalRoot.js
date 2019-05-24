/* @flow */

// Load app modules.
import {
	MODAL_GAME_CREATE,
	MODAL_CATEGORY_CREATE,
	MODAL_POSTBACK_CREATE,
	MODAL_POSTBACK_TEMPLATE_CREATE,
	hideModal,
} from '../../../../common/modal/actions.js';
import CreateNewGameModal from './components/CreateNewGameModal/CreateNewGameModal';
import CreateNewCategoryModal from './components/CreateNewCategoryModal/CreateNewCategoryModal';
import CreateNewPostbackModal from './components/CreateNewPostbackModal/CreateNewPostbackModal';
import CreateNewPostbackTemplateModal from './components/CreateNewPostbackTemplateModal/CreateNewPostbackTemplateModal';

// Load npm modules.
import React from 'react';
import ReactDOM from 'react-dom';
import {
	connect
} from 'react-redux';

const MODAL_COMPONENTS = {
	[MODAL_GAME_CREATE]: CreateNewGameModal,
	[MODAL_CATEGORY_CREATE]: CreateNewCategoryModal,
	[MODAL_POSTBACK_CREATE]: CreateNewPostbackModal,
	[MODAL_POSTBACK_TEMPLATE_CREATE]: CreateNewPostbackTemplateModal,
};

const ModalRoot = (props) => {
	const { modalTypes, hideModal, modals } = props;

	if (!modalTypes || modalTypes.length == 0) {
		return <span />;
	}

	const modalProps = modalTypes[modals - 1];
	modalProps.hidePopup = hideModal;
	let SpecificModal = MODAL_COMPONENTS[modalProps.type];

	return (
		<div className="ModalRoot">
			<div className="ModalRoot__Background"></div>
			<div className="ModalRoot__inner" id="ModalRoot__inner">
				<Wrapper hideModal={hideModal}>
					<SpecificModal {...modalProps} />
				</Wrapper>
			</div>
		</div>
	);
};

class Wrapper extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClickOutside(e) {
		var domNode = ReactDOM.findDOMNode(document.getElementById("ModalRoot__inner"));
		if ((domNode && domNode.contains(e.target))) {
			this.props.hideModal()
		}
	}

	render() {
		return (
			this.props.children
		);
	}
}

export default connect(
  state => ( state.modal), {
    hideModal
  }
)(ModalRoot)
