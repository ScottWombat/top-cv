import './step.css';
import '~/components/css/master.css';
import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions, selectExperience } from '~/store/cv-reducer'
import { GreenMsg,RedMsg } from '../message';
//import Responsibilty from '~/components/responsibilty';

//import { IExperience } from '~/store/resume-type';
export enum Step5State {
    Idle = "IDLE", Valid = "VALID", Invalid = "INVALID"
}


const ExperienceWrapper = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const work_experience = useAppSelector(selectExperience)

    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [endYear, setEndYear] = useState('')
    const [startYear, setStartYear] = useState('')
    const [location, setLocation] = useState('')

    const [qualStatus, setQualStatus] = useState<Step5State>(Step5State.Idle);
    const [majorStatus, setMajorStatus] = useState<Step5State>(Step5State.Idle);
    const [institutionStatus, setInstitutionStatus] = useState<Step5State>(Step5State.Idle);
    const [startYearStatus, setStartYearStatus] = useState<Step5State>(Step5State.Idle);
    const [endYearStatus, setEndYearStatus] = useState<Step5State>(Step5State.Idle);

    const [qualMsg, setQualMsg] = useState('');
    const [majorMsg, setMajorMsg] = useState('');
    const [institutionMsg, setInstitutionMsg] = useState('');
    const [startYearMsg, setStartYearMsg] = useState('');
    const [endYearMsg, setEndYearMsg] = useState('');

    const [data, setData] = useState([{}])
    const [allData, setAllData] = useState([])
    const [row, setRow] = useState(props.row)

    useImperativeHandle(props.ref, () => ({
        triggerSkillErrFunction: onStep5ExperienceErrMessage,

    }))
    const onStep5ExperienceErrMessage = (v) => {
        console.log("Step5Err")
    }
    useEffect(() => {
    })
    useEffect(() => {

    }, [data])

    useEffect(() => {
        //console.log('allhhhh')
    }, [row])

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const capturingRegex = /(?<fieldName>position|company|startYear|endYear)/;
        const found = name.match(capturingRegex);
        const fieldName = found.groups.fieldName;
        let temp = {}
        //setData({...data,[fieldName]:value})
        if (fieldName === 'position') {
            setPosition(value)
            // setData([...data,{'position_0': value}])

        } else if (fieldName == 'company') {
            setCompany(value)
            // setData([...data,{'company_0': value}])
        } else if (fieldName == 'startYear') {
            setStartYear(value)
        } else {
            setEndYear(value)
        }
    }
    const handleBlur = (e) => {
        e.preventDefault();
        //console.log(data)
        const { name, value } = e.target;
        console.log(`HandleBlur(${name}:${value})`)
        if (props.index === props.row) {
            setData({ ...data, [name]: value })
        } else {
            // setData([])
        }

        //setData([...data,{'position_0': value}])
        //setExperiences({company:'ffooo',responsibility:['d'],startYear:'d',endYear:'d',position:'d'})
        //dispatch(actions.updateExperience({ 'id': props.index, 'name': name, 'value': value }))
        //dispatch(actions.updateExperience(experiences))
        //dispatch(actions.updateExperience({position:'d'}))
    }

    return (
        <div className="step-container">
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Company Name<span className="asterick">*</span></label>
                    <label className="error-msg">Invalid</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Position</label>
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
            {/*}
            <div className="form-row">
                 <div className="form-group">
                    <label>Position</label>
                    <input type="text" name={"position_" + props.index} placeholder="Data Analyst" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name={"company_" + props.index}  placeholder="IBM" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                </div>
            </div>
             <div className="form-row">
                <div className="form-group">
                    <label>Start Year</label>
                    <input type="text" name={"startYear_" + props.index} placeholder="2022" defaultValue='' onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label>End Year</label>
                    <input type="text" name={"endYear_" + props.index}  placeholder="Present" defaultValue='' onChange={handleChange} onBlur={handleBlur} />
                </div>
            </div>
            */}
        </div>

    )
}
{/*
const Step31 = (props) => {

    const dispatch = useDispatch<AppDispatch>();
    const work_experience = useAppSelector(selectExperience)
    
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [endYear, setEndYear] = useState('')
    const [startYear, setStartYear] = useState('')
    //const [numberOfExperiences, setNumberOfExperiences] = useState(0)
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (name === 'position') {
            setPosition(value)
        } else if (name == 'company') {
            setCompany(value)
        } else if (name == 'startEear') {
            setStartYear(value)
        } else {
            setEndYear(value)
        }
    }
    const handleBlur = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(`HandleBlur(${name}:${value})`)
        dispatch(actions.updateExperience({ 'id': 1, 'name': name, 'value': value }))
       
    }
    return (
        <>
        <div>
          <div className="form-row">
            <div className="from-group">Professional Experience</div>
        </div>
        <div className="form-row">
                 <div className="form-group">
                    <label>Position</label>
                    <input type="text" name="position" placeholder="Data Analyst" defaultValue={position} onChange={handleChange} onBlur={handleBlur}/>
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name="company" placeholder="IBM" defaultValue={company} onChange={handleChange} onBlur={handleBlur}/>
                </div>
        </div>
        <div className="form-row">
                <div className="form-group">
                    <label>Start Year</label>
                    <input type="text" name="startYear" placeholder="2022" defaultValue={startYear} onChange={handleChange} onBlur={handleBlur} />
                </div>
                <div className="form-group">
                    <label>End Year</label>
                    <input type="text" name="endYear" placeholder="Present" defaultValue={endYear} onChange={handleChange} onBlur={handleBlur} />
                </div>
        </div>
        <Responsibilty/>
        
        </div><button onClick={handleBlur}>Add More Experience</button>
       </>
)}
*/}

const Step5 = (props) => {
    const responsibilitesRef = useRef(null);
    const dispatch = useDispatch<AppDispatch>();
    const [addOrMore, setAddOrMore] = useState("Add Your Experience")
    const [moreExperience, setMoreExperice] = useState(1);
    const initFormData = { position: '', company: '', startYear: '', endYear: '', duty: '', location: '' };
    const [formData, setFormData] = useState(initFormData)
    const [errors, setErrors] = useState({});
    const [isResponsibilitesFocused, setIsResponsibilitesFocused] = useState(false);

    const [positonState, setPositionState] = useState<Step5State>(Step5State.Idle);
    const [companyState, setCompanyState] = useState<Step5State>(Step5State.Idle);
    const [startYearState, setStartYearState] = useState<Step5State>(Step5State.Idle);
    const [endYearState, setEndYearState] = useState<Step5State>(Step5State.Idle);
    const [locationState, setLocationState] = useState<Step5State>(Step5State.Idle);
    const [dutyState, setDutyState] = useState<Step5State>(Step5State.Idle);

    const [locationMsg, setLocationMsg] = useState('');
    const [companyMsg, setCompanyMsg] = useState('');
    const [startYearMsg, setStartYearMsg] = useState('');
    const [endYearMsg, setEndYearMsg] = useState('');
    const [dutyMsg, setDutyMsg] = useState('');
    /*
     const [row,setRow ] = useState(0)
     const moreOnClick= (e) =>{
          setMoreExperice(moreExperience+ 1)
          setRow(row +1)
     }
     const addExperience1 =(e)=>{
         e.preventDefault();
         dispatch(actions.addExperience({ id: 1, company: 'd', startYear: 'dd',endYear:'d',position:'d',responsibility:'ffff' }))
         
     }
     */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleBlur = () => {
        const res = responsibilitesRef.current.value;
        setIsResponsibilitesFocused(false)
        const lines = res.split(/\r?\n/);
        const newA = lines.filter(item => item.trim() !== "")
        setFormData({ ...formData, duty: newA });
        responsibilitesRef.current.value = '';
        
    }
    const formValidation = () => {
        let newErrors = {};
        return Object.keys(newErrors).length === 0;
    }
    const addExperience = (e) => {
        e.preventDefault();
        if (formValidation) {
            dispatch(actions.addExperience(formData))
            setFormData(initFormData);
        }

        /*
        const { name, value } = e.target;
        
        const lines = value.split(/\r?\n/); 
        const newA = lines.filter(item => item.trim() !== "")
      
        dispatch(actions.addExperience({ id: 1, company: 'NVIDIA', startYear: 'Jan 2026',endYear:'Current',position:'Data Scientist',responsibility:newA}))
       */
    }
    const resetDuties = (e) => {
        dispatch(actions.resetDuties());
        setFormData(initFormData);
    }

    return (
        <div className='step-container'>
            <div className='sub-step-title'>Your Experiences1:</div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Company Name<span className="asterick">*</span></label>
                    <label className="error-msg">
                           {companyState === Step5State.Idle && <></>}
                           {companyState === Step5State.Valid && <GreenMsg />}
                           {companyState === Step5State.Invalid && <RedMsg >{companyMsg}</RedMsg>}
                    </label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Location</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>

            <div className="row-wrapper">
                <input onChange={handleChange} id="company" name='company' value={formData.company} type='text' className='input-field' placeholder='Your work company' />
                <input onChange={handleChange} id="location" name='location' value={formData.location} type='text' className='input-field' placeholder='Your location' />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Position</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            <div className="row-wrapper">
                <input onChange={handleChange} id="position" name='position' value={formData.position} type='text' className='input-field' placeholder='Your position' />

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
                <input onChange={handleChange} id="startYear" name='startYear' value={formData.startYear} type='text' className='input-field' placeholder='Your start work year' />
                <input onChange={handleChange} id="endYear" name='endYear' value={formData.endYear} type='text' className='input-field' placeholder='Your end work year' />
            </div>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="lbl-title">Responsibilities/Duties<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    <label className="error-msg">Invalid</label>
                </div>
            </div>
            <div className="row-wrapper">
                <textarea
                    ref={responsibilitesRef}
                    onFocus={() => setIsResponsibilitesFocused(true)}
                    onBlur={handleBlur}
                    defaultValue={formData.duty}
                    className="frm-textarea" name="responsibilty" id="responsibility"
                    placeholder={isResponsibilitesFocused ? "" : "Please enter your responsibities. Each responsibility must be separated by a blank line."}>
                </textarea>
            </div>
            <div className="empty-row-1">&nbsp;</div>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addExperience}>{addOrMore}</button>
                <button className="short-btn" onClick={resetDuties}>Reset Reponsibilities/Duties</button>
            </div>
        </div>
    )
    {/*}
       <div className='step-container'>
       {Array.from({length: moreExperience},(_,index) => (
            <div>
            <div className='sub-step-title'>
            Your Experiences:</div>
            <ExperienceWrapper index={index} row={row}/>
            <div className="empty-row">&nbsp;</div>
            <Responsibilty index={index}/>
            </div>
        ))}
        <button onClick={moreOnClick} className='more-btn'>Add More Experience</button>
        </div>
        */}


}

export default Step5; 