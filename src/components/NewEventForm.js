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
            <label className="label" htmlFor="event_title">Event title</label>
            <label className="label" htmlFor="event_description">Event Description</label>
            <label className="label" htmlFor="event_start">Event Start Time</label>
            <label className="label" htmlFor="event_end">Event End</label>
            <label className="label" htmlFor="event_type">Event Type</label>
          </div>
          <div className="boxes">
            <Field className="box" name="event_title" component="input" type="text"/>
            <Field className="box" name="event_description" component="input" type="text"/>
            <Field className="box" name="event_start" component="input" type="text"/>
            <Field className="box" name="event_end" component="input" type="text"/>
            <Field className="box" name="event_type" component="input" type="text"/>
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
