import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewEventForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form">
          <div className="labels">
            <label htmlFor="event_title label">Event title</label>
            <label htmlFor="event_description label">Event Description</label>
            <label htmlFor="event_start label">Event Start Time</label>
            <label htmlFor="event_end label">Event End</label>
            <label htmlFor="event_type label">Event Type</label>
          </div>
          <div className="boxes">
          <Field name="event_title box" component="input" type="text"/>
          <Field name="event_description box" component="input" type="text"/>
          <Field name="event_start box" component="input" type="text"/>
          <Field name="event_end box" component="input" type="text"/>
          <Field name="event_type box" component="input" type="text"/>
          </div>
        </div>
        <button className="submit" type="submit">Submit</button>
      </form>
    )
  }
}

NewEventForm = reduxForm({
  form: 'newEvent' // a unique name for this form
})(NewEventForm);

export default NewEventForm;
