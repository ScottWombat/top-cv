import * as T from './index.styled'
import { useState, useEffect, useMemo } from 'react';
import { Link} from 'react-router'
import { useAppSelector, useAppDispatch } from '~/store/hooks';
import { updateTemplateType, selectTemplateType } from '~/store/template-type-reducer';

import { selectAbstractTemplates, selectModernTemplates, selectClassicTemplates } from '~/store/templates-reducer';
import './index.css'
const CVTemplates = () => {
    const [templates, setTemplates] = useState([])
    const templateType = useAppSelector(selectTemplateType);
    const abstractTemplates = useAppSelector(selectAbstractTemplates)
    const modernTemplates = useAppSelector(selectModernTemplates)
    const classicTemplates = useAppSelector(selectClassicTemplates)
    const [selectedValue, setSelectedValue] = useState(templateType)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (templateType === 'abstract') {
            setTemplates(abstractTemplates)
        } else if (templateType === 'modern') {
            setTemplates(modernTemplates)
        } else {
            setTemplates(classicTemplates)
        }
        console.log(templates)
    }, [])
    const handleChange = (event) => {

        setSelectedValue(event.target.value);
        if (event.target.value === 'abstract') {
            //console.log("ddddd")
            setTemplates(abstractTemplates)
        } else if (event.target.value === 'classic') {

            setTemplates(classicTemplates);
        } else {
            setTemplates(modernTemplates)
        }

        dispatch(updateTemplateType({ typename: event.target.value }))

    };
    return (
        <T.Container>
            <T.Row>
            
                <T.FormContainer>
                    <T.Title>Select&nbsp;Resume&nbsp;Style &nbsp;:</T.Title>
                    <T.RadioGroup>
                        <T.Label>
                            <T.HiddenInput
                                name="plan"
                                value="abstract"
                                checked={selectedValue === "abstract"}
                                onChange={handleChange}
                            />
                            <T.CustomRadio />
                            Abstract
                        </T.Label>

                        <T.Label>
                            <T.HiddenInput
                                name="plan"
                                value="classic"
                                checked={selectedValue === "classic"}
                                onChange={handleChange}
                            />
                            <T.CustomRadio />
                            Classic
                        </T.Label>
                        <T.Label>
                            <T.HiddenInput
                                name="plan"
                                value="modern"
                                checked={selectedValue === "modern"}
                                onChange={handleChange}
                            />
                            <T.CustomRadio />
                            Modern
                        </T.Label>

                    </T.RadioGroup>
                </T.FormContainer>
          
        </T.Row>
        <T.Row>
            <T.Templates>
                <div className='g_wrapper'>
                <div className="gallery">
                  {templates.map((tp,index) => (
                    <Link  to={{ pathname: "/create", 
                    search: `?id=${tp.id}&templateId=${tp.templateId}&type=${tp.type}&isImageProfileRequired=${tp.isImageProfileRequired}&imageProfileStyle=${tp.imageProfileStyle}&bgImage=${tp.bgImage}` }}>
                     <div className="thumbnail-container">
                        <img src={`/templates/${selectedValue}/template${tp.id}.png`} alt="Thumbnail" />
                         <div className="overlay">
                                    <div className="text">CREATE CV</div>
                        </div>
                     </div>
                      
                      </Link>
                  ))}
                  </div>
                  </div>
            </T.Templates>
        </T.Row>
      </T.Container>
    )
}
 //<Link  to={`/createcv/${data.id}/${data.templateId}/${data.type}/${data.isImageProfileRequired}/${data.imageProfileStyle}/${data.bgImage}`}></Link>
export default CVTemplates;