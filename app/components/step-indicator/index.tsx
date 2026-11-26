import { useState, useEffect } from 'react';
import './index.css'
const StepIndicator = (props) => {
  
    const [step1, setStep1] = useState("step active")
    const [step2, setStep2] = useState("step")
    const [step3, setStep3] = useState("step")
    const [step4, setStep4] = useState("step")
    const [step5, setStep5] = useState("step")
    const [step6, setStep6] = useState("step")
    const [step7, setStep7] = useState("step")
    // if(props.currentPage ===1){
    //     setStep("step active")
    // }
    useEffect(() => {
        if (props.currentPage === 1) {
            setStep1("step active")
            setStep2("step")
            setStep3("step")
            setStep4("step")
            setStep5("step")
            setStep6("step")
            setStep7("step")
        } else if (props.currentPage === 2) {
            setStep1("step completed")
            setStep2("step active")
            setStep3("step")
            setStep4("step")
            setStep5("step")
            setStep6("step")
            setStep7("step")
        } else if (props.currentPage === 3) {
            setStep1("step completed")
            setStep2("step completed")
            setStep3("step active")
            setStep4("step")
            setStep5("step")
            setStep6("step")
            setStep7("step")
        } else if (props.currentPage === 4) {
            setStep1("step completed")
            setStep2("step completed")
            setStep3("step completed")
            setStep4("step active")
            setStep5("step")
            setStep6("step")
            setStep7("step")
        } else if (props.currentPage === 5) {
            setStep1("step completed")
            setStep2("step completed")
            setStep3("step completed")
            setStep4("step completed")
            setStep5("step active")
            setStep6("step")
            setStep7("step")
        } else if (props.currentPage === 6) {
            setStep1("step completed")
            setStep2("step completed")
            setStep3("step completed")
            setStep4("step completed")
            setStep5("step completed")
            setStep6("step active")
            setStep7("step")
        } else if (props.currentPage === 7) {
            setStep1("step completed")
            setStep2("step completed")
            setStep3("step completed")
            setStep4("step completed")
            setStep5("step completed")
            setStep6("step completed")
            setStep7("step active")
        }
    }, [props.currentPage])
    return (
        <div className="step-indicator">
            
            <div className="step-indicator-progress" id={`progressBar${props.currentPage}`}></div>
            {/*<div className={props.currentPage===1?"step active":"step completed"} data-step="1">*/}
            <div className={step1}>
                <div className="step-circle"></div>
                <div className="step-label">Person Info</div>
            </div>
             <div className={step2}>
                <div className="step-circle"></div>
                <div className="step-label">Education</div>
            </div>
             <div className={step3}>
                <div className="step-circle"></div>
                <div className="step-label">Skills</div>
            </div>
            <div className={step4}>
                <div className="step-circle"></div>
                <div className="step-label">Objectives</div>
            </div>
            <div className={step5}>
                <div className="step-circle"></div>
                <div className="step-label">Experience</div>
            </div>
           
            {/*}
            <div className={step5}>
                <div className="step-circle"></div>
                <div className="step-label">Skills</div>
            </div>
            */}
           
            <div className={step6}>
                <div className="step-circle"></div>
                <div className="step-label">Complete</div>
            </div>

        </div>
    )
}

export default StepIndicator;