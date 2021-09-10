import { generate } from "shortid";
import {
    ADD_NEW_EMPLOYEE,
    EDIT_EMPLOYEE,
    DELETE_EMPLOYEE,
} from "../actions/action";

const initialState = {
    employees: [
        {
            id: generate(),
            name: "Harish Chandra Tanty",
            username: "shaanu1404",
            email: "shanu14tnt@gmail.com",
            address:
                "N.E.Railway colony, Block no. 1257/4, Bilaspur, Chhattisgarh",
            contact: "7000409185",
        },
        {
            id: generate(),
            name: "Akash Chourasia",
            username: "akash007",
            email: "ak.chourasia.007@gmail.com",
            address: "Yadunandan nagar, Tifra",
            contact: "7878486898",
        },
    ],
    currentPage: 0,
    totalLength: 2,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_EMPLOYEE:
            const newEmployee = {
                id: generate(),
                ...action.payload,
            };
            const updatedEmps = [...state.employees, newEmployee];
            return {
                ...state,
                employees: updatedEmps,
                totalLength: updatedEmps.length,
            };

        case EDIT_EMPLOYEE:
            const updatedEmployees = state.employees.map((emp) => {
                if (emp.id === action.payload.id) {
                    return {
                        ...emp,
                        name: action.payload.data.name || emp.name,
                        username: action.payload.data.username || emp.username,
                        email: action.payload.data.email || emp.email,
                        address: action.payload.data.address || emp.address,
                        contact: action.payload.data.contact || emp.contact,
                    };
                }
                return emp;
            });
            return {
                ...state,
                employees: updatedEmployees,
            };

        case DELETE_EMPLOYEE:
            const filterredEmps = state.employees.filter(
                (emp) => emp.id !== action.payload
            );
            return {
                ...state,
                employees: filterredEmps,
                totalLength: filterredEmps.length,
            };
        default:
            return state;
    }
};

export default reducer;
