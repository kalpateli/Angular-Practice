export interface Absentees {
    "abs_id": number,
    "employee_no": number
}

export interface Employees{
    "emp_id":number,
    "employee_no":number,
    "mark_in_time":string,
    "mark_out_time":string,
}

export interface AttendenceModel {
    "id": number,
    "date": string,
    "employees": Employees[],
    "absentees": Absentees[]
}

export interface AttendenceList{
    absenteeList : AttendenceModel[];
}