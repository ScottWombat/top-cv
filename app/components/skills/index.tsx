import '@components/css/master.css';

import { useState, useRef,useEffect } from "react";
//import personSkillsData from './person-skills.json';
//import technicalSkillsData from './programming-skills.json';
//import programmingSkillsData from './programming-skills.json';
//import databaseSkillsData from './database-skills.json';
type SkillType = {
    id: number;
    name: string;
    checked: boolean;
}
const Skills = () => {
    const dbInputRef = useRef(null);
    const [personData, setPersonObject] = useState([[]]);
    const [technicalData,setTechnicalData] = useState([]);
    const [programmingData,setProgrammingData] = useState([]);
    const [databaseData,setDatabaseData] = useState([]);
    const [databaseOtherOpen,setDatabaseOtherOpen] = useState(false)
    useEffect(()=>{
      //console.log(personData)
      //console.log(technicalData)
      //console.log(programmingData)
      console.log(databaseData)
    },[databaseData])

    const handleChange = (e) =>{
        //const {name,value} = e.target;
        alert(e)
        if(e.target.name ==="Other"){
            alert('d')
            setDatabaseOtherOpen(!databaseOtherOpen);
        }
    }
    const addDBSkill = () =>{
        const dbInput = dbInputRef.current.value
        const temp = [...databaseData, { id: 99,name: dbInput, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);
        setDatabaseData(sortedAsc);
        setDatabaseOtherOpen(!databaseOtherOpen);
    }
    return (
        <div className='skills-wrapper'>
            <br/>
            <div className='step-title'>Personal Skills</div><br />
            {/*}
            <div className="check-box-container">
                {personData.map((item, index) => (
                    <div className="check-box-group">
                            <input type="checkbox" value={index} id={item.name} name={item.name}  onClick={onClick} checked={item.checked ? true : false} />
                            <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            <div className='step-title'>Technical Skills</div><br />
            <div className="check-box-container">
                {technicalData.map((item, index) => (
                    <div className="check-box-group">
                            <input type="checkbox" value={index} id={item.name} name={item.name}  onChange={onClick} checked={item.checked ? true : false} />
                            <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            <div className='step-title'>Programming Skills</div><br />
            <div className="check-box-container">
                {programmingData.map((item, index) => (
                    <div className="check-box-group">
                            <input type="checkbox" value={index} id={item.name} name={item.name}  onChange={onClick} checked={item.checked ? true : false} />
                            <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            */}
            <div className='step-title'>Database Management Skills</div><br />
            <div className="check-box-container">
             
                {databaseData.map((item, index) => (
                    <div className="check-box-group">
                            <input type="checkbox"  value={index} name={item.name}  onClick={handleChange} checked={item.checked}/>
                            <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            <div className={`skills-slide-container ${databaseOtherOpen ? "open" : ""}`}>
             <div className="button-wrapper1">
                    <label className="lbl-title" >Add Additional Dabasebase Skill</label>
                    <label className="error-msg">&nbsp;</label>
            </div>
            
            <input type='text'  ref={dbInputRef} className='input-field' placeholder='Please enter your skills or tools."'/>
            <div className="empty-row-1">&nbsp;</div>
            <div className="row-wrapper">
                <button className="short-btn" onClick={addDBSkill}>Add Skill</button>
                <button className="short-btn">Cancel</button>
            </div>
            </div>
            
        </div>
    
    )
}
export default Skills;