import React, { PropTypes, Component } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';

class NewTripForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="trip_title">Trip title</label>
          <Field name="trip_title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="trip_start">Trip Start</label>
          <Field name="trip_start" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="trip_end">Trip End</label>
          <Field name="trip_end" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="start_location">Start Location</label>
          <Field name="start_location" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="destination">Destination</label>
          <Field name="destination" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

NewTripForm = reduxForm({
  form: 'newTrip' // a unique name for this form
})(NewTripForm);


NewTripForm.propTypes = {
  user: PropTypes.array.isRequired
}

export default NewTripForm;
