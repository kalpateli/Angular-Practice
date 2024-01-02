export interface EmployeeModel {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "mobile": string,
    "employee_no": number,
    "designation": string,
    "userType": string,
    "dob": string,
    "address":
    {
        "city": string,
        "state": string,
        "country": string
    }
}

export interface EmployeeList{
    employeelist : EmployeeModel[];
}