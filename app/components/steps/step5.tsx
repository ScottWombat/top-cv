
import './step5.css';
import { useRef, useState, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { actions} from '~/store/cv-reducer'
import { GreenMsg,RedMsg } from '../message';
import { validateStep5Form } from './step5-validate';

export enum Step5State {
    Idle = "IDLE", Valid = "VALID", Invalid = "INVALID"
}

const Step5 = (props) => {
    const responsibilitesRef = useRef(null);
    const dispatch = useDispatch<AppDispatch>();
    const [addOrMore, setAddOrMore] = useState("Add Your Experience")
 
    const initFormData = { position: '', company: '', startYear: '', endYear: '', duty: '', location: '' };
    const [formData, setFormData] = useState(initFormData)
    
    const [positionState, setPositionState] = useState<Step5State>(Step5State.Idle);
    const [companyState, setCompanyState] = useState<Step5State>(Step5State.Idle);
    const [startYearState, setStartYearState] = useState<Step5State>(Step5State.Idle);
    const [endYearState, setEndYearState] = useState<Step5State>(Step5State.Idle);
    const [locationState, setLocationState] = useState<Step5State>(Step5State.Idle);
    const [dutyState, setDutyState] = useState<Step5State>(Step5State.Idle);

    const [locationMsg, setLocationMsg] = useState('');
    const [companyMsg, setCompanyMsg] = useState('');
    const [positionMsg,setPositionMsg] = useState('')
    const [startYearMsg, setStartYearMsg] = useState('');
    const [endYearMsg, setEndYearMsg] = useState('');
    const [dutyMsg, setDutyMsg] = useState('');
    const placeHolderTxt ="Please enter your responsibities. Each responsibility must be separated by a blank line."           
    const [dutyPlaceHolder, setDutyPlaceHolder] = useState(placeHolderTxt)
    const [step5Required,setStep5Required] = useState("");     
      useImperativeHandle(props.ref, () => ({
        triggerExperienceErrFunction: onStep5ExperienceErrMessage,

    }))
    const onStep5ExperienceErrMessage = (v) => {
        setStep5Required("Experience is required")
    }    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
       
    }

    const handleBlur = (e) => {
        
        const { name, value } = e.target;
        let {msg,status} =validateStep5Form(name,value)
         console.log(name +":" +msg+":"+status)
         if (name === 'company') {
            setCompanyMsg(msg)
            setCompanyState(status)
         }else if(name === 'location'){
            setLocationMsg(msg)
            setLocationState(status)
         }else if(name==='position'){
            setPositionMsg(msg)
            setPositionState(status)
         }else if(name==='startYear'){
            setStartYearMsg(msg)
            setStartYearState(status)
         }else if(name ==='endYear'){
            setEndYearMsg(msg)
            setEndYearState(status)
         }else{
            setDutyMsg(msg)
            setDutyState(status)
         }
    }
    const onFocus = () =>{
        setDutyPlaceHolder('');
    }
    const addExperience = (e) => {
        e.preventDefault();
   
        if(companyState === Step5State.Valid &&
           positionState === Step5State.Valid &&
           locationState === Step5State.Valid &&
           startYearState === Step5State.Valid &&
           endYearState === Step5State.Valid &&
           dutyState === Step5State.Valid ){

           let frmAreaValue = formData.duty
           let lines =frmAreaValue.split(/\r?\n/);
           let newA = lines.filter(item => item.trim() !== "")

           let updateFormData = { position: formData.position, 
            company: formData.company, 
            startYear: formData.startYear, 
            endYear: formData.endYear, 
            duty: newA, location: formData.location };

            let ret =dispatch(actions.addExperience(updateFormData))

            if(ret.payload==='Added'){
                setFormData(initFormData)
                setDutyPlaceHolder(placeHolderTxt)
                setCompanyState(Step5State.Idle)
                setLocationState(Step5State.Idle)
                setPositionState(Step5State.Idle)
                setStartYearState(Step5State.Idle)
                setEndYearState(Step5State.Idle)
                setDutyState(Step5State.Idle)
                setStep5Required("")
           }
        }
    }
    const resetDuties = (e) => {
        dispatch(actions.resetDuties());
        setFormData(initFormData);
    }

    return (
        <div className='step5-container'>
            <div className="step5-topic-wrapper">
            <div className='step5-topic'>Your Experiences:</div>
            <div className="step5-topic-error">{step5Required}</div>
            </div>
            <div className='step5-header'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Company Name<span className="asterick">*</span></label>
                    <label>
                           {companyState === Step5State.Idle && <></>}
                           {companyState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                           {companyState === Step5State.Invalid && <RedMsg >{companyMsg}</RedMsg>}
                    </label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Location<span className="asterick">*</span></label>
                    <label>
                           {locationState === Step5State.Idle && <></>}
                           {locationState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                           {locationState === Step5State.Invalid && <RedMsg >{locationMsg}</RedMsg>}
                    </label>
                </div>
            </div>

            <div className="row-wrapper">
                <input onBlur={handleBlur} onChange={handleChange} id="company" name='company' value={formData.company} type='text' className='input-field' placeholder='Your work company' />
                <input onBlur={handleBlur} onChange={handleChange} id="location" name='location' value={formData.location} type='text' className='input-field' placeholder='Your location' />
            </div>
            <div className='step5-header'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Position</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label>
                          {positionState === Step5State.Idle && <></>}
                          {positionState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                          {positionState === Step5State.Invalid && <RedMsg >{positionMsg}</RedMsg>}
                    </label>
                </div>
            </div>
            <div className="row-wrapper">
                <input onBlur={handleBlur} onChange={handleChange} id="position" name='position' value={formData.position} type='text' className='input-field' placeholder='Your position' />

            </div>
            <div className='step5-header'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Start Year<span className="asterick">*</span></label>
                    <label>
                        {startYearState === Step5State.Idle && <></>}
                        {startYearState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                        { startYearState === Step5State.Invalid && <RedMsg >{startYearMsg}</RedMsg>}
                    </label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">End Year</label>
                    <label className="error-msg">
                        {endYearState === Step5State.Idle && <></>}
                        {endYearState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                        {endYearState === Step5State.Invalid && <RedMsg >{endYearMsg}</RedMsg>}
                    </label>
                </div>
            </div>
            <div className="step5-row">
                <input onBlur={handleBlur} onChange={handleChange} id="startYear" name='startYear' value={formData.startYear} type='text' className='input-field' placeholder='Your start work year' />
                <input onBlur={handleBlur} onChange={handleChange} id="endYear" name='endYear' value={formData.endYear} type='text' className='input-field' placeholder='Your end work year' />
            </div>
            <div className='step5-header'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Responsibilities/Duties<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label>
                        {dutyState === Step5State.Idle && <></>}
                        {dutyState === Step5State.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                        {dutyState === Step5State.Invalid && <RedMsg >{dutyMsg}</RedMsg>}
                    </label>
                </div>
            </div>
            <div className="step5-row">
                <textarea
                    ref={responsibilitesRef}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={() => setDutyPlaceHolder('')}
                    value={formData.duty}
                    className="frm-textarea" name="duty" id="duty"
                    placeholder={dutyPlaceHolder}>
                </textarea>
            </div>
            <div className="empty-row-1">&nbsp;</div>
            <div className="step5-row">
                <button className="short-btn" onClick={addExperience}>{addOrMore}</button>
                <button className="short-btn" onClick={resetDuties}>Reset Reponsibilities/Duties</button>
            </div>
        </div>
    )
}

export default Step5; 