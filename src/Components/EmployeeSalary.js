import React from 'react';

const employeeSalary = (props) => {
    console.log("[employeeSalary]");
    let salaryInfo = (
        props.Employee.map( employee => {
            console.log(employee);
            return (
                <div key = {employee.name}>
                    <p>{employee.name}</p>
                    <p>{employee.salary}</p>
                    <button onClick = {() => props.addSalary(employee.name)}>addSalary</button>
                </div>
            )
        }));
    return (
        <div>
            <div>
                <br/>
                <p style={{color: "red"}}>
                    This is salary change system
                </p>
            </div>
            {salaryInfo}
        </div>);
}

export default employeeSalary;