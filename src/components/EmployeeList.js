import React from "react";
import Employee from "./Employee";
import { connect } from "react-redux";

class EmployeeList extends React.Component {
    state = {
        size: 3,
        page: 0,
    };

    paginationLength = (totalLength) => {
        let totalPages_pre = totalLength / this.state.size;
        return Math.floor(
            totalLength % this.state.size === 0
                ? totalPages_pre
                : totalPages_pre + 1
        );
    };

    render() {
        let employees = this.props.employees;

        if (this.props.searchTerm) {
            employees = employees.filter((employee) => {
                return employee.name
                    .toLowerCase()
                    .includes(this.props.searchTerm.toLowerCase());
            });
        } else {
            if (employees.length > 0) {
                let start = this.state.size * this.state.page;
                let end = start + this.state.size;
                employees = employees.slice(start, end);
            }
        }

        return (
            <div className="space-y-4">
                {!this.props.searchTerm && (
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">
                            Page {this.state.page + 1} of{" "}
                            {this.paginationLength(this.props.totalLength)}
                        </p>
                        <div className="space-x-1">
                            <button
                                onClick={() =>
                                    this.setState((state) => ({
                                        ...state,
                                        page:
                                            state.page > 0 ? state.page - 1 : 0,
                                    }))
                                }
                                className="px-2 py-1 border border-blue-500 text-xs text-blue-600 hover:bg-blue-100"
                            >
                                Prev
                            </button>
                            <button
                                onClick={() =>
                                    this.setState((state) => {
                                        let totalPages = this.paginationLength(
                                            this.props.totalLength
                                        );
                                        return {
                                            ...state,
                                            page:
                                                state.page < totalPages - 1
                                                    ? state.page + 1
                                                    : totalPages - 1,
                                        };
                                    })
                                }
                                className="px-2 py-1 border border-blue-500 text-xs text-blue-600 hover:bg-blue-100"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {employees.length > 0 ? (
                    employees.map((employee) => (
                        <Employee
                            key={employee.id}
                            employee={employee}
                            deleteEmployee={() =>
                                this.props.deleteEmployee(employee.id)
                            }
                        />
                    ))
                ) : (
                    <p>No employee found with provide name</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees || [],
        totalLength: state.totalLength,
    };
};

export default connect(mapStateToProps, null)(EmployeeList);
