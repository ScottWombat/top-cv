//import './step-form.css';
import '~/components/css/master.css';
import Reat,{useState,useRef,useEffect,useImperativeHandle} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions,selectPersonInfo } from '~/store/cv-reducer';

const Step4 = (props) => {
    //const [career_objectives,setCareer_objectives] = useState([]);
    const [objectivesError,setObjectivesError]= useState('');
    const [profSummaryError,setIsProfessionalSummaryError] = useState('');
    const [pro_summary,setPro_summary] = useState([]);
    const careerObjectivesRef = useRef(null);
    const proSummryRef = useRef(null);
    const [careerObjectiveValue,setCareerObjectiveValue] = useState('');
    const [professionalSummaryValue,setProfessionalSummaryValue] = useState('')
    const [addLblObjective,setAddLblObjective] = useState('Add');
    const [addLblSummary,setAddLblSummary] = useState('Add');
    const [isCareerObjectivesFocused, setIsCareerObjectivesFocused] = useState(false);
    const [isProfessionalSummaryFocused,setIsProfessionalSummaryFocused] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const personInfoData = useAppSelector(selectPersonInfo)
    useEffect(()=>{
        console.log(professionalSummaryValue)
    })
    useImperativeHandle(props.ref,() =>({
                triggerCareerErrFunction: onStep4CareerErrMessage,
                
    }))
    const onStep4CareerErrMessage =(v)=>{
            console.log("Step4Err")
    }
    const addCareerObjective = () =>{
        const careerObjectivesValue = careerObjectivesRef.current.value;
        const lines = careerObjectivesValue.split(/\r?\n/); 
        const careerObjectives = lines.filter(item => item.trim() !== "")
        if(careerObjectives ===''){
            setObjectivesError("Career Objectives cannot not be empty.");
            return;
        }
        dispatch(actions.addCareerObjective(careerObjectives))
        careerObjectivesRef.current.value ='';
        setObjectivesError("");
        setAddLblObjective("More")
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
        setIsProfessionalSummaryError('');
        setAddLblSummary("More")
    }
    const addProfessionalSummary_old = () =>{
        const prof_summary_value = proSummryRef.current.value;
        const lines1 =prof_summary_value.split(/\r?\n/); 
        const prof_summary = lines1.filter(item => item.trim() !== "")
        if(prof_summary === ''){
            setIsProfessionalSummaryError("Professional Summary cannot be empty.");
            return;
        }
        dispatch(actions.addProfessionalSummary(prof_summary));
        proSummryRef.current.value='';
        setIsProfessionalSummaryError('');
        setAddLblSummary("More")
    }
    const resetCareerObjectives =()=>{
        dispatch(actions.clearCareerObjectives())
    }
    const resetProfessionalSummary = () =>{
        dispatch(actions.clearProfessionalSummary())
    }
    const updateProfessionalSummary = (e) =>{
        setProfessionalSummaryValue(e.target.value)
    }
    const onProfessionalSummaryKeyDown = (e) =>{
        if(e.key === 'Enter'){
           // alert('d')
            setProfessionalSummaryValue((prevText) => prevText + "/\n")
        }
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
                    <label className="error-msg">{objectivesError}</label>
            </div>
            <textarea defaultValue={careerObjectiveValue} 
                    ref={careerObjectivesRef} className="frm-textarea" id="career_objective" 
                    name="career_objective" 
                    placeholder={isCareerObjectivesFocused ? "" : "Please enter your career objectives." }
                    onFocus={() => setIsCareerObjectivesFocused(true)}
                    onBlur={() => setIsCareerObjectivesFocused(false)}>
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
                    <label className="error-msg">{profSummaryError}</label>
            </div>
            <textarea ref={proSummryRef} className="frm-textarea" id="professional_summary" 
                    name="professional_summary" 
                    placeholder={isProfessionalSummaryFocused ? "" : "Please enter your profession summary." }
                    onChange={updateProfessionalSummary}
                    onKeyDown={onProfessionalSummaryKeyDown}
                    onFocus={() => setIsProfessionalSummaryFocused(true)}
                    onBlur={() => setIsProfessionalSummaryFocused(false)}>
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