const initialState = {
	modalTypes: [],
	modals: 0
};
export default function modal(state = initialState, action) {
	switch (action.type) {
		case 'MODAL_SHOW':
		{
			return {
				modalTypes: action.payload.modalTypes,
				modals: action.payload.modalTypes.length
			};
		}
		case 'MODAL_HIDE':
		{
			return {
				modalTypes: action.payload.modalTypes,
				modals: action.payload.modalTypes.length
			};
		}
		default:
			return state
	}
}
