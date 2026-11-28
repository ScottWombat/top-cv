import { useAppSelector } from '~/store/hooks';
import { selectPersonInfo } from '~/store/cv-reducer'

export const validatePersonInfo = (personInfo) =>{
   
    let valid = false
    if(personInfo.position === null &&
               personInfo.firstName === null &&
               personInfo.lastName === null &&
               personInfo.mobile === null &&
               personInfo.email === null &&
               personInfo.address === null){
        return false;
    }else{
        return true;
    }
}