export const apiUrls=
{
    Employee:{
        employee_details:"/employees"
    },
    Users:{
        user_details : "/users"
    },

    usersAuth:[
        {
            path : 'Employees',
            text : 'Employee',
            roles : ['Admin']
        },
        {
            path : 'Home',
            text : 'Homepage',
            roles : [ 'Admin' , 'Employee']
        },
        {
            path : 'Countries',
            text : 'Country',
            roles : [ 'Admin' , 'Employee']
        }
    ]
}