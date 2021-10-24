const KEYS = {
    employees: "employees",
    employeeID: "employeeID"
}

export const getDepartmentCollection = () => {
    return [
        { id: "1", title: "Development" },
        { id: "2", title: "Marketing" },
        { id: "3", title: "Accounting" },
        { id: "4", title: "HR" }
    ]
}
export const Insert = data => {
    const employees = Fetch();
    data["id"] = GenerateEmployeeID();
    employees.push(data);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));

}
export const Update = data => {
    const employees = Fetch();
    let recordIndex = employees.findIndex(x => x.id === data.id);
    employees[recordIndex] = { ...data };
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export const Delete=id=>{
    let employees=Fetch();
    employees=employees.filter(x=>x.id!=id);
    localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}

export const GenerateEmployeeID = () => {
    if (localStorage.getItem(KEYS.employeeID) == null)
        localStorage.setItem(KEYS.employeeID, "0");
    let id = parseInt(localStorage.getItem(KEYS.employeeID));
    localStorage.setItem(KEYS.employeeID, (++id).toString());
    return id;
}

export const Fetch = () => {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));

    // *Map department ID to the department title
    let departments = getDepartmentCollection();
    return employees.map(x => ({
        ...x,
        department: departments[x.departmentID - 1].title
    }))

}