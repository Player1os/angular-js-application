import { EMPTY_ACTION } from '../app/actions';
export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export const MODAL_GAME_CREATE = 'MODAL_GAME_CREATE';
export const MODAL_CATEGORY_CREATE = 'MODAL_CATEGORY_CREATE';
export const MODAL_POSTBACK_CREATE = 'MODAL_POSTBACK_CREATE';
export const MODAL_POSTBACK_TEMPLATE_CREATE = 'MODAL_POSTBACK_TEMPLATE_CREATE';




export const openModalCreateGame = (step) => {
	return ({ getState }) => {
		if (!step) {
			step = 1
		}

		let modalTypes = getState().modal.modalTypes;
		createModal(modalTypes, {
			type: MODAL_GAME_CREATE,
			modalProps: {
				step
			}
		});

		return {
			type: MODAL_SHOW,
			payload: {
				modalTypes: modalTypes
			}
		}
	}
};

export const openModalCreateCategory = (step) => {
	return ({ getState }) => {
		if (!step) {
			step = 1
		}

		let modalTypes = getState().modal.modalTypes;
		createModal(modalTypes, {
			type: MODAL_CATEGORY_CREATE,
			modalProps: {
				step
			}
		});

		return {
			type: MODAL_SHOW,
			payload: {
				modalTypes: modalTypes
			}
		}
	}
};

export const openModalCreatePostback = (step) => {
	return ({ getState }) => {
		if (!step) {
			step = 1
		}

		let modalTypes = getState().modal.modalTypes;
		createModal(modalTypes, {
			type: MODAL_POSTBACK_CREATE,
			modalProps: {
				step
			}
		});

		return {
			type: MODAL_SHOW,
			payload: {
				modalTypes: modalTypes
			}
		}
	}
};

export const openModalCreatePostbackTemplate = (step) => {
	return ({ getState }) => {
		if (!step) {
			step = 1
		}

		let modalTypes = getState().modal.modalTypes;
		createModal(modalTypes, {
			type: MODAL_POSTBACK_TEMPLATE_CREATE,
			modalProps: {
				step
			}
		});

		return {
			type: MODAL_SHOW,
			payload: {
				modalTypes: modalTypes
			}
		}
	}
};

export const hideModal = () => {
	return ({ getState })=> {
		let modalTypes = getState().modal.modalTypes;
		const currentModal = modalTypes[modalTypes.length - 1].type;

		modalTypes.pop();
		return {
			type: MODAL_HIDE,
			payload: {
				modalTypes: modalTypes
			}
		}
	}
};

function createModal(modals, modalDefinition) {
	if (modals.findIndex(modal => modal.type == modalDefinition.type) == -1) {
		modals.push(modalDefinition);
	}
	return modals;
}
