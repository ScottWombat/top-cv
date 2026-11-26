import Reat, { useState,useEffect,useRef,forwardRef,useImperativeHandle  } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions, selectPersonInfo } from '~/store/cv-reducer'
import './step.css'
import { UploadImage } from '~/components/upload-image';
//import { FileUploader } from '@components/file-uploader';
import Languages from "~/components/languages";
import References from "~/components/references";
import { validateForm } from "~/components/validate-form";
import { getCV } from '~/store/cv-reducer';
interface ErrMsg{
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
}
const Step1 = ({ref,imageRequired,formErrors,onAction}) => {
    const [errMsgs,setErrMsgs] = useState<ErrMsg>({position:'',firstName:'',lastName:'',email:'',mobile:'',address:''})
    const [resume, setResume] = useState(useAppSelector(getCV))
    const dispatch = useDispatch<AppDispatch>();
    const refereeRef = useRef(null)
    const personInfoData = useAppSelector(selectPersonInfo)
    const [personInfo, setPersonInfo] = useState({})
    const [errMessages,setErrMessages] = useState<any>({})
 
    //const [errors, setErrors] = useState([]);
    const [errsStatus,setErrsStatus] = useState<any>({})
    const positionRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const addressRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null)
    const langRef = useRef(null)
    const uploadFileErrMsg = useState('');
    //const [errsMsg,setErrsMsg] = useState<any>({})
    useEffect(() =>{
        //let err = formErrors.languages;
       // console.log("step1 err")
       // console.log(err)
    },[])

    useImperativeHandle(ref,() =>({
            triggerLangErrFunction: onStep1ErrMessage
    }))
    const onStep1Action = () =>{
        console.log("onStep1Ation")
        onAction()
    }
    const onStep1ErrMessage = (v) =>{
        console.log("OnErroStep1")
        console.log(v.languages)
        //setErrsStatus(v)
        if (langRef.current) {
            langRef.current.triggerChildFunction(v.languages);
        }
    }
    const onStep1ErrMessage1 = (v) =>{
        console.log("EEE")
        if (langRef.current) {
            langRef.current.triggerChildFunction(v.langueages);
        }
        
        setErrMessages((prevError) =>({
                    ...prevError,
                    uploadFile: (!v.profileImage? <div className="check-mark">{'\u2713'}</div> : <>{v.profileImage}</>),
                    position: (!v.position? <div className="check-mark">{'\u2713'}</div> : <>{v.position}</>),
                    firstName: (!v.firstName? <div className="check-mark">{'\u2713'}</div> : <>{v.firstName}</>),
                    lastName: (!v.lastName? <div className="check-mark">{'\u2713'}</div> : <>{v.lastName}</>),
                    address: (!v.address? <div className="check-mark">{'\u2713'}</div> : <>{v.address}</>),
                    email: (!v.email? <div className="check-mark">{'\u2713'}</div> : <>{v.email}</>),
                    mobile: (!v.mobile? <div className="check-mark">{'\u2713'}</div> : <>{v.mobile}</>),
                    languages: (!v.languages? <div className="check-mark">{'\u2713'}</div> : <>{v.languages}</>)

                    
        }))
        if (refereeRef.current) {
            refereeRef.current.triggerRefereeFunction(v.ref_name,v.ref_email,v.ref_mobile);
        }
    }
   
    const onLangFocus = () =>{
        if (langRef.current) {
            langRef.current.triggerChildFunction();
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        /*
        let tempMsg = ''
        if(name==='position'){
            tempMsg = 'Position is required12.'
        }else if (name === 'firstName'){
            tempMsg = 'First name is required.'
        }else if(name === 'lastName'){
            tempMsg = 'Last name is required.'
        }else if(name === 'address'){
            tempMsg = 'Address is required.'
        }else if(name === 'email'){
            tempMsg = 'Email is required.'
        }else if(name==='mobile'){
            tempMsg = 'Mobile is required'
        }else{
            tempMsg='Invalid'
        }
        */
        let err = validateForm(name,value)
        setErrMsgs((prevError) =>({
                    ...prevError,[name]: (!err ? <div className="check-mark">{'\u2713'}</div> : <>{err}</>)
        }))
        console.log(errMsgs);

        //setErrMessages((prevError) =>({
        //            ...prevError,[name]: (!err ? <div className="check-mark">{'\u2713'}</div> : <>{tempMsg}</>)
        //}))
        if(value !=="" && !err){
            dispatch(actions.updatePersonInfo({ ...personInfoData, [name]: value }))
        }
        
        //let err=''
        
       
       
        /*
        if(!err){
             dispatch(actions.updatePersonInfo({ ...personInfoData, [name]: value }))
             if(name === 'position'){
                firstNameRef.current.focus();
             }else if(name === "firstName"){
                lastNameRef.current.focus();
             }else if(name === 'lastName'){
                addressRef.current.focus();
             }else if(name === 'address'){
                emailRef.current.focus()
             }else if (name === 'email'){
                mobileRef.current.focus()
             }else{
                onLangFocus();
             }
        }
        */
    }

    const handleUpload =(status) =>{
            setErrMessages((prevError) =>({
                    ...prevError,['uploadFile']: (status ? <div className="check-mark">{'\u2713'}</div> : <>{uploadFileErrMsg}</>)
            }))
            if(!status){
                positionRef.current.focus();
                
            }
    }

    return (
        <div className='step-container'>
              
            {(imageRequired==='true') && 
            <>
      
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Image file<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">{'errMessages.uploadFile'}</label>
                </div>
            </div>
            {/*<FileUploader uploadStatus={handleUpload}/>*/}
            
            </>
            }
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Position<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">{errMsgs.position}</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input ref={positionRef} type='text' className='input-field' name="position" placeholder='Please enter your position.' defaultValue={resume.personInfo.position} onBlur={handleChange} />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">First Name<span className="asterick">*</span></label>
                    <label className="error-msg">{errMsgs.firstName}</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Last Name<span className="asterick">*</span></label>
                    <label className="error-msg">{errMsgs.lastName}</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input ref={firstNameRef} type='text' className='input-field' name="firstName" placeholder='Please enter your first name.' defaultValue={resume.personInfo.firstName} onBlur={handleChange}/>
                <input ref={lastNameRef} type='text' className='input-field' name="lastName" placeholder='Please enter your last name' defaultValue={resume.personInfo.lastName} onBlur={handleChange}/>
            </div>
            
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Email<span className="asterick">*</span></label>
                    <label className="error-msg">{errMsgs.email}</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Mobile<span className="asterick">*</span></label>
                    <label className="error-msg">{errMsgs.mobile}</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input ref={emailRef} type='text' className='input-field' name="email" placeholder='Please enter your email address.' defaultValue={resume.personInfo.email} onBlur={handleChange}/>
                <input ref={mobileRef} type='text' className='input-field' name="mobile" placeholder='10-digit mobile number.' defaultValue={resume.personInfo.mobile} onBlur={handleChange}/>
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Location<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">{errMsgs.address}</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input ref={addressRef} type='text' className='input-field' name="address" placeholder='Please enter your location' defaultValue={resume.personInfo.address} onBlur={handleChange}/>
            </div>
           
            <div className="line-break">&nbsp;</div>
            <div className="header-row-wrapper">
                <Languages ref={langRef} langError={errMessages.languages} onAction={onStep1Action}/>
            </div>
            
            <div className="line-break">&nbsp;</div>
            <div className="header-row-wrapper">
                <References ref={refereeRef}/>
            </div>
             <div className="line-break">&nbsp;</div>

        </div>
    )
}

export default Step1;