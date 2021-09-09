import React from "react";
import { Formik } from "formik";

class AddEmployee extends React.Component {
    initialValues = {
        name: "",
        username: "",
        email: "",
        address: "",
        contact: "",
    };

    validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Field is required";
        }
        if (!values.username) {
            errors.username = "Field is required";
        }
        if (!values.email) {
            errors.email = "Field is required";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Email address is invalid";
        }
        if (!values.address) {
            errors.address = "Field is required";
        }
        if (values.address.length > 255) {
            errors.address = "Address lenght should not exceed 255 characters";
        }
        if (!values.contact) {
            errors.contact = "Field is required";
        }
        if (!/^[0-9]+$/.test(values.contact)) {
            errors.contact = "Contact no. should be digits only";
        }
        if (values.contact.length !== 10) {
            errors.contact = "Contact no. must be 10 digits in length";
        }

        return errors;
    };

    onFormSubmit = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div>
                <h4 className="text-lg text-gray-700 mb-6 font-semibold uppercase">
                    Add new employee
                </h4>
                <Formik
                    initialValues={this.initialValues}
                    onSubmit={this.onFormSubmit}
                    validate={this.validate}
                >
                    {(formik) => (
                        <form
                            className="space-y-2"
                            onSubmit={formik.handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm uppercase font-semibold text-gray-700 block mb-1"
                                >
                                    Fullname
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="py-2 px-3 rounded-sm border w-full outline-none focus:ring focus:ring-gray-300"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name ? (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.name}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="text-sm uppercase font-semibold text-gray-700 block mb-1"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="py-2 px-3 rounded-sm border w-full outline-none focus:ring focus:ring-gray-300"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.username ? (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.username}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="text-sm uppercase font-semibold text-gray-700 block mb-1"
                                >
                                    email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="py-2 px-3 rounded-sm border w-full outline-none focus:ring focus:ring-gray-300"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email ? (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.email}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="address"
                                    className="text-sm uppercase font-semibold text-gray-700 block mb-1"
                                >
                                    Address
                                </label>
                                <textarea
                                    name="address"
                                    rows="3"
                                    className="py-2 px-3 rounded-sm border w-full outline-none focus:ring focus:ring-gray-300 resize-none"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></textarea>
                                {formik.errors.address ? (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.address}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <label
                                    htmlFor="contact"
                                    className="text-sm uppercase font-semibold text-gray-700 block mb-1"
                                >
                                    contact no
                                </label>
                                <input
                                    type="text"
                                    name="contact"
                                    className="py-2 px-3 rounded-sm border w-full outline-none focus:ring focus:ring-gray-300"
                                    value={formik.values.contact}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.contact ? (
                                    <p className="text-sm text-red-500">
                                        {formik.errors.contact}
                                    </p>
                                ) : null}
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 rounded-sm text-sm text-white uppercase font-bold bg-gray-700 hover:bg-gray-800 outline-none focus:ring focus:ring-gray-300"
                                disabled={!formik.errors || formik.isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default AddEmployee;
