import { useState,useEffect,useRef } from "react";
import { useNavigate,Outlet,useSearchParams} from "react-router";
import { useReactToPrint } from 'react-to-print';
import * as C from './createcv.styled';
import ColorMenu from "~/components/color-menu";
import TemplateLoader from "~/utils/template-loader";
import { getDefaultColor } from '~/store/color-scheme-reducer';
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { selectCareerObjectives ,selectProfessionalSummary ,selectExperiences,selectEducation,selectLanguages,selectReferees, selectPersonInfo,selectRefereesSkip } from '~/store/cv-reducer'
import Printer from '~/components/printer';
import StepIndicator from "~/components/step-indicator";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '~/components/steps';
import { validatePersonInfo } from "~/utils/store-validate";
import { MsgState } from '~/components/steps/msg-state';
const Entry = (props) =>{
    const careerObjectives = useAppSelector(selectCareerObjectives)
    const professionalSummary = useAppSelector(selectProfessionalSummary)
    const [currentPage,setCurrentPage]= useState(1)
    const [boxshadow,setBoxshadow]= useState(true);
    const defaultColorScheme = useAppSelector(getDefaultColor);
    
    const [colorScheme,setColorScheme] = useState(defaultColorScheme)
    const personInfo = useAppSelector(selectPersonInfo)
    const templateRef = useRef(null);
    const step1Ref = useRef(null);
    const step2Ref = useRef(null);
    const step3Ref = useRef(null);
    const step4Ref = useRef(null);
    const step5Ref = useRef(null);
    let [params] = useSearchParams();
    console.log("Ee")
    console.log(params.get("templaeId"))
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
     const onStep1PersonInfoErrMessage =(onError)=>{
        if (step1Ref.current) {
            //step1Ref.current.triggerLangErrFunction(errsMsg.languages);
            //step1Ref.current.triggerRefereeErrFunction(errsMsg.referees);
            step1Ref.current.triggerPersonInfoErrFunction(onError)
        }        
    }
    const onNextClick = () => {
        console.log("CUreent")
        console.log(currentPage)
        if(currentPage ===10){
            /*
            if(personInfo.position === null &&
               personInfo.firstName === null &&
               personInfo.lastName === null &&
               personInfo.mobile === null &&
               personInfo.email === null &&
               personInfo.address === null){
               onStep1PersonInfoErrMessage(true)
               return;
            }
            */
          // let re = 
            let valid = validatePersonInfo(personInfo)
            if(!valid){
                onStep1PersonInfoErrMessage(true)
                return ;
            }
        }else if(currentPage === 4){
            let career_objectives_state = MsgState.Idle;
            let professional_summary_state = MsgState.Idle;
            let career_objectives_invalid = false
            let professional_summary_invalid = false;
            console.log(careerObjectives.length)
            if(careerObjectives.length === 0){
                career_objectives_invalid = true
            }
            console.log(professionalSummary.length)
            if(professionalSummary.length === 0){
                professional_summary_invalid = true;
            }
            if (step4Ref.current) {
                if(career_objectives_invalid && professional_summary_invalid){
                    step4Ref.current.triggerCareerErrFunction({career:MsgState.Invalid,prof:MsgState.Invalid});
                    return;
                }else if (career_objectives_invalid || professional_summary_invalid){
                     step4Ref.current.triggerCareerErrFunction({career:MsgState.Invalid,prof:MsgState.Invalid});
                    return;
                }
            }  
        }
        setCurrentPage(currentPage+1)
    }
    const onBackClick = () => {
        setCurrentPage(currentPage - 1)
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
                {currentPage == 1 && <Step1 ref={step1Ref} imageRequired={props.isImageProfileRequired} />}
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
                        <a href="#"  onClick={onNextClick} >
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
                            <TemplateLoader boxshadow={boxshadow} bgImage={params.get("bgImage")} colorScheme={colorScheme} imagestyle={params.get("imagestyle")} id={params.get("id")} templateId={params.get("templateId")} isImageProfileRequired={params.get("isImageProfileRequired")} type={params.get("type")} title={"Create CV"}/>
                          </div>
                    </C.Row2>
                </C.RightContainer>

        </C.RightColumn>
    </C.CreateContainer>
    </>
    )
}

export default Entry;