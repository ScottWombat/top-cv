import { useState,useEffect,useRef } from "react";
import { useNavigate,Outlet,useSearchParams} from "react-router";
import { useReactToPrint } from 'react-to-print';
import * as C from './createcv.styled';
import ColorMenu from "~/components/color-menu";
import TemplateLoader from "~/utils/template-loader";
import { getDefaultColor } from '~/store/color-scheme-reducer';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { selectExperiences,selectEducation,selectLanguages,selectReferees, selectPersonInfo,selectRefereesSkip } from '~/store/cv-reducer'
import Printer from '~/components/printer';
import StepIndicator from "~/components/step-indicator";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '~/components/steps';

const CreateCV = (props) =>{
    const experiences = useAppSelector(selectExperiences);
    const educations = useAppSelector(selectEducation);
    const langs = useAppSelector(selectLanguages);
    const referees = useAppSelector(selectReferees);
    const refereesSkip = useAppSelector(selectRefereesSkip);
    const personInfo = useAppSelector(selectPersonInfo)
    const [boxshadow,setBoxshadow]= useState(true);
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);
    const step5Ref = useRef(null);
    const [enabledNextButton,setEnabledNextButton] = useState(true);
    const pages = { 1: "Person Info", 2: "Education",3: "Skills", 4: "Objective",5: "Experience",6: "Complete"}
    const [currentPage, setCurrentPage] = useState(1);
    const defaultColorScheme = useAppSelector(getDefaultColor);
    const [colorScheme,setColorScheme] = useState(defaultColorScheme)
    const navigate = useNavigate();
    let [params] = useSearchParams();
    let valid = params.has("id")
    const templateRef = useRef(null);
    const [formErrs,setFormErrs] = useState(null)
    const go = () =>{
        navigate("/templates", { replace: true });
    }
    useEffect(()=>{
        !valid && go();
    },[]);
    
    const onStep1ErrMessage =(errsMsg)=>{
        if (step1Ref.current) {
            step1Ref.current.triggerLangErrFunction(errsMsg.languages);
            step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
            step1Ref.current.triggerPersonInfoErrFunction(errsMsg.personInfo)
        }        
    }
    const onStep2ErrMessage =(v)=>{
        if (step2Ref.current) {
            console.log("Step2")
            step2Ref.current.triggerEducationErrFunction(v);
            //step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
           // step1Ref.current.triggerPersonInfoErrFunction(errsMsg.personInfo)
        }        
    }
    const onStep3ErrMessage =(v)=>{
        if (step3Ref.current) {
           step3Ref.current.triggerSkillErrFunction(v);
           // step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
           // step1Ref.current.triggerPersonInfoErrFunction(errsMsg.personInfo)
        }        
    }
    const onStep4ErrMessage =(v)=>{
        if (step4Ref.current) {
            step4Ref.current.triggerCareerErrFunction(v);
            //step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
            //step1Ref.current.triggerPersonInfoErrFunction(errsMsg.personInfo)
        }        
    }
    const onStep5ErrMessage =(v)=>{
      
        if (step5Ref.current) {
            step5Ref.current.triggerExperienceErrFunction(v);
           // step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
            //step1Ref.current.triggerPersonInfoErrFunction(errsMsg.personInfo)
        }        
    }
    const onCreateCVAction = () =>{

    }
    const onBackClick = () => {
        setCurrentPage(currentPage - 1)
    }
    const onNextClick = () => {
        console.log("CUreent")
        console.log(currentPage)
       
        if(currentPage===5){
          if(experiences.length==0){
            onStep5ErrMessage(true)
            return;
          }
        }
        /*
        if(currentPage == 1){
            
            let err1 = validateStep1()
            let vals = Object.values(err1); 
            let inErr = false;
            for (var val of vals){
                if(val){
                    inErr = val;
                    break;
                }
            }
            if(inErr){
                onStep1ErrMessage(err1)
                return;
            }
            
            
        }else if (currentPage ===2){
                if(educations.length==0){
                    onStep2ErrMessage(true)
                    setCurrentPage(currentPage)
                    return;
                }else{
                    onStep2ErrMessage(false)
                }
        }else if( currentPage ===3){
                onStep3ErrMessage(true)
        }else if(currentPage === 4){
                onStep4ErrMessage(true)
        }else if (currentPage ===5){
                onStep5ErrMessage(true)
        }else{

        }
        */
        setCurrentPage(currentPage + 1)
    }
    const validateStep1 =() =>{
        
        let langs1: any[] = langs.filter((lang) => lang.checked == true).map((lang)=> lang.name)
        let errInLang = langs1.length === 0? true : false;
        let errInReferees = false;
        if(!refereesSkip){
           referees.map((referee) =>{
                if (referee.name === '' || referee.email === '' || referee.mobile === ''){
                    errInReferees = true;
                }
           })
        }
        let errInPersonInfo = false;
        
        if(personInfo.position === null || personInfo.firstName === null || personInfo.lastName === null ||
            personInfo.email === null || personInfo.mobile === null || personInfo.address === null
        ){
            errInPersonInfo = true;
        }
        
        return {personInfo:errInPersonInfo,languages:errInLang,referees:errInReferees}
    }

    const validateStep2 =() =>{

    }
    const handlePrint= useReactToPrint({
        documentTitle: 'RRR1',
        contentRef: templateRef,
        pageStyle: `
             @page { 
                size: 210mm 297mm;
                margin-top: 120mm !important;    /* Keeps space at the top of NEXT pages */
                margin-bottom: 20mm !important; /* Keeps space at the bottom of pages */
                margin-left: 15mm;
                margin-right: 15mm;
             }
             @media print{
                body{
                    -webkit-print-color-adjust: exact;
                    print-color-adjust:exact !important;
                }
                .page-break {
                    display: block !important;
                    break-before: page; /* Standard property for forcing a new page */
                }
                .testw{
                  display:block !important;
                  height:80px;
                }    
             }
        `,
    });
    
    const printToPdf = (e) =>{
        e.preventDefault();
        //setLineBreak(true);
        setBoxshadow(false)
        handlePrint();
       // setLineBreak(false);
    }

    return (
        <>
        <C.CreateContainer>
            <C.LeftColumn>
                <StepIndicator currentPage={currentPage}/>
                <C.StepsSection>
                    <C.Header>
                        <C.Name>Step{props.isImageProfileRequired}</C.Name>
                        <C.Circle>{currentPage}</C.Circle>
                        
                    </C.Header>
                    {currentPage == 1 && <Step1 ref={step1Ref} imageRequired={props.isImageProfileRequired} formErrors={formErrs} onAction={onCreateCVAction}/>}
                    {currentPage == 2 && <Step2 ref={step2Ref} currentPage={currentPage} handleChange={props.handleChange} resume={props.resume} />}
                    {currentPage == 3 && <Step3 ref={step3Ref} currentPage={currentPage} handleChange={props.handleChange} resume={props.resume} />}
                    {currentPage == 4 && <Step4 ref={step4Ref} currentPage={currentPage} handleChange={props.handleChangeStep} resume={props.resume} />}
                    {currentPage == 5 && <Step5 ref={step5Ref} currentPage={currentPage} handleChange={props.handleChangeStep1} resume={props.resume} />}
                    {currentPage == 6 && <Step6 imageRequired={true} currentPage={currentPage} handleChange={props.handleChangeStep1} resume={props.resume} />}
                    <div className="button-wrapper">
                        <div className="button-left">
                        { currentPage > 1 &&
                        <a href="#" className="back-link" onClick={onBackClick}>
                        <span className="arrow">←</span>Back to Step {currentPage - 1}
                        </a>
                        }
                        </div>
                    
                        <div className="button-right">
                        <a href="#" className={enabledNextButton ? "forward-link" : "disabled-forward-link" } onClick={onNextClick} style={{pointerEvents:enabledNextButton ? 'auto': 'none'}}>
                        <span> Next to Step {currentPage + 1}</span>
                        <span className="arrow1">&#8594;</span>  
                        </a>
                        </div>
                    </div>
                </C.StepsSection>
            </C.LeftColumn>
            <C.RightColumn>
                <C.RightContainer>
                    <C.Row1>
                        <C.Left>
                            <C.ColorWrapper>
                                <C.ColorLabel>Color Scheme:</C.ColorLabel>
                                <ColorMenu />
                            </C.ColorWrapper>
                            
                        </C.Left>
                        <C.Right1 onClick={printToPdf}><Printer/></C.Right1>
                    </C.Row1>
                    <C.Row2 >
                           <div ref={templateRef}>
                          <TemplateLoader boxshadow={boxshadow} bgImage={params.get("bgImage")} colorScheme={colorScheme} imagestyle={params.get("imagestyle")} id={params.get("id")} templateId={params.get("templaeId")} isImageProfileRequired={params.get("isImageProfileRequired")} type={params.get("type")} title={"Create CV"}/>
                          </div>
                    </C.Row2>
                </C.RightContainer>

            </C.RightColumn>
        </C.CreateContainer>
        </>
     )
      
}

export default CreateCV;