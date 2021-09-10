import React from "react";
import { withRouter } from "react-router-dom";
import GhostButton from "./GhostButton";

class Employee extends React.Component {
    showDetails = () => {
        this.props.history.push("/" + this.props.employee.id);
    };

    editEmployee = () => {
        this.props.history.push('/' + this.props.employee.id + '/edit')
    }

    render() {
        return (
            <div className="border p-4 rounded-sm">
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold capitalize">
                            {this.props.employee.name}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {this.props.employee.email}
                        </p>
                    </div>
                    <p className="text-blue-500">{this.props.employee.username}</p>
                </div>

                <div className="flex space-x-2 sm:space-x-4">
                    <GhostButton onClick={this.showDetails}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                        <span>Read</span>
                    </GhostButton>
                    <GhostButton onClick={this.editEmployee}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                        <span>Edit</span>
                    </GhostButton>
                    <GhostButton onClick={this.props.deleteEmployee}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                        <span>Delete</span>
                    </GhostButton>
                </div>
            </div>
        );
    }
}

export default withRouter(Employee);
