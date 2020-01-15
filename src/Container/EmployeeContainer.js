import React from 'react';
import EmployeeInfo from '../Components/EmployeeInfo';
import EmployeeSalary from '../Components/EmployeeSalary';

class EmployeeContainer extends React.Component{
    state = {
        Employee: [
            {
                name: 'ryan',
                salary: 22,
                position: 'jujunior engineer'
            }
        ],
        addEmployee:{
            name:'',
            salary: 0,
            position: ""
        }
    }

    nameOnChange = (event) =>{

        console.log("[EmployeeContainer nameChange]");

        const updatedState = this.state.addEmployee;
        updatedState.name = event.target.value;

        this.setState({addEmployee: updatedState});
    }

    salaryOnChange = (event) =>{

        console.log("[EmployeeContainer salaryOnChange]");

        const updatedState = this.state.addEmployee;
        updatedState.salary = event.target.value;

        this.setState({addEmployee: updatedState});
    }
    positionOnChange = (event) =>{

        console.log("[EmployeeContainer positionOnChange]");

        const updatedState = this.state.addEmployee;
        updatedState.position = event.target.value;

        this.setState({addEmployee: updatedState});
    }

    submitData = (props) => {
        console.log("[EmployeeContainer submitData]");
        const updateState = [...this.state.Employee, this.state.addEmployee];
        this.setState({Employee:updateState});
    }

    addSalary = (identifier) => {
        console.log("[EmployeeContainer addSalary]");

        const selectedEmployeeIndex = this.state.Employee.findIndex(element => {
            return element.name === identifier;
        });

        const updatedState = this.state.Employee;
        updatedState[selectedEmployeeIndex].salary = updatedState[selectedEmployeeIndex].salary + 1;

        this.setState({Employee:updatedState});
    }

    render(){
        return (
            <div>
                <EmployeeInfo 
                    Employee = {this.state.Employee}
                    nameOnChange = {this.nameOnChange}
                    salaryOnChange = {this.salaryOnChange}
                    positionOnChange = {this.positionOnChange}
                    submitData = {this.submitData}
                    addEmployee = {this.state.addEmployee}
                    />
                <EmployeeSalary 
                    Employee = {this.state.Employee}
                    addSalary = {(identifier) => this.addSalary(identifier)}
                    />
            </div>
        );
    }
}

export default EmployeeContainer;