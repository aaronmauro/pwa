import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {CardGroup,Button,Modal} from 'react-bootstrap';
import Jumbotron from '../Jumbotron/Jumbotron';
import Card from '../Card/Card';
import Localbase from 'localbase';
let db = new Localbase('db');
db.collection('users').add(
  {_key:"solo_user",
  id:1,
  name:null,
  mentor:false,}
);

class Home extends Component {

    state={
        show:false,
        fullName:null,
        showMentor:false,
        showMentee:false,
      }
      
      test = () => {
        console.log("doing stuff!")
        db.collection('users').delete(); //deletes database 'users'
      }
    

      update_user = (new_name) => {
        //this.setState({id_increment:this.state.id_increment+1})
        db.collection('users').doc({_key:"solo_user"}).update({name:new_name})
        console.log(this.state.id_increment);
        
      }
    
      switchStateHandler = () => {
        //console.log("Was clicked!")
        this.setState({show:!this.state.show})
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
      }
    
      handleInputChange = (event) => {
        this.setState({fullName:event.target.value})
      }

    render() {
      return (
        <div className="Home">
          {/* Jumbotron */}
        <Jumbotron 
        heading_one="Welcome to Mentor"
        lead="We connect talented students to professional mentors working in exciting companies."
        user={this.state.fullName}/>

        {/* Card Group */}
        <CardGroup className="CardGroup">
          <Card 
          title="I need a Mentor"
          text="I am a student, and I want to build experience with great people.">
          <Button onClick={this.switchStateHandler} variant="info">Let's Go!</Button>
          </Card>

          <Card
          title="I am a Mentor"
          text="I run an exciting organization, and I love onboarding new talent.">
          <Button onClick={this.switchStateHandler} variant="outline-info">Let's Start!</Button>  
          </Card>
          
          <Card title="I'm a dangerous thing" text="Do some stuff...like deleting the db data!">
          <Button onClick={this.test} variant="danger">Delete data</Button>
          </Card>
        </CardGroup>

        <p>{}</p>


        {/* Modal */}
        <Modal show={this.state.show}>
          <Modal.Header>
            What is your name?
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.update_user(this.state.fullName)}>
              <input onChange={this.handleInputChange} type="text" placeholder="Your name" name="fullName"></input>
              <br/>
              <br/>
              <Button onSubmit={this.update_user(this.state.fullName)}>Submit!</Button>
            </form>
            <p>Welcome to Mentor {this.state.fullName}!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.switchStateHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
    

        </div>
        
      )
    }
  } export default Home;