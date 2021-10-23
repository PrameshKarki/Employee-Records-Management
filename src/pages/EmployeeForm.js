import react, { useState, useEffect } from "react";

import useForm from "../hooks/useForm";

// *Import material components
import { Grid, TextField } from "@mui/material";

// *Import custom components
import components from "../components"
import controls from "../components/controls";

const { Input, RadioGroup, Select, CheckBox, DatePicker, Button } = controls;

import { makeStyles } from "@mui/styles"

import * as Employee from "../services/Employee";

const initialFieldValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentID: "",
    hireDate: new Date(),
    isPermanent: false
}

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "others", title: "Others" }
]

const EmployeeForm = () => {


    const validator = (fieldValues = values) => {
        const temp = { ...errors };
        if ("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "Required";
        if ("email" in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Invalid Email";
        if ("mobile" in fieldValues)
            temp.mobile = fieldValues.mobile.toString().length > 9 ? "" : "Minimum 10 Numbers Required";
        if ("departmentID" in fieldValues)
            temp.departmentID = fieldValues.departmentID.length != 0 ? "" : "Required";

        // *Clone temp array to the state variable 
        setErrors({ ...temp });

        if (fieldValues == values)
            return Object.values(temp).every(x => x === "");


    }
    const { values, setValues, errors, setErrors, resetForm, inputChangeHandler } = useForm(initialFieldValues, true, validator);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (validator()) {
            console.log("Valid");
        }

    }

    return <components.Form onSubmit={formSubmitHandler}>
        <Grid container>
            <Grid item xs={6}>
                <Input
                    name="fullName"
                    label="Full Name *"
                    value={values.fullName}
                    onChange={inputChangeHandler}
                    error={errors.fullName}
                />

                <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    value={values.email}
                    onChange={inputChangeHandler}
                    error={errors.email}

                />
                <Input
                    name="mobile"
                    label="Mobile Number *"
                    value={values.mobile}
                    type="number"
                    onChange={inputChangeHandler}
                    error={errors.mobile}

                />
                <Input
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={inputChangeHandler}
                />


            </Grid>
            <Grid item xs={6}>

                <RadioGroup
                    name="gender"
                    label="Gender *"
                    onChange={inputChangeHandler}
                    value={values.gender}
                    items={genderItems} />

                <Select
                    name="departmentID"
                    label="Department *"
                    value={values.departmentID}
                    onChange={inputChangeHandler}
                    options={Employee.getDepartmentCollection()}
                    error={errors.departmentID} />
                {/* 
                <DatePicker
                name="hireDate"
                label="Hire Date"
                value={values.hireDate}
                onChange={inputChangeHandler}/> */}

                <CheckBox
                    name="isPermanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                    onChange={inputChangeHandler}
                />
                <div className="buttons-wrapper">
                    <Button text="Submit" type="submit" />
                    <Button text="Reset" onClick={resetForm} color="secondary" />
                </div>

            </Grid>
        </Grid>
    </components.Form>
}


export default EmployeeForm;