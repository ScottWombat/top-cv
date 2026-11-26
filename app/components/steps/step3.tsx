//import './step.css';
//import './step-form.css';
import '~/components/css/master.css';

import { actions,selectSkills} from '~/store/cv-reducer'
import { useDispatch} from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import TrashBin from '~/components/trash-bin';
import Skills from '~/components/skills'
import { useState, useRef,useEffect, useImperativeHandle} from "react";
import personSkillsData from '~/components/json/personal-skills.json';
import technicalSkillsData from '~/components/json/technical-skills.json';
import programmingSkillsData from '~/components/json/programming-skills.json';
import databaseSkillsData from '~/components/json/database-skills.json';
const Step3 = (props) => {
   
    const personInputRef = useRef(null);
    const technicalInputRef = useRef(null);
    const proInputRef = useRef(null);
    const dbInputRef = useRef(null);
    const checkBoxPersonalRef = useRef<HTMLInputElement[]>([])
    const checkBoxTechnicalRef = useRef<HTMLInputElement[]>([])
    const checkBoxProgrammingRef = useRef<HTMLInputElement[]>([])
    const checkBoxDBRef = useRef<HTMLInputElement[]>([])
    const [personData, setPersonData] = useState(personSkillsData);
    const [technicalData,setTechnicalData] = useState(technicalSkillsData);
    const [programmingData,setProgrammingData] = useState(programmingSkillsData);
    const [databaseData,setDatabaseData] = useState(databaseSkillsData);
    const [databaseOtherOpen,setDatabaseOtherOpen] = useState(false)
    const [programmingOtherOpen,setProgrammingOtherOpen] = useState(false)
    const [technicalOtherOpen,setTechnicalOtherOpen] = useState(false)
    const [personOtherOpen,setPersonOtherOpen] = useState(false)
    const [technicalOpen,setTechnicalOpen]= useState(false)

    const dispatch = useDispatch<AppDispatch>();
    const skills = useAppSelector(selectSkills)
    //const colors = useAppSelector(getColors);
    const [index,setIndex] = useState(0)
    const [data,setData] = useState([{}])
    const skillsRef = useRef(null);
    if (props.currentPage !== 3) {
        return null;
    }
    useImperativeHandle(props.ref,() =>({
                triggerSkillErrFunction: onStep3SkillErrMessage,
                
    }))
    const onStep3SkillErrMessage =(v)=>{
            console.log("Step3Err")
    }
   
    const handleBlur = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        dispatch(actions.addSkills(value))
    }
    const onClick = (e) =>{
        e.preventDefault();
        skillsRef.current.value='';
        console.log('skills')
        console.log(skills)
        alert('d')
    }
    const trashOnClick = (ind,e) =>{
        e.preventDefault();
         dispatch(actions.removeSkills({'index': ind}))
    }

    const handlePersonChange = (e) =>{
        const {name,value} = e.target; 
        if(e.target.name ==="Other Personal Skill"){
            setPersonOtherOpen(!personOtherOpen)
        }else{
            setPersonData((pd) => pd.map(itm =>
                itm.name === name ? { ...itm, checked: !itm.checked } : itm
            ))
            dispatch(actions.addSkills({group:'personal',skill:value}))
        }

    } 
    const handleTechnicalChange = (e) =>{
        const {name,value} = e.target; 
        if(e.target.name ==="Other Technical Skill"){
            setTechnicalOtherOpen(!technicalOtherOpen)
        }else{
            setTechnicalData((pd) => pd.map(itm =>
                itm.name === name ? { ...itm, checked: !itm.checked } : itm
            ))
            dispatch(actions.addSkills({group:'technical',skill:value}))
        }

    } 
    const handleProgrammingChange = (e) =>{
        const {name,value} = e.target;
        if(e.target.name ==="Other Programming Skill"){
            setProgrammingOtherOpen(!programmingOtherOpen);
        }else{
            setProgrammingData((pd) => pd.map(itm =>
                itm.name === name ? { ...itm, checked: !itm.checked } : itm
            ))
            dispatch(actions.addSkills({group:'programming',skill:value}))
        }
    }
    
    const handleDBChange = (e) =>{
        const {name,value} = e.target
        if(e.target.name ==="Other Database Skill"){
            //alert(databaseOtherOpen)
            setDatabaseOtherOpen(!databaseOtherOpen);
        }else{
            setDatabaseData((preItems) => preItems.map(item =>
                item.name === name ? { ...item, checked: !item.checked } : item
            ))
            
            dispatch(actions.addSkills({group:'database',skill:value}))
        }
    }

    const addPersonSkill =  () =>{
        const personInput = personInputRef.current.value
        const new_id = 100 - personData.length;
       
        const temp = [...personData, { id: new_id,name: personInput, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);
        setPersonData(sortedAsc);
        setPersonOtherOpen(!personOtherOpen);
        personInputRef.current.value='';
        dispatch(actions.addSkills({group:'personal',skill:personInput}))

    }
    const addTechnicalSkill =  () =>{
        const technicalInput = technicalInputRef.current.value
        const new_id = 100 - technicalData.length;
       
        const temp = [...technicalData, { id: new_id,name: technicalInput, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);
        setTechnicalData(sortedAsc);
        setTechnicalOtherOpen(!technicalOtherOpen);
        technicalInputRef.current.value='';
        dispatch(actions.addSkills({group:'technical',skill:technicalInput}))
    }
    const addProgrammingSkill = () =>{
        const proInput = proInputRef.current.value
        const new_id = 100 - programmingData.length;
       
        const temp = [...programmingData, { id: new_id,name: proInput, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);
        setProgrammingData(sortedAsc);
        setProgrammingOtherOpen(!programmingOtherOpen);
        proInputRef.current.value='';
        dispatch(actions.addSkills({group:'programming',skill:proInput}))
        //if
        //checkBoxProgrammingRef.current.checked=false;
       
    }
    const addDBSkill = () =>{
        const dbInput = dbInputRef.current.value
        const new_id = 100 - databaseData.length;

        const temp = [...databaseData, { id: new_id,name: dbInput, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);
        setDatabaseData(sortedAsc);
        setDatabaseOtherOpen(!databaseOtherOpen);
        dbInputRef.current.value='';
        dispatch(actions.addSkills({group:'database',skill:dbInput}))
        //checkBoxDBRef.current[100].checked=false;
        //for (const id in checkBoxDBRef.current) {
        //    console.log(checkBoxDBRef.current[id])
        //}
    }
    const cancelPersonSkill = () =>{
        setPersonOtherOpen(!personOtherOpen);
        checkBoxPersonalRef.current[100].checked = false;
    }
    const cancelTechnicalSkill = () =>{
        setTechnicalOtherOpen(!technicalOtherOpen);
        checkBoxTechnicalRef.current[100].checked = false;
    }
    const cancelProgrammingSkill = () =>{
        setProgrammingOtherOpen(!programmingOtherOpen);
        checkBoxProgrammingRef.current[100].checked = false;
    }
    const cancelDBSkill = () =>{
        setDatabaseOtherOpen(!databaseOtherOpen);
        checkBoxDBRef.current[100].checked = false;
    }
    const onTechAdd = () =>{
        setTechnicalOpen(!technicalOpen)
    }
    return (
        <div className='step-container'>
            
            <div className='sub-step-title'>Personal Skills</div>
            <br/>
            <div className="check-box-container">
                {personData.map((pe, index) => (
                    <div className="checkbox-group">
                        <input ref={(el)=>{if (el) checkBoxPersonalRef.current[pe.id] = el}} type="checkbox" value={pe.name} id={pe.name} name={pe.name} onChange={(e) => handlePersonChange(e)} defaultChecked={pe.checked} />
                        <label htmlFor={pe.name}>{pe.name}</label>
                    </div>
                ))}
            </div>
            <div className={`skills-slide-container ${personOtherOpen ? "open" : ""}`}>
                <div className="button-wrapper1">
                    <label className="lbl-title" >Add Additional Other Personal Skill</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <input type='text' ref={personInputRef} className='input-field' placeholder='Please enter your skills or tools.' />
                <div className="empty-row-1">&nbsp;</div>
                <div className="row-wrapper">
                    <button className="short-btn" onClick={addPersonSkill}>Add Skill</button>
                    <button className="short-btn" onClick={cancelPersonSkill}>Cancel</button>
                </div>
            </div>
           
           
            <div className='sub-step-title'>Technical Skills</div>
            
            <br/>
            
            <div className="check-box-container_1">
                {technicalData.map((te, index) => (
                    <div className="checkbox-group">
                        <input ref={(el) =>{if (el) checkBoxTechnicalRef.current[te.id] = el}} type="checkbox" value={te.name} id={te.name} name={te.name} onChange={(e) => handleTechnicalChange(e)} defaultChecked={te.checked} />
                        <label htmlFor={te.name}>{te.name}</label>
                    </div>
                ))}
            </div>
            <div className={`skills-slide-container ${technicalOtherOpen ? "open" : ""}`}>
                <div className="button-wrapper1">
                    <label className="lbl-title" >Add Additional Other Technical Skill</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <input type='text' ref={technicalInputRef} className='input-field' placeholder='Please enter your skills or tools.' />
                <div className="empty-row-1">&nbsp;</div>
                <div className="row-wrapper">
                    <button className="short-btn" onClick={addTechnicalSkill}>Add Skill</button>
                    <button className="short-btn" onClick={cancelTechnicalSkill}>Cancel</button>
                </div>
            </div>
            <br />
            <div className='sub-step-title'>Programming Skills</div><br />
            <div className="check-box-container">
                {programmingData.map((p, index) => (
                    <div className="checkbox-group">
                            <input ref={(el)=>{ if (el) checkBoxProgrammingRef.current[p.id] = el}} type="checkbox" value={p.name} id={p.name} name={p.name}  onChange={ (e) => handleProgrammingChange(e)} defaultChecked={p.checked } />
                            <label htmlFor={p.name}>{p.name}</label>
                    </div>
                ))}
            </div>
            <div className={`skills-slide-container ${programmingOtherOpen ? "open" : ""}`}>
                <div className="button-wrapper1">
                    <label className="lbl-title" >Add Additional Other Programming Skill</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <input type='text'  ref={proInputRef} className='input-field' placeholder='Please enter your skills or tools.'/>
                <div className="empty-row-1">&nbsp;</div>
                <div className="row-wrapper">
                <button className="short-btn" onClick={addProgrammingSkill}>Add Skill</button>
                <button className="short-btn" onClick={cancelProgrammingSkill}>Cancel</button>
                </div>
            </div>
            <br/>
           <div className='step-title'>Database Management Skills</div><br />
            <div className="check-box-container">
                {databaseData.map((item, index) => (
                    <div className="checkbox-group">
                            <input ref={(el) => {if (el) checkBoxDBRef.current[item.id] = el }} type="checkbox"  value={item.name} id={item.name} name={item.name}  onChange={(e) => handleDBChange(e)} defaultChecked={item.checked}/>
                            <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            
            <div className={`skills-slide-container ${databaseOtherOpen ? "open" : ""}`}>
                <div className="button-wrapper1">
                    <label className="lbl-title" >Add Additional orther Dabasebase Skill</label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <input type='text'  ref={dbInputRef} className='input-field' placeholder='Please enter your skills or tools.'/>
                <div className="empty-row-1">&nbsp;</div>
                <div className="row-wrapper">
                <button className="short-btn" onClick={addDBSkill}>Add Skill</button>
                <button className="short-btn" onClick={cancelDBSkill}>Cancel</button>
                </div>
            </div>
            
        </div>
    
        
    )
}

export default Step3;