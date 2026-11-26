import { useState, useEffect, useRef, useImperativeHandle } from 'react';
import './references.css';
import '~/components/steps/step-form.css';
import '~/components/css/master.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions, selectReferees } from '~/store/cv-reducer';
import { validateForm } from './form-validation';
//import { validateRefereeForm, validateForm } from '~/components/validate-form';

const References = ({ ref }) => {
    const refereesData = useAppSelector(selectReferees)
    // const { count } = useSelector((state) => state.cv.referees);
    const name1_Ref = useRef(null);
    const email1_Ref =  useRef(null);
    const mobile1_Ref = useRef(null)
    const name2_Ref = useRef(null);
    const email2_Ref =  useRef(null);
    const mobile2_Ref = useRef(null)

    const dispatch = useDispatch<AppDispatch>();
    const [isOpen, setIsOpen] = useState(true);
    //const [isSkip, setIsSkip] = useState(false);
    //const [refereeIndex, setRefereeIndex] = useState(0)
    const [referees, setReferees] = useState([]);
    const [refereesStatus,setRefereesStatus] = useState<boolean>(false);
    const [formData, setFormData] = useState([
        { id: "1", name: '', email: '', mobile: '' },
        { id: "2", name: '', email: '', mobile: '' }
    ]);
    const [errs, setErrs] = useState(
        { name_1: '', email_1: '', mobile_1: '', name_2: '', email_2: '', mobile_2: ''}
    )
    const [htmlString,setHtmlString] = useState<string>(`<p>&nbsp;</p>`)
    //useEffect(() =>{

    // },referees)
    useEffect(() => {

        // const referee = { id: refereeIndex, name: formData.name, email: formData.email, mobile: formData.mobile };
        // setFormData({ id: 0,name: '', email: '', mobile: '' })
        //(refereeIndex)
        //console.log(formData)
        dispatch(actions.addReferee(formData))
    }, [formData])

    useEffect(()=>{
        console.log(errs)
    },[errs])

    useImperativeHandle(ref, () => ({
        triggerChildFunction: onRefereeMessage
    }))
    const onRefereeMessage = (refereesStatus) => {
      console.log("OnrefereeMessage")
      setRefereesStatus(refereesStatus)
      if(refereesStatus){
        //setMsg("Language is requireddddd")
        setHtmlString(`<p>Referee is required`)
      }else{
        setHtmlString(`<div>\u2713</div>`)
      } 
    }
   // const onRefereeMessage = (err_name, err_email, err_mobile) => {
   //     setErrs({ ref_name: err_name, ref_email: err_email, ref_mobile: err_mobile })
   // }
    const skipOnClick = () => {
        setIsOpen(!isOpen)
        dispatch(actions.updateRefereesSkipStatus())
    };
    const handleChange = (e) => {
        //console.log("hendle")
        const { id, name, value } = e.target;
        //console.log(`${id} ${name} ${value}`)
        const refId = id.slice(-1); // "t"
        let err = validateForm(name,value);
        //console.log(":" +err+":")
        //if(err !== ''){
            setErrs((prevError) =>({
                    ...prevError,
                     [id]:(err !== '' ? <>{err}</> : <div className="check-mark">{'\u2713'}</div>)
        }))
        //}
        
        setFormData(prevForm =>
            prevForm.map(form =>
            form.id === refId
                    ? { ...form, [name]: value } // Return a new updated object
                    : form                           // Leave other objects unchanged
            )
        );
        
    
        /*
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))

        let fieldName = "";
        let ref_tag =""
        if(name==='name'){
            fieldName='name'
            ref_tag='ref_name'
        }else if(name==='email'){
            fieldName='email'
            ref_tag='ref_email'
        }else if(name==='mobile'){
            fieldName='mobile'
            ref_tag='ref_mobile'
        }else{}
        let err = validateForm(name,value);
        setErrs((prevError) =>({
                    ...prevError,
                     [ref_tag]:(err ? <>{err}</> : <div className="check-mark">{'\u2713'}</div>)
        }))
        */
        /*
        setErrs((prevError) =>({
                    ...prevError,
                    [ref_tag]: (value? <div className="check-mark">{'\u2713'}</div>:<>Referee ${fieldName} is required.</>)
        }))
        */

    };
    const handleAsync = async () => {
        //let errs = validateRefereeForm(formData);

        //if (errs == null || Object.keys(errs).length === 0) {
        //    let index = refereeIndex + 1;
        //    setRefereeIndex(refereeIndex + 1)
       // } else {
       //     setErrs(errs)
      //  }

    }
    const addReferee = (e) => {
        e.preventDefault();

        //handleAsync()

    }
    const resetReferee = (e) => {
        e.preventDefault();
        dispatch(actions.resetReferees())
        //setReferees([])
        name1_Ref.current.value="";
        mobile1_Ref.current.value="";
        email1_Ref.current.value="";
        name2_Ref.current.value="";
        mobile2_Ref.current.value="";
        email2_Ref.current.value ="";
      
    }
    const removeReferee = (id) => {
        dispatch(actions.removeReferee({ 'id': id }))
        let newArray = referees.filter((_, index) => index !== id)
        setReferees(newArray)
    }
    return (
        <div className='ref-container'>
            
            <span className='ref-skip'>
            
                <div className='step-title'>References</div>
                <div className="ref-skip-group">
                    <input type="checkbox" id="skip1" onClick={skipOnClick} />
                    <label htmlFor="skip1">Skip</label>
                    
                </div>
                <div className={`error-msg1 ${refereesStatus? '' : 'green-msg1'}`}>
                 
                       <div dangerouslySetInnerHTML={{ __html: htmlString }} />
             
                </div>

            </span>
            <div className={`slide-container ${isOpen ? "open" : ""}`}>
                <div className="sub-step-title">
                    1 Referees:
                </div>
                <div className='header-row-wrapper'>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Name<span className="asterick">*</span></label>
                        <label className="error-msg">&nbsp;</label>
                    </div>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">&nbsp;</label>
                        <label className="error-msg">{errs.name_1}</label>
                    </div>
                </div>
                <div className="row-wrapper">
                    <input ref={name1_Ref} key={'name_1'} id="name_1" name="name" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee name' />
                </div>
                <div className='header-row-wrapper'>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Email<span className="asterick">*</span></label>
                        <label className="error-msg">{errs.email_1}</label>
                    </div>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Mobile<span className="asterick">*</span></label>
                        <label className="error-msg">{errs.mobile_1}</label>
                    </div>
                </div>
                <div className="row-wrapper">
                    <input ref={email1_Ref} key={'email_1'} id="email_1" name="email" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee email' />
                    <input ref={mobile1_Ref} key={'mobile_1'} id="mobile_1" name="mobile" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee mobile' />
                </div>
                <br />
                <div className="sub-step-title">
                    2 Referees:
                </div>
                <div className='header-row-wrapper'>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Name<span className="asterick">*</span></label>
                        <label className="error-msg">&nbsp;</label>
                    </div>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">&nbsp;</label>
                        <label className="error-msg">{errs.name_2}</label>
                    </div>
                </div>
                <div className="row-wrapper">
                    <input ref={name2_Ref} key={'name_2'} id="name_2" name="name" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee name' />
                </div>
                <div className='header-row-wrapper'>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Email<span className="asterick">*</span></label>
                        <label className="error-msg">{errs.email_2}</label>
                    </div>
                    <div className="lbl-wrapper">
                        <label className="lbl-title">Mobile<span className="asterick">*</span></label>
                        <label className="error-msg">{errs.mobile_2}</label>
                    </div>
                </div>
                <div className="row-wrapper">
                    <input ref={email2_Ref} key={'email_2'} id="email_2" name="email" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee email' />
                    <input ref={mobile2_Ref} key={'mobile_2'} id="mobile_2" name="mobile" onBlur={handleChange} type='text' className='input-field' placeholder='Your referee mobile' />
                </div>


            <br/>
            <div className="empty-row-1"></div>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addReferee}>Add Referee</button>
                <button className="short-btn" onClick={resetReferee}>Reset Referee</button>
            </div>
            
            </div>
            {/*
            <div className={`slide-container ${isOpen ? "open" : ""}`}>
                <div className="sub-step-title">Your referees:</div>
                
                {referees.map((data, index) => (
                    <div className="ref-row">
                        <div>{data.name}</div>
                        <div style={{ textAlign: 'left' }}>{data.email}</div>
                        <div style={{ textAlign: 'left' }}>{data.mobile}</div>
                        <div style={{ textAlign: 'center', marginRight: '20px' }} onClick={() => removeReferee(data.id)}>Remove</div>
                    </div>
                ))}
                
                <div style={{ lineHeight: '20px' }}>&nbsp;</div>
                <form className="ref-form">
                    <div className="ref-form-group">
                        <label htmlFor="name">Name</label>
                        <input ref={inputRef} type='text' className='ref-name-field'
                            onChange={(e) => onChange(e)} value={formData.name}
                            placeholder='Please enter your skills or tools.' />
                        <input ref={inputRef} id="name" type="text" onChange={(e) => onChange(e)} value={formData.name}/>
                    </div>
                    <div className='header-row-wrapper'>
                        <div className="lbl-wrapper">
                            <label className="lbl-title">Email<span className="asterick">*</span></label>
                            <label className="error-msg">Invalid</label>
                        </div>
                        <div className="lbl-wrapper">
                            <label className="lbl-title">Mobile<span className="asterick">*</span></label>
                            <label className="error-msg">Invalid</label>
                        </div>
                    </div>
                    <div className='row-wrapper'>
                        <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
                        <input type='text' className='input-field' placeholder='Please enter your skills or tools."' />
                    </div>
                    <div className='form-row-wrapper'>
                        <div className="form-row">
                            <div className="form-group">
                                <input ref={skillsRef} type="text" name={"skills" + props.index} placeholder="Add your skill and and click 'Add skills' button" defaultValue='' onChange={handleChange} onBlur={handleBlur}/>
                                <button className='short-btn'>Add Referee</button>
                            </div>
                        </div>
                    </div>
                   
                    <div className="ref-form-group">
                        <div className='ref-form-split'>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="text" onChange={(e) => onChange(e)} value={formData.email}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input id="mobile" type="text" onChange={(e) => onChange(e)} value={formData.mobile}/>
                            </div>
                        </div>
                        <button onClick={addReferee}>Add Referee</button>
                    </div>
                    
                </form>

            </div>
            */}
        </div >
    )

}
export default References;