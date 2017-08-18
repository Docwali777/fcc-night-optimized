import React, {Component} from 'react'
import {Grid, Col, Row, Button, Well, Panel} from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../../redux_actions/yelpSearches'

class Listing extends Component {
  constructor(props) {
    super(props)
      this.state = {
        likes: 0,
        isGoing: false
      }
  }
componentDidMount(){
this.setGoingStatus()
}
setGoingStatus =() =>{
this.props.going.map(i =>{
if(i.id == this.props.id){
this.setState({likes: i.isGoing, isGoing: !this.state.isGoing})
}
})
}

isGoing = () =>{
this.setState({likes: this.state.likes + 1})
this.props.isGoing(this.props.id)
}
isNotGoing = () =>{
this.setState({likes: this.state.likes - 1})
this.props.isNotGoing(this.props.id)
}

ifLoggedin =() =>{
if(this.props.user !== ""){
return(
<div>
  <Button disabled={this.state.likes == 0 ? true: false} onClick={()=>this.isNotGoing()} bsStyle='danger' bsSize='xsmall'> - </Button>
  <Button bsStyle='default' bsSize='small'>{this.state.likes}</Button>
  <Button onClick={()=>this.isGoing()} bsStyle='success' bsSize='xsmall'> + </Button>
</div>
)
}
return   <Button bsStyle='default' bsSize='small'>{this.state.likes}</Button>
}


  render() {

    return (

      <Grid>
          <Well>
        <Row className="show-grid">
          <Panel>

        <div className='text-center'>
          <Col >
              How May People Are Going?  &nbsp;
{this.ifLoggedin()}
          </Col>
        </div>

            </Panel>
          <Col xs={6} md={3}>

            <img style={{
              height: 100,
              width: 100
            }} src={this.props.image_url}/>


          </Col>

          <Col xs={6} md={9}>
          <strong>  {this.props.name}</strong> &nbsp; {this.props.location.address1} &nbsp; {this.props.location.city},{this.props.location.state} &nbsp; {this.props.location.zip_code}

          </Col>

        </Row>
          </Well>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    going: state.going,
    business: state.business,
    user: state.user
  }
}
export default connect(mapStateToProps, actions)(Listing)
