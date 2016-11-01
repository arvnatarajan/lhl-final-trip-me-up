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
        <div className="new-trip-form">
          <div className="labels">
            <label className="trip-title label">Trip title</label>
            <label htmlFor="trip_start" className="trip-start label">Trip Start</label>
            <label htmlFor="trip_end" className="trip-end label">Trip End</label>
            <label htmlFor="start_location" className="start_location label">Start Location</label>
            <label htmlFor="destination" className="destination label">Destination</label>
          </div>
          <div className="boxes">
            <Field name="trip_title" className="trip-title box" component="input" type="text"/>
            <Field name="trip_start" className="trip-start box" component="input" type="text"/>
            <Field name="trip_end" className="trip-end box" component="input" type="text"/>
            <Field name="start_location" className="start_location box" component="input" type="text"/>
            <Field name="destination" className="destination box" component="input" type="text"/>
          </div>
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
