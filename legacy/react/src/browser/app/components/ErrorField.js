import React, { PropTypes } from 'react';

export default class ErrorField extends React.Component {

  static propTypes = {
    error: PropTypes.object
  };

  render() {
    const { errors } = this.props;
    if (!errors || errors.length == 0) return null;
    let errorsView = [];
    for (let error of errors) {
      const message = messages[error.name];
      errorsView.push(
        <p className="error-message">
          {message ?
            <FormattedMessage {...message} values={error.params}/>
            :
            error.toString()
          }
        </p>
      )
    }
    return (
      <div className={'input-alert'}>
        <div className={'ic ic-error'}></div>
        <div className={'input-alert-popup'}>
          {errorsView}
        </div>
      </div>
    );
  }
}
