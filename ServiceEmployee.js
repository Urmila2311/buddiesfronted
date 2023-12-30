import axios from 'axios' ;
export async function saveEmployees(employeeData)
{
    try{
        const response = await axios.post("http://localhost:8080/register",employeeData);
        return response.data; 
    }catch(error){
        console.log(error);
    }
}
