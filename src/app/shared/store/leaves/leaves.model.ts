
export interface LeavesModel {
    "id": number,
    "employee_no": number,
    "employee_fname": string,
    "employee_lname": string,
    "totalDays": number,
    "from_date": string,
    "to-date": string,
    "full": string,
    "half": string,
    "reason": string,
    "document": string,
    "status": string
}

export interface LeavesList{
    leavesList : LeavesModel[];
}