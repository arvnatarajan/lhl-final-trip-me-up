import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import Toggle from 'material-ui/Toggle';

export default class CardExampleWithAvatar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
     this.setState({expanded: expanded});
   };

   handleToggle = (event, toggle) => {
     this.setState({expanded: toggle});
   };

   handleExpand = () => {
     this.setState({expanded: true});
   };

   handleReduce = () => {
     this.setState({expanded: false});
   };

   render() {
     return (
      <div>
        <Badge badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12}}>
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
            <CardHeader
             title="URL Avatar"
             subtitle="Subtitle"
             avatar="images/ok-128.jpg"
             actAsExpander={true}
             showExpandableButton={true}
            />
            <CardMedia
             expandable={true}
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
             <img src="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
            <CardText expandable={true}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
             Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
             Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardText>
              <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="This toggle controls the expanded state of the component."
              />
            </CardText>
            <CardActions>
             <FlatButton label="Expand" onTouchTap={this.handleToggle} />
            </CardActions>
            </Card>
        </Badge>
      </div>
    );
  }
}
