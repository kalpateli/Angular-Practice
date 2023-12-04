export const errorMessages=
{
    errors:
    {
        required : 'This field is required',
        valid_empNo : 'Enter a valid Employee Number',
        valid_email : 'Enter a valid email',
        valid_mobile : 'Enter a valid mobile number',
        valid_password : 'Enter a valid password',
        password_length : 'Length of password should be between 8-18 characters'
    },
    pattern :
    {
        name : "^['A-Z a-z() s-]*$",
        email : /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,}?)+$/,
        password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*#!&])[A-Za-z\d@$%*#!&]+$/,
        mobile : /^\d+$/,
        emp_no : /^\d+$/

    }

}