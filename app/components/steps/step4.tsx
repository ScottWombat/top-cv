//import './step-form.css';
import '~/components/css/master.css';
import Reat,{useState,useRef,useEffect,useImperativeHandle} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions } from '~/store/cv-reducer';
import { MsgState } from './msg-state';
import {GreenMsg,RedMsg} from '~/components/message';

const Step4 = (props) => {

    const careerObjectivesRef = useRef(null);
    const proSummryRef = useRef(null);
    const [careerObjectiveValue,setCareerObjectiveValue] = useState('');
    const [professionalSummaryValue,setProfessionalSummaryValue] = useState('')
  
    const dispatch = useDispatch<AppDispatch>();
    const [careerObjectivesState, setCareerObjectivesState] = useState<MsgState>(MsgState.Idle);
    const [professionalSummaryState, setProfessionalSummaryState] = useState<MsgState>(MsgState.Idle);
    const [defaultValueCareer,setDefaultValueCareer] = useState("Please enter your career objectives")
    const [defaultValueProf,setDefaultValueProf] = useState("Please enter your professional summary")
    useEffect(()=>{
        console.log(professionalSummaryValue)
    })
    useImperativeHandle(props.ref,() =>({
                triggerCareerErrFunction: onStep4CareerErrMessage,
                
    }))
    const onStep4CareerErrMessage =(v)=>{
       
        setCareerObjectivesState(v.career)
        setProfessionalSummaryState(v.prof)
        
    }
    const addCareerObjective = () =>{
        const careerObjectivesValue = careerObjectivesRef.current.value;
        const lines = careerObjectivesValue.split(/\r?\n/); 
        const careerObjectives = lines.filter(item => item.trim() !== "")
        if(careerObjectives ===''){
            //setObjectivesError("Career Objectives cannot not be empty.");
            setCareerObjectivesState(MsgState.Invalid)
            return;
        }
        dispatch(actions.addCareerObjective(careerObjectives))
        careerObjectivesRef.current.value ='';
        //setObjectivesError("");
        setCareerObjectivesState(MsgState.Valid)
        setDefaultValueCareer("Add more career objectives")
        //setAddLblObjective("More")
    }
    const addProfessionalSummary = () =>{
        
        dispatch(actions.addProfessionalSummary(professionalSummaryValue));
        proSummryRef.current.value='';

        setProfessionalSummaryState(MsgState.Valid)
        setDefaultValueProf("Add more professional summary")

    }
    const addProfessionalSummary_old = () =>{
        const prof_summary_value = proSummryRef.current.value;
        const lines1 =prof_summary_value.split(/\r?\n/); 
        const prof_summary = lines1.filter(item => item.trim() !== "")
        if(prof_summary === ''){
            //setIsProfessionalSummaryError("Professional Summary cannot be empty.");
            setProfessionalSummaryState(MsgState.Invalid)
            return;
        }
        dispatch(actions.addProfessionalSummary(prof_summary));
        proSummryRef.current.value='';
        
    }
    const resetCareerObjectives =()=>{
        dispatch(actions.clearCareerObjectives())
    }
    const resetProfessionalSummary = () =>{
        dispatch(actions.clearProfessionalSummary())
    }
    const updateCareerObjectives = (e) =>{
        setCareerObjectiveValue(e.target.value)
    }
    const updateProfessionalSummary = (e) =>{
        setProfessionalSummaryValue(e.target.value)
    }
    
    return (
        <div className='step-container'>
            <div className="empty-row">&nbsp;</div>
            <div className="button-wrapper1">
                    <label className="lbl-title">Career Objectives<span className="asterick">*</span>&nbsp;
                    <span className='tooltip_container'>?
                        <span className="tooltip_text">
                        This is a much larger tooltip box that can hold a lot more content, descriptions, or helper text when you hover over the main element.
                        </span>
                    </span>
                    </label>
                    <label className="error-msg">
                         {careerObjectivesState === MsgState.Idle && <>&nbsp;</>}
                         {careerObjectivesState === MsgState.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                         {careerObjectivesState === MsgState.Invalid && <RedMsg >Career Objectives is required</RedMsg>}
                    </label>
            </div>
            <textarea defaultValue={careerObjectiveValue} 
                    ref={careerObjectivesRef} className="frm-textarea" id="career_objective" 
                    name="career_objective" 
                    placeholder={defaultValueCareer}
                    onBlur={updateCareerObjectives}>
            </textarea>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addCareerObjective}>More Career Objectives</button>
                <button className="short-btn">Reset Career Objectives</button>
            </div>
            
            <div className="empty-row">&nbsp;</div>
            <div className="button-wrapper1">
                    <label className="lbl-title" >Prefessional Summary<span className="asterick">*</span>&nbsp;
                     <span className='tooltip_container'>?
                        <span className="tooltip_text">
                        This is a much larger tooltip box that can hold a lot more content, descriptions, or helper text when you hover over the main element.
                        </span>
                    </span>
                    </label>
                    <label className="error-msg">
                         {professionalSummaryState === MsgState.Idle && <>&nbsp;</>}
                         {professionalSummaryState === MsgState.Valid && <GreenMsg>{'\u2713'}</GreenMsg>}
                         {professionalSummaryState === MsgState.Invalid && <RedMsg >Professional Summary is required</RedMsg>}
                    </label>
            </div>
            <textarea ref={proSummryRef} className="frm-textarea" id="professional_summary" 
                    name="professional_summary" 
                    placeholder={defaultValueProf }
                    onBlur={updateProfessionalSummary}>
            </textarea>
            
            <div className="empty-row-1">&nbsp;</div>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addProfessionalSummary}>Add Professional Summary</button>
                <button className="short-btn" onClick={resetProfessionalSummary}>Reset Professional Summary</button>
            </div>
            

        </div> 
    )
}

export default Step4;