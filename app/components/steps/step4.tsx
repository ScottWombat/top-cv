//import './step-form.css';
import '~/components/css/master.css';
import Reat,{useState,useRef,useEffect,useImperativeHandle} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions,selectCareerObjectives ,selectProfessionalSummary } from '~/store/cv-reducer';
import { MsgState } from './msg-state';
import {GreenMsg,RedMsg} from '~/components/message';

const Step4 = (props) => {
    //const [career_objectives,setCareer_objectives] = useState([]);

    //const [objectivesError,setObjectivesError]= useState('');
    //const [profSummaryError,setIsProfessionalSummaryError] = useState('');
    //const [pro_summary,setPro_summary] = useState([]);
    const careerObjectivesRef = useRef(null);
    const proSummryRef = useRef(null);
    const [careerObjectiveValue,setCareerObjectiveValue] = useState('');
    const [professionalSummaryValue,setProfessionalSummaryValue] = useState('')
    //const [addLblObjective,setAddLblObjective] = useState('Add');
   // const [addLblSummary,setAddLblSummary] = useState('Add');
    //const [isCareerObjectivesFocused, setIsCareerObjectivesFocused] = useState(false);
   // const [isProfessionalSummaryFocused,setIsProfessionalSummaryFocused] = useState(false);
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
        /*
        const prof_summary_value = proSummryRef.current.value;
        const lines1 =prof_summary_value.split(/\r?\n/); 
        const prof_summary = lines1.filter(item => item.trim() !== "")
        if(prof_summary === ''){
            setIsProfessionalSummaryError("Professional Summary cannot be empty.");
            return;
        }
        */
        dispatch(actions.addProfessionalSummary(professionalSummaryValue));
        proSummryRef.current.value='';
        //setIsProfessionalSummaryError('');
        setProfessionalSummaryState(MsgState.Valid)
        setDefaultValueProf("Add more professional summary")

        //setAddLblSummary("More")
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
        //setIsProfessionalSummaryError('');

        //setAddLblSummary("More")
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
    //const onProfessionalSummaryKeyDown = (e) =>{
    //    if(e.key === 'Enter'){
    //       // alert('d')
    //        setProfessionalSummaryValue((prevText) => prevText + "/\n")
    //    }
    //}
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
            {/*}
            <div className="button-wrapper1">
            <div className="career-objectives-button" onClick={addCareerObjective}>{addLblObjective} Career Objectives</div>
            <div className="reset-button" onClick={resetCareerObjectives}>Reset</div>
            </div>
            */}
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
            {/*
             <div className="button-row-wrapper">
                <button className='short-btn'>Add Professional Summary</button>&nbsp;
                 <button className='short-btn'>Reset Professional Summary</button>
            </div>
            <div className="button-wrapper1">
            <div className="professional-summary-button" onClick={addProfessionalSummary}>{addLblSummary} Professional Summary</div>
            <div className="reset-button" onClick={resetProfessionalSummary}>Reset</div>
            </div>
            */}

        </div> 
    )
}

export default Step4;