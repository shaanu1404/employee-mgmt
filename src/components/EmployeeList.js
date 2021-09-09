import React from 'react'
import Employee from "./Employee"
import { connect } from 'react-redux'

class EmployeeList extends React.Component {
    render() {
        return (
            <div className="space-y-4">
                {this.props.employees && this.props.employees.map(
                    employee => <Employee key={employee.id} employee={employee} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        employees: state
    }
}

export default connect(mapStateToProps, null)(EmployeeList)