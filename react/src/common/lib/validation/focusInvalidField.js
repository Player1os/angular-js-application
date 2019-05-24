import ReactDOM from 'react-dom';
import ValidationError from './ValidationError';

export default function focusInvalidField(component, errorsObject) {
	const errors = errorsObject.getErrorsByUniqueType();
	for (let error of errors) {
		if (!(error instanceof ValidationError)) continue;
		if (!error.params.prop) continue;
		const node = ReactDOM.findDOMNode(component);
		if (!node) continue;
		const el = node.querySelector(`[name=${error.params.prop}]`);
		if (!el) continue;
		if (el.className.includes(" alert-highlight")) continue;
		el.className += " alert-highlight"
	}
}
