export function getFormErrors(formErrors, type) {
	let errors = [];
	if (formErrors != null) {
		{
			formErrors.getByField(type).map((error)=> {
				errors.push(error)
			})
		}
	}

	return errors;
}
