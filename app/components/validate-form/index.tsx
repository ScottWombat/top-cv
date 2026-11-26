import { capitalize } from "~/utils/app-utils";
import { MsgState } from "../steps/step2";
export interface IStep1Errors {
        profileImage?: boolean;
        position?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        email?: boolean;
        mobile?: boolean;
        address?: boolean;
        languages?: any;
        refName?: boolean;
        refEmail?: boolean;
        refMobile?: boolean;
}
export const initStep1Errors: IStep1Errors ={
      profileImage: false,
        position: false,
        firstName: false,
        lastName: false,
        email: false,
        mobile: false,
        address: false,
        languages: null,
        refName: false,
        refEmail: false,
        refMobile: false,
}
const Step1FormValidate = (cv,type) =>{
    const step1Errors = initStep1Errors
    if(type === 'modern' && cv.personInfo.profileImage === '/images/default-avatar.png') {
        step1Errors.profileImage = true;
    }else{
        step1Errors.profileImage = false;
    }

    if(cv.personInfo.position === null ){
        step1Errors.position = true;
    }else{
        step1Errors.position = false;
    }
     if(cv.personInfo.firstName=== null){
        step1Errors.firstName = true;
    }
     if(cv.personInfo.lastName === null){
        step1Errors.lastName = true;
    }
     if(cv.personInfo.email === null){
        step1Errors.email = true;
    }
     if(cv.personInfo.address === null){
        step1Errors.address = true;
    }
    let langErr = true;
    cv.lang.map((lang,ind)=>{
            if(!lang.checked){
             langErr = false;
            }
    })
    step1Errors.languages = langErr;
    
    if (cv.referees.length > 0){
            step1Errors.refName= false;
            step1Errors.refEmail=false;
            step1Errors.refMobile=false;
    }
    return step1Errors;
}
export const validateStep = (currentPage, cv,type) => {
    //let newErrors: any = {languages:false};
    if (currentPage === 1) {
        return Step1FormValidate(cv,type)
    }

    return {};
}

export const validateEducationForm = (name,value) =>{
    let capName = capitalize(name)
    let msg = '';
    let status = null;
   if(name === 'qualification'){
      if (value === ''){
        msg = `${capName} is required`;
        status = MsgState.Invalid
      }else{
        status = MsgState.Valid;
      }
   }else if(name === 'major'){
      if (value === ''){
        msg = `${capName} is required`;
        status = MsgState.Invalid
      }else{
        status = MsgState.Valid;
      }
   } if(name === 'institution'){
      if (value === ''){
        msg = `${capName} is required`;
        status = MsgState.Invalid
      }else{
        status = MsgState.Valid;
      }
   }else if(name === 'startYear'){
       if (value === ''){
        msg = `${capName} is required`;
        status = MsgState.Invalid
      }else{
        //status = MsgState.Valid;
        let v = /^(?:19|20)\d{2}$/.test(value)
        if(!v){
            msg= 'Invalid start year format';
            status= MsgState.Invalid;
        }else{
            status = MsgState.Valid;
        }
      } 
   }else if(name ==='endYear'){
        if (value === ''){
        msg = `${capName} is required`;
        status = MsgState.Invalid
      }else{
        let v = /^(?:19|20)\d{2}$/.test(value)
        if(!v){
            msg= 'Invalid end year format';
            status= MsgState.Invalid;
        }else{
            status = MsgState.Valid;
        }
      }
   }
   return {msg,status};
}

export const validateForm = (name, value) => {
    let error = '';
    if (name === "position") {
        if (!value) {
            error = "Position is required"
        } else {
            if (value.length < 5) {
                error = "Position must be at least 5 characters"
            }else{
                let v = /^[a-zA-Z0-9\s]*$/.test(value)
                if(!v){
                    error='Cannot contain special characters';
                }
            }
        }
        return error;
    } else if (name === "firstName") {
        if (!value) {
            error = "First name is required"
        } else {
            if (value.length < 3) {
                error = "First name must be at least 3 characters"
            }else{
                let v = /^[a-zA-Z0-9\s]*$/.test(value)
                if(!v){
                    error='Ivalid first name';
                }
            }
        }
        return error;
    } else if (name === "lastName") {
        console.log("last name");
        console.log(value)
        if (!value) {
            error = "Last name is required"
        } else {
            if (value.length < 3) {
                error = "Last name must be at least 3 characters"
            }else{
                 let v = /^[a-zA-Z0-9\s]*$/.test(value)
                if(!v){
                    error='Ivalid last name';
                }
            }
        }
        console.log(error)
        return error;
    } else if (name === 'address') {
        if (!value) {
            error = "Address is required"
        }
    } else if (name === 'email' || name === 'ref_email') {
       
        if (!value) {
            error = "Email is required"
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(value)) {
                error = "Email is invalid"
            }
        }

    } else if (name === 'mobile') {

        // Regex matches: 1234567890 OR 123-456-7890 OR 123 456 7890
        const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/;
        if (!value) {
            error = "Mobile is required"
        } else {
            if (!phoneRegex.test(value)) {
                error = "Mobile number is invalid"
            }
        }
    }else if( name === 'name'){
        if (!value) {
            error = "Referee name is required"
        } else {
            if (value.length < 3) {
                error = "Referee name must be at least 3 characters"
            }
        }
    }
    return error;
}

