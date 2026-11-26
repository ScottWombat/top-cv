import './step.css';
import '~/components/css/master.css';
//import { MsgState } from './msg-state';
import { useState, useEffect, useImperativeHandle } from 'react'
import { actions, } from '~/store/cv-reducer'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { validateEducationForm } from '../validate-form';
//import { GreenMsg } from '../message';
import { GreenMsg, RedMsg } from '~/components/message';
import { clear } from 'console';
/*
const Education =(props) =>{
    const dispatch = useDispatch<AppDispatch>();
    const [index,setIndex] = useState(0)
    const [data,setData] = useState([{}])
    const [qualification,setQualification] = useState('')
    const [major,setMajor] = useState('')
   
    const handleChange = (e) =>{
        e.preventDefault();
    }
    const handleBlur = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        dispatch(actions.updateEducation({ 'id': props.index, 'name': name, 'value': value }))
    }
    return(
        <div className='step-container'>
            <div className='sub-step-title'>Your Education:</div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Universisity/College/Scrool Name<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input type='text' className='input-field' placeholder='Please enter your position.' />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Degree/Diploma/Certificate<span className="asterick">*</span></label>
                    <label className="error-msg">Invalid</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Major</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            
            <div className="row-wrapper">
                <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
                <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Start Year<span className="asterick">*</span></label>
                    <label className="error-msg">Invalid</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">End Year</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
                <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
            </div>
            <div className="header-row-wrapper">
                <div className="lbl-wrapper">
                    
                    
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">End Year</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            
            <div className="form-row">
                 <div className="form-group">
                    <label>Qualification</label>
                    <input type="text" name={"qualification_" + props.index} placeholder="Qualification" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <div className="form-group">
                    <label>Major</label>
                    <input type="text" name={"major_" + props.index}  placeholder="Major" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Start Year</label>
                      <input type="text" name={"startYear_" + props.index} placeholder="start Year" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
            <option></option>
                    
                </div>
                 <div className="form-group">
                    <label>End Year</label>
                    <input type="text" name={"endYear_" + props.index} placeholder="End Year" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                </div>
                
            </div>
            <div className="form-row">
                 <div className="form-group">
                    <label>Institution</label>
                    <input type="text" name={"Institution_" + index} placeholder="Institution" defaultValue={qualification} onChange={handleChange} onBlur={handleBlur}/>
                </div>
                
            </div>
            
        </div>
    )
}
*/
interface FieldMsg {
    qualification: string;
    major: string;
    university: string;
    startYear: number;
    endYear: number;
}

export enum MsgState {
    Idle = "IDLE", Valid = "VALID", Invalid = "INVALID"

}
    
const Step2 = (props) => {
    //const msg: Msg ={
    //    ok: `\u2713`,
    //    notOk: 'is required'
    //}

    const dispatch = useDispatch<AppDispatch>();
    //const [eduId,setEduId] = useState(1)
    const [qualification, setQualification] = useState('')
    const [major, setMajor] = useState('')
    const [institution, setInstitution] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')

    const initEducation = { qualification: '', major: '', institution: '', startYear: '', endYear: '' }
    const [education, setEducation] = useState(initEducation)

    //const [index, setIndex] = useState(0)

    const [buttonLabel, setButtonLabel] = useState('Add Qualification')
    const [moreEducation, setMoreEducation] = useState(1)
    const [errMsg, setErrMsg] = useState('');

    const [qualStatus, setQualStatus] = useState<MsgState>(MsgState.Idle);
    const [majorStatus, setMajorStatus] = useState<MsgState>(MsgState.Idle);
    const [institutionStatus, setInstitutionStatus] = useState<MsgState>(MsgState.Idle);
    const [startYearStatus, setStartYearStatus] = useState<MsgState>(MsgState.Idle);
    const [endYearStatus, setEndYearStatus] = useState<MsgState>(MsgState.Idle);

    const [qualMsg, setQualMsg] = useState('');
    const [majorMsg, setMajorMsg] = useState('');
    const [institutionMsg, setInstitutionMsg] = useState('');
    const [startYearMsg, setStartYearMsg] = useState('');
    const [endYearMsg, setEndYearMsg] = useState('');

    const [fieldMsg, setFieldMsg] = useState<FieldMsg[]>([])
    const [qualPlaceHolder, setQualPlaceHolder] = useState('Your certificate/diploma/degree')
    const [majorPlaceHolder, setMajorPlaceHolder] = useState("Your major");
    const [institutionPlaceHolder, setInstitutionPlaceHolder] = useState("Your universisity/ollege/school Name")
    const [startYearPlaceHolder,setStarYearPlaceHolder] = useState("Your education start year");
    const [endYearPlaceHolder,setEndYearPlaceHolder] = useState("Your education end year");
    useEffect(() => {
        console.log(education)
    }, [education])
    if (props.currentPage !== 2) {
        return null;
    }
    useImperativeHandle(props.ref, () => ({
        triggerEducationErrFunction: onStep2EducationErrMessage,

    }))
    const onStep2EducationErrMessage = (v) => {
        if (v) {
            setErrMsg("Education is required")

        } else {
            setErrMsg("")
        }

    }
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setEducation(edu => ({
            ...edu,
            [name]: value
        }))
    }
    /*
    const handleChange = (e) => {
        setErrMsg("")
        const { name, value } = e.target;
        setEducation(edu => ({
            ...edu,
            [name]: value
        }))
        let { msg, status } = validateEducationForm(name, value)
        if (name === 'qualification') {
            setQualMsg(msg)
            setQualStatus(status ? MsgState.Valid : MsgState.Invalid)
        } else if (name === "institution") {
            setInstitutionMsg(msg)
            setInstitutionStatus(status ? MsgState.Valid : MsgState.Invalid)
        } else if (name === "major") {
            setMajorMsg(msg)
            setMajorStatus(status ? MsgState.Valid : MsgState.Invalid)
        }else if(name==="startYear"){
            setStartYearMsg(msg)
            setStartYearStatus(status ? MsgState.Valid : MsgState.Invalid)
        }else if(name === 'endYear'){
            setEndYearMsg(msg)
            setEndYearStatus(status ? MsgState.Valid : MsgState.Invalid)
        }

    }
        */
    const handleBlur = (e) => {
        setErrMsg("")
        const { name, value } = e.target;
        setEducation(edu => ({
            ...edu,
            [name]: value
        }))
        let { msg, status } = validateEducationForm(name, value)
        if (name === 'qualification') {
            setQualMsg(msg)
            setQualStatus(status)
        } else if (name === 'major') {
            setMajorMsg(msg)
            setMajorStatus(status)
        } else if (name === 'institution') {
            setInstitutionMsg(msg)
            setInstitutionStatus(status)
        }else if(name==='startYear'){
            setStartYearMsg(msg)
            setStartYearStatus(status)
        }else if(name ==='endYear'){
            setEndYearMsg(msg)
            setEndYearStatus(status)
        }

    }


    const handleClick = (e) => {
        setButtonLabel('Add More Qualificaiton')
        setMoreEducation(moreEducation + 1)
    }
    const addEducation = (e) => {
        e.preventDefault();
        let dataReady = false
        if(qualStatus === MsgState.Valid &&
           majorStatus === MsgState.Valid &&
           institutionStatus === MsgState.Valid &&
           startYearStatus === MsgState.Valid &&
           endYearStatus === MsgState.Valid){
          
           let ret =dispatch(actions.addEducation(education));
           if(ret){
               setQualification('');
               setMajor('')
               setInstitution("")
               setStartYear('')
               setEndYear("")
               setButtonLabel("Add More Education")
               setQualStatus(MsgState.Idle)
               setMajorStatus(MsgState.Idle)
               setInstitutionStatus(MsgState.Idle)
               setStartYearStatus(MsgState.Idle)
               setEndYearStatus(MsgState.Idle)
           }
      
           //setEducation(educationData)))
           //setEducation(initEducation)
        }else{
            console.log("INvalid")
        }

        //, major: {major}, institution: {institution}, startYear: {startYear},endYear:{endYear}}
       
    }
    const resetEducation = (e) => {
        e.preventDefault();
        dispatch(actions.resetEducation());
    }
    const handleClear = (e) => {
        const { name, value } = e.target;
        if (name === 'qualification') {
            setQualPlaceHolder('')
        } else if (name === 'major') {
            setMajorPlaceHolder('')
        } else if (name === 'institution') {
            setInstitutionPlaceHolder('')
        }else if(name==='startYear'){
            setStarYearPlaceHolder("")
        }else if(name ==='endYear'){
            setEndYearPlaceHolder("")
        }
    }
    return (
        <div className='step-container'>
            <div className='header-row-wrapper'>
                <div className="step-header-left">Education:</div>
                <div className="error-msg">{errMsg}</div>
            </div>
            <div className="step-wrapper">
                <div className="column1">
                    <div className="float-left">Qualification<span className="asterick">*</span></div>
                    <div className="float-right">
                        {qualStatus === MsgState.Idle && <></>}
                        {qualStatus === MsgState.Valid && <GreenMsg />}
                        {qualStatus === MsgState.Invalid && <RedMsg >{qualMsg}</RedMsg>}
                    </div>
                </div>
                <div className="column2">
                    <div className="float-left">Major<span className="asterick">*</span></div>
                    <div className="float-right">
                        {majorStatus === MsgState.Idle && <></>}
                        {majorStatus === MsgState.Valid && <GreenMsg />}
                        {majorStatus === MsgState.Invalid && <RedMsg>{majorMsg}</RedMsg>}
                    </div>
                </div>
            </div>
            <div className="row-wrapper">
                <input id="qualification" value={qualification} name='qualification' onBlur={handleBlur} onChange={(e) => setQualification(e.target.value)} type='text' className='input-field' placeholder={qualPlaceHolder} onFocus={handleClear} />
                <input id="major" value={major} name="major" type='text' className='input-field' onBlur={handleBlur} onChange={(e) => setMajor(e.target.value)} placeholder={majorPlaceHolder} onFocus={handleClear} />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Institution<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label>&nbsp;</label>
                    <label className="error-msg">
                        {institutionStatus === MsgState.Idle && <></>}
                        {institutionStatus === MsgState.Valid && <GreenMsg />}
                        {institutionStatus === MsgState.Invalid && <RedMsg>{institutionMsg}</RedMsg>}
                    </label>
                </div>
            </div>
            <div className="row-wrapper">
                <input id="institution" name='institution' value={institution} type='text' className='input-field' onBlur={handleBlur} onChange={(e) => setInstitution(e.target.value)} placeholder={institutionPlaceHolder} onFocus={handleClear} />
            </div>

            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Start Year<span className="asterick">*</span></label>
                    <label className="error-msg">
                        {startYearStatus === MsgState.Idle && <></>}
                        {startYearStatus === MsgState.Valid && <GreenMsg />}
                        {startYearStatus === MsgState.Invalid && <RedMsg>{startYearMsg}</RedMsg>}
                    </label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">End Year<span className="asterick">*</span></label>
                    <label className="error-msg">
                        {endYearStatus === MsgState.Idle && <></>}
                        {endYearStatus === MsgState.Valid && <GreenMsg />}
                        {endYearStatus === MsgState.Invalid && <RedMsg>{endYearMsg}</RedMsg>}
                    </label>
                </div>
            </div>
            <div className="row-wrapper">
                <input id='startYear' name='startYear' value={startYear} type='text' className='input-field' onBlur={handleBlur} onChange={(e) => setStartYear(e.target.value)} placeholder={startYearPlaceHolder} onFocus={handleClear} />
                <input id='endYear' name='endYear' value={endYear} type='text' className='input-field' onBlur={handleBlur} onChange={(e) => setEndYear(e.target.value)} placeholder={endYearPlaceHolder} onFocus={handleClear} />
            </div>
            <div className="empty-row">&nbsp;</div>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addEducation}>{buttonLabel}</button>
                <button className="short-btn" onClick={resetEducation}>Reset Education</button>
            </div>
            {/*}
            <div className='empty-row'>&nbsp;</div>
            <div className="header-row-wrapper">
                <div className="lbl-wrapper">
                    <button onClick={handleClick} className='generic-btn'>{buttonLabel}</button>
                    
                </div>
                <div className="lbl-wrapper">
                    <button onClick={handleClick} className='generic-btn'>Reset</button>
                </div>
            </div>
           */}
        </div>

    )
}

export default Step2;