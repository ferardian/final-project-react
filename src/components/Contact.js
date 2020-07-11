import React from 'react';
import { Button, FormLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

// Uncontrolled Form 

class About extends React.Component{
  constructor(props){ 
    super(props); 
    this.onSubmit = this.onSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPesan = React.createRef();
  }
  
  onSubmit (event){
    
    event.preventDefault();
    event.stopPropagation()
    alert(`
    Nama : ${this.inputName.current.value}, 
    Email : ${this.inputEmail.current.value}, 
    Pesan : ${this.inputPesan.current.value}`);
  }
  
    render(){
      return (
        <Form onSubmit={this.onSubmit} style={{textAlign:"left", display:"flex", flexDirection:"column", maxWidth:"300px"}}>
            <label>
            Nama :</label>
            <input name="name" ref={this.inputName}/>
            
          <label>
            Email :  </label>
            <input name="email" ref={this.inputEmail}/>
          
          <label>
            Pesan :  </label>
          <textarea name="pesan" ref={this.inputPesan}/>
          <br/>
          <Button type="submit">SIMPAN</Button>
          
        </Form>
      )
    }
  }
  

export default About;
