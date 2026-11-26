import { capitalize } from "~/utils/app-utils";
export const validateForm = (name, value) => {
    let nameLbl = capitalize(name) 
    let error = '';
    if(value === ''){
        error = `${nameLbl} is required`;
        return error;
    }
    if (name === "name") {
        if (value.length < 5) {
                error = "Name must be at least 5 characters"
        }else{
            let v = /^[a-zA-Z0-9\s]*$/.test(value)
            if(!v){
                    error='Special characters are not allowed';
                    return error;
            }
        }
    }else if (name === "email"){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
                error = "Email is invalid"
                return error;
        }
        
    }else{
          // Regex matches: 1234567890 OR 123-456-7890 OR 123 456 7890
        const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;
        if (!phoneRegex.test(value)) {
                error = "Mobile number is invalid";
                return error;
        }
        
    }
    console.log(error)
    return error;
}