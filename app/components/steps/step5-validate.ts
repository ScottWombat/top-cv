import { capitalize } from "~/utils/app-utils";
import { Step5State } from "./step5";
export const validateStep5Form = (name,value) =>{
    let capName = capitalize(name)
    let msg = '';
    let status = null;
   if(name === 'company'){
      if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        status = Step5State.Valid;
      }
   }else if(name === 'location'){
      if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        status = Step5State.Valid;
      }
   } if(name === 'position'){
      if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        status = Step5State.Valid;
      }
   }else if(name === 'startYear'){
       if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        //status = Step5State.Valid;
        let v = /^(?:19|20)\d{2}$/.test(value)
        if(!v){
            msg= 'Invalid start year format';
            status= Step5State.Invalid;
        }else{
            status = Step5State.Valid;
        }
      } 
   }else if(name ==='endYear'){
        if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        let v = /^(?:19|20)\d{2}$/.test(value)
        if(!v){
            msg= 'Invalid end year format';
            status= Step5State.Invalid;
        }else{
            status = Step5State.Valid;
        }
      }
   }else{
      if (value === ''){
        msg = `${capName} is required`;
        status = Step5State.Invalid
      }else{
        status = Step5State.Valid;
      }
   }
   return {msg,status};
}