import React from "react";
import { connect } from "react-redux";
import { DELETE_EMPLOYEE } from "../store/actions/action";
import Backdrop from "../components/Backdrop";
import EmployeeList from "../components/EmployeeList";
import Search from "../components/Search";

class Home extends React.Component {
    state = {
        searchTerm: "",
        showBackdrop: false,
        deleteId: null,
    };

    searchValue = (value) => {
        this.setState({
            searchTerm: value,
        });
    };

    deleteEmployee = (id) => {
        this.setState((state) => ({
            ...state,
            showBackdrop: true,
            deleteId: id,
        }));
    };

    render() {
        return (
            <React.Fragment>
                <Search searchValue={this.searchValue} />
                <hr className="my-6 border-opacity-50" />
                <EmployeeList
                    searchTerm={this.state.searchTerm}
                    deleteEmployee={this.deleteEmployee}
                />
                <Backdrop show={this.state.showBackdrop}>
                    <div className="w-full md:w-1/3 bg-white p-4 absolute top-20 left-1/2 transform -translate-x-1/2 rounded-sm">
                        <h5 className="text-lg font-semibold">
                            Delete employee?
                        </h5>
                        <div className="flex justify-end space-x-4 mt-4">
                            <button
                                onClick={() =>
                                    this.setState((state) => ({
                                        ...state,
                                        showBackdrop: false,
                                    }))
                                }
                                className="py-2 px-4 rounded-sm text-sm text-gray-700 uppercase font-bold bg-gray-200 hover:bg-gray-300 outline-none focus:ring focus:ring-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    if (!this.state.deleteId) return;
                                    this.props.deleteEmployee(
                                        this.state.deleteId
                                    );
                                    this.setState((state) => ({
                                        ...state,
                                        deleteId: null,
                                        showBackdrop: false,
                                    }));
                                }}
                                className="py-2 px-4 rounded-sm text-sm text-white uppercase font-bold bg-red-500 hover:bg-red-700 outline-none focus:ring focus:ring-red-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </Backdrop>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmployee: (id) =>
            dispatch({ type: DELETE_EMPLOYEE, payload: id }),
    };
};

export default connect(null, mapDispatchToProps)(Home);
