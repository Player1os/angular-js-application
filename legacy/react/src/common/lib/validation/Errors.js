import {BaseError} from 'make-error';

export default class Errors extends BaseError {

  constructor (errors = {}) {
    super();
    this.name = "errors";
    this.errors = errors;
  }

  add (error) {
    if (!this.errors.hasOwnProperty(error.params.prop)) {
      this.errors[error.params.prop] = [];
    }
    this.errors[error.params.prop].push(error);
  }

  getErrors () {
    let errors = [];
    const ids = Object.keys(this.errors);
    for (let id of ids) {
      errors = [...errors, ...this.errors[id]];
    }
    return errors;
  }

  getErrorsByUniqueType () {
    let errors = [];
    const ids = Object.keys(this.errors);
    for (let id of ids) {
      errors = [...errors, this.errors[id][0]];
    }
    return errors;
  }

  getByField (field) {
    if (this.errors.hasOwnProperty(field)) {
      return this.errors[field];
    }
    return [];
  }

  removeByField (field) {
    if (this.errors[field]) {
      delete this.errors[field];
    }
    return this;
  }

}
