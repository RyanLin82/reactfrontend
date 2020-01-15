import React from 'react';

const employeeInfo = (props) => {
    console.log("[EmployeeInfo render]", props);
    let info = (
        props.Employee.map( employee => {
            console.log(employee);
            return (
                <div key = {employee.name}>
                    <p>{employee.name}</p>
                    <p>{employee.salary}</p>
                    <p>{employee.position}</p>
                </div>
            )
        })
    );
    console.log(info);
    return (
        <div>
            <input type = "text" value = {props.addEmployee.name} onChange = {(e) => props.nameOnChange(e)} />
            <input type = "text" value = {props.addEmployee.salary} onChange = {(e) => props.salaryOnChange(e)} />
            <input type = "text" value = {props.addEmployee.position} onChange = {(e) => props.positionOnChange(e)} />
            <button onClick = {props.submitData}>submit</button>
            {info}
        </div>
    ) 
    
}

export default employeeInfo;