import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Details = (props) => {
    const { id } = useParams();
    const employee = useSelector((state) =>
        state.find((emp) => emp.id === +id)
    );
    
    if (!employee) {
        return (
            <p className="text-center text-lg">
                No employee found with provided id
            </p>
        );
    }

    return (
        <div>
            <div className="">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                        {employee.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {employee.email}
                    </p>
                </div>
            </div>
            <p className="text-blue-500 mb-2">{employee.username}</p>
            <div className="text-gray-600">
                <address className="text-sm mb-1">
                    {employee.address}
                </address>
                <p className="text-sm">Contact no. - {employee.contact}</p>
            </div>
        </div>
    );
};

export default Details;
