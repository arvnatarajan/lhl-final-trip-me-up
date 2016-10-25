import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewEventForm extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="event_title">Event title</label>
          <Field name="event_title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="event_description">Event Description</label>
          <Field name="event_description" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="event_start">Event Start Time</label>
          <Field name="event_start" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="event_end">Event End</label>
          <Field name="end_time" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

NewEventForm = reduxForm({
  form: 'newEvent' // a unique name for this form
})(NewEventForm);

export default NewEventForm;
