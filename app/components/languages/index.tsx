import './languages.css';
import './form.css';
import '~/components/steps/step-form.css';
import '~/components/css/master.css';
import '~/components/steps/step.css'
import { useState, useRef, useEffect, forwardRef, useImperativeHandle} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '~/store/index';
import { useAppSelector } from '~/store/hooks';
import { actions,selectLanguages,addOtherLanguage,filterSelectedLanguages } from '~/store/cv-reducer';
import languagesData from '~/components/json/languages.json';

const Languages = ({ ref,langError,onAction }) => {
    //console.log("DD")
   // console.log(langError)
    const languages = useAppSelector(selectLanguages)
    //const languageCheckBoxRef = useRef<HTMLInputElement[]>([])
    const languageCheckBoxRef1 = useRef<HTMLInputElement[]>([])
    const dispatch = useDispatch<AppDispatch>()
    //const [isSelected, setIsSelected] = useState(false)
    const otherRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const [isSkip, setIsSkip] = useState(false)
    const [langInput, setLangInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [msg, setMsg] = useState<string>('');
    //const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState(languagesData)
   // const [txt, setTxt] = useState(null)
   // const [errorStatus,setErrorStatus] = useState<Status>(Status.Idle);
    const [langStatus,setLangStatus] = useState<boolean>(false)
    const [htmlString,setHtmlString] = useState<string>(`<p>&nbsp;</p>`)
    /*
    useEffect(()=>{
        setMsg("");
    },[])
    
    useEffect(()=>{
        let langs: any[] =languages.filter((lang) => lang.checked == true).map((lang)=> lang.name)
        if(langs.length == 0 ){
            
        }else{
           
            
        }
    },[items,errorStatus])
    useEffect(()=>{
      
    },[errorStatus])
    */
    const showMessage = (langError) => {
      console.log(langError)
      setLangStatus(langError)
      if(langError){
        //setMsg("Language is requireddddd")
        setHtmlString(`<p>Language is required`)
      }else{
        setHtmlString(`<div>\u2713</div>`)
      } 
    }
    useImperativeHandle(ref, () => ({
        triggerChildFunction: showMessage
    }))
   
    /*
    useEffect(() => {

        let newArray = items.filter((item, i) => item.checked === true)
        if (newArray.length === 0) {
            setIsChecked(false);
            setTxt("Language is required")
        } else {
            setIsChecked(true)
        }
    }, [items]);
    */
    useEffect(()=>{
        languageCheckBoxRef1.current[12].checked = isOpen?true:false;
    },[isOpen])

 
    const onChange = (e) => {
        //e.preventDefault();
        const { name, value, checked } = e.target;
        //setErrorStatus(!errorStatus)
        if (name === 'Other') {
            setIsOpen(!isOpen)
            dispatch(actions.updateLanguage(name))
        } else {

            if (checked) {
                console.log("tciked")
                //setIsSelected(true)
                //setSelectedItems([...selectedItems, value]);
                dispatch(actions.addLanguages(name))
                //dispatch(actions.updateLanguage(name))
                setItems((preItems) => preItems.map(item =>
                    item.name === name ? { ...item, checked: !item.checked } : item
                ))
               
                setIsChecked(true)
                showMessage(false)
            } else {
               
                dispatch(actions.updateLanguage(name))
               
                setItems((preItems) => preItems.map(item =>
                    item.name === name ? { ...item, checked: !item.checked } : item
                ))
                //showMessage(true)
            }

        }
    
    }
    const buttonOnClick = (e) => {
        e.preventDefault();
        const new_id = 100 - languagesData.length;
        const other = otherRef.current.value

        const temp = [...items, { id: new_id, name: other, checked: true }];
        const sortedAsc = [...temp].sort((a, b) => a.id - b.id);

        setItems(sortedAsc)
        setIsOpen(!isOpen)
        dispatch(actions.addOtherLanguage({id:2000,name:other,checked:true}))
        dispatch(actions.updateLanguage("Other"));
        otherRef.current.value = "";
      
    }
    const skipOnClick = (e) => {
        setIsSkip(!isSkip)
        //alert('d')
    }

    return (
        <div className='ref-language-wrapper'>
            <div className='header-row-wrapper'>
                <div className="lbl-wrapper">
                    <label className="step-title">Languages<span className="asterick">*</span></label>
                    <label className="error-msg">&nbsp;</label>
                </div>
                <div className="lbl-wrapper">
                    <label className="lbl-title">&nbsp;</label>
                    {/*<label className="error-msg">{isChecked ? <div className="check-mark">{'\u2713'}</div> : <>{langError}</>}</label>*/}
                    <label className={`error-msg ${langStatus? '' : 'green-msg'}`}>
                       <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                    </label>
                  
                </div>
            </div>
            {/*
            <br />
            <div className="lang-container">
                {languages.map((item, index) => (
                    <div className="formGroup1">
                        <input type="checkbox"
                            ref={(el) => { if (el) languageCheckBoxRef.current[index] = el }}
                            value={item.name}
                            id={item.name}
                            name={item.name}
                            onChange={onChange}
                            defaultChecked={item.checked}/>
                        checked={item.checked ? true : false} />
                        <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            */}
            <br/>
           
            <div className="lang-container">
                {languages.map((item, index) => (
                    <div className="formGroup1" key={index}>
                        <input type="checkbox"
                            ref={(el) => { if (el) languageCheckBoxRef1.current[index] = el }}
                            value={item.name}
                            id={item.name}
                            name={item.name}
                            onChange={onChange}
                            defaultChecked={item.checked}/>
                            {/*checked={item.checked ? true : false} />*/}
                        <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
            </div>
            

            <div id="wrapper" className={`slide-container ${isOpen ? "open" : ""}`}>
                <input size={30} type='text' id="lang_id" defaultValue={langInput} ref={otherRef} className='input-field2' placeholder='Your language' />
                <div style={{ lineHeight: '10px' }}>&nbsp;</div>
                <button onClick={buttonOnClick} className='addskills-btn'>Add Language</button>
                {/*}
                 <input type="text" /><button onClick={buttonOnClick}>Add Language</button>
                 */}
            </div>

        </div>
    )
};

export default Languages;