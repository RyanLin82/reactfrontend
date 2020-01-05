import React from 'react';
// import axios from 'axios';
import axios from '../axios';

class Employee extends React.Component{
    state = {
        Employee:[
            {
                name : "Stefan",
                ID : "1250",
                team : "icct"
            }
        ],
        formData : {
            name : "",
            ID : "",
            team : ""
        }
    }
    submitForm = () => {
        console.log(this.state.formData);

        axios.post("/employee.json", this.state.formData)
        .then(respone => console.log("[submitForm response]", respone))
        .catch(error => console.log(error));

        let emptyformData = {
            name : "",
            ID : "",
            team : ""
        };
        this.setState({formData:emptyformData});
        console.log("[submitForm] finish");
    }
    
    getData = () => {
        axios.get("/employee.json")
        .then(res => {
            // alert("test");
            console.log(res);
            let addEmployee = this.state.Employee;
            let data = res.data;
            console.log("[getSuccess]", data);

            for(let employee in data){
                addEmployee = [...addEmployee, data[employee]];
            }

            console.log("[getSuccess]", addEmployee);
            this.setState({Employee:addEmployee});
        })
    }

    nameOnChange = (event) => {
        let name = event.target.value;
        const formData = this.state.formData;
        formData.name = name;
        this.setState({formData:formData});
    }

    IDOnChange = (event) => {
        let ID = event.target.value;
        const formData = this.state.formData;
        formData.ID = ID;
        this.setState({formData:formData});
    }

    teamOnChange = (event) => {
        let team = event.target.value;
        const formData = this.state.formData;
        formData.team = team;
        this.setState({formData:formData});
    }
    
    render(){
        let empleyeeUI = (
            this.state.Employee.map(employee => {
                return (
                    <div key = {employee.ID}>
                        <p>name: {employee.name}</p>
                        <p>name: {employee.ID}</p>
                        <p>name: {employee.team}</p>
                    </div>
                )
            })
        );
        return(
            <div>
                <form>
                    <label>
                        name
                    </label>
                    <input type = "text" 
                        value = {this.state.formData.name} 
                        onChange = {(event) => {this.nameOnChange(event)}}/>
                    <label>
                        ID
                    </label>
                    <input type = "text" value = {this.state.formData.ID} onChange = {(event) => {this.IDOnChange(event)}} />
                    <label>
                        team
                    </label>
                    <input type = "text" value = {this.state.formData.team} onChange = {(event) => {this.teamOnChange(event)}} />
                    <input type = "button" onClick = {this.submitForm} value = "save"/>
                </form>
                <button onClick= {this.getData}> get </button>
                {empleyeeUI}
                
            </div>
        );
    }
}

export default Employee;