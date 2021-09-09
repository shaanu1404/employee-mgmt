import React from 'react'
import Employee from "./Employee"

class EmployeeList extends React.Component {
    render() {
        return (
            <div className="space-y-4">
                <Employee />
                <Employee />
                <Employee />
                <Employee />
            </div>
        )
    }
}

export default EmployeeList