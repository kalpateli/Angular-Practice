export interface EmployeeModel {
    "id": number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "mobile": string,
    "employee_no": number,
    "userType": string,
    "dob": string,
    "address":
    {
        "city": string,
        "state": string,
        "country": string
    },
    "designation": string,
    "absence" : string[]
}

export interface EmployeeList{
    employeelist : EmployeeModel[];
}