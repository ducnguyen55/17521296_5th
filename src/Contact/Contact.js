import React, {Component} from "react";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {submiited:false, submitResult:true, name:"", gmail: "", subject:""};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };

    Submit = () => {
        fetch('https://apiserver17521296.herokuapp.com/contact',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                name:this.state.name,
                gmail:this.state.gmail,
                message:this.state.message
            })
        }).then((res) => res.json())
            .then((json)=> {
                this.setState({submitted:true, submitResult:true});
            })
            .catch((error) => {
                this.setState({submitted:true, submitResult:false});
            });
    };

    render() {
        return (
            <div className="Contact">
                <h2 className="ContactTitle">Contact</h2>
                <form onClick={this.handleSubmit}>
                    <label htmlFor="fname">Tên :</label>
                    <input type="text" id="fname" name="name" onChange={this.changeHandler} placeholder="Your name.." required/><br></br>
                    <label htmlFor="gmail">Gmail :</label>
                    <input type="text" id="gmail" name="gmail" onChange={this.changeHandler} placeholder="Gmail.." required/>
                    <label>Message :</label><br></br>
                    <textarea id="message" name="message" onChange={this.changeHandler} placeholder="Write something.." required></textarea>
                    <input type="submit" value="Submit" id="Submit" onClick={this.Submit}/>
                </form>
            </div>
        );
    }
}
export default Contact;