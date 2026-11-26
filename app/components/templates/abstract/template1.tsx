import { TemplateContainer, BackgroundLayer, ContentLayer, Empty } from '~/components/templates/app.styled';
import * as T from './abstract.styled';
import { Paragraph1,Paragraph, ExperiencTitleWrapper, ExperienceCompany, Experience, Row, Content, Header } from '../modern/template9.styled';
import { useState, useEffect } from 'react';
import { SkillGroup, Bullet, SkillContent } from '../modern/template9.styled';
import { useAppSelector } from '~/store/hooks';

const Template1 = ({ colorScheme, bgImage, id, imageStyle}) => {
    const cv = useAppSelector((state: any) => state.cv);
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        let temp = `/images/abstract/${bgImage}.png`;
        setImage(temp)
    }, [])
    return (
        <TemplateContainer>
            <BackgroundLayer textAlign={imageStyle}>
                <img src={image} />
            </BackgroundLayer>
            <ContentLayer>
                <T.Name fontcolor={colorScheme.hex1}>{cv.personInfo.firstName === null ? '[Your first name]':cv.personInfo.firstName}</T.Name>
                <T.LastName>{cv.personInfo.lastName === null ? '[Your last name]' : cv.personInfo.lastName}</T.LastName>
                <T.Position>{cv.personInfo.position === null ? '[Your position]':cv.personInfo.position}</T.Position>
                <T.Address>
                    <T.Tag imagestyle={imageStyle}>email:&nbsp;{cv.personInfo.email}</T.Tag><T.Tag imagestyle={imageStyle}>mobile:&nbsp;{cv.personInfo.mobile}</T.Tag><T.Tag imagestyle={imageStyle}>location:&nbsp;{cv.personInfo.address}</T.Tag>
                </T.Address>
                <T.Objectives>
                    {cv.career_objectives.map((objective, index) => (
                        <>
                            <Paragraph1>
                                <i className="fa-solid fa-quote-left"></i>{objective}<i className="fa-solid fa-quote-right"></i>
                            </Paragraph1>
                            <Empty height='5px' />
                        </>
                    ))}
                </T.Objectives>
                <Empty height="10px" />
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Prefessional Summary
                    </Header>
                </Row>
                <Row>
                    <Content>
                        {cv.professional_summary.map((prof, index) => (
                            <Paragraph>
                                {prof}
                            </Paragraph>
                        ))}
                    </Content>
                </Row>
                <Empty height="10px" />
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Personal Skills
                    </Header>
                </Row>
                <Row>
                    <Content>
                        <SkillGroup>
                            {cv.personalSkills.map((per, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent>{per}</SkillContent>
                                </div>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
                {cv.technicalSkills.length > 0 &&
                <>
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Technical Skills
                    </Header>
                </Row>
                <Row>
                    <Content>
                        <SkillGroup>
                            {cv.technicalSkills.map((per, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent>{per}</SkillContent>
                                </div>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
                </>
                }  
                {cv.programmingSkills.length > 0 &&
                <>
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Programming Skills
                    </Header>
                </Row>
                <Row>
                    <Content>
                        <SkillGroup>
                            {cv.personalSkills.map((per, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent>{per}</SkillContent>
                                </div>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
                </>
                }  
                {cv.databaseSkills.length > 0 &&
                <>
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Database Skills
                    </Header>
                </Row>
                <Row>
                    <Content>
                        <SkillGroup>
                            {cv.databaseSkills.map((per, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent>{per}</SkillContent>
                                </div>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
                </>
                }
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Education
                    </Header>
                </Row>
                <Row>
                    <Content>

                        <SkillGroup>
                            {cv.education.map((edu, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent width={'320px'}>{edu.qualification}<br />{edu.major}<br />{edu.startYear}-{edu.endYear}</SkillContent>
                                </div>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
               {cv.education.length > 0 && <Empty height='25px'/>}
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Languages
                    </Header>
                </Row>
                <Row>
                    <Content>
                        <SkillGroup>
                            {cv.lang.map((lang, index) => (
                                <>
                                {lang.checked &&
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <Bullet />
                                    <SkillContent>{lang.name}</SkillContent>
                                </div>
                                }
                                </>
                            ))}
                        </SkillGroup>
                    </Content>
                </Row>
                <Row>
                    <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                        <T.SquareWrapper>
                            <T.TinySquare fontcolor={colorScheme.hex1} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                            <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                        </T.SquareWrapper>&nbsp;Work Experience
                    </Header>
                </Row>
                <Empty height='10px'/>
                <Row>
                    <Content>
                        {cv.experiences.map((exp, index) => (
                                                                       <>
                                                                        <ExperiencTitleWrapper>
                                                                        <div style={{ width: '50%',fontWeight:'bold' }}>{exp.company}</div>
                                                                        <div style={{ width: '50%', fontWeight:'bold',textAlign: 'right' }}>{exp.startYear}-{exp.endYear}</div>
                                                                         </ExperiencTitleWrapper>
                                                                         <ExperienceCompany>{exp.position}</ExperienceCompany>
                                                                         <Experience>
                                                                         <ul>
                                                                         {exp.duty.map((d,inx) =>(
                                                                            <li id={inx}>{d}</li>
                                                                         ))}    
                                                
                                                                         </ul>
                                                                         </Experience>    
                                                                      
                                                                       
                                                                       
                                                                       </>
                                                                   
                                                                    ))}
                    </Content>
                </Row>
                {!cv.referees_skip &&
                    <>
                        <Empty height='10px'/>
                        <Row>
                            <Header fontFamily='Neuropol' color={colorScheme.hex1} fontSize='0.8em'>
                                <T.SquareWrapper>
                                    <T.TinySquare fontcolor={colorScheme.hex1} />
                                    <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                                    <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                                    <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                                    <T.TinySquare fontcolor={colorScheme.hex1} /><T.TinySquare fontcolor={colorScheme.hex5} />
                                </T.SquareWrapper>&nbsp;References
                            </Header>
                        </Row>
                        <Row>
                            <Content>
                                <SkillGroup>
                                    {cv.referees.map((ref, index) => (
                                        <div style={{ display: 'inline-flex', gap: '10px' }}>
                                            <Bullet />
                                            <SkillContent>{ref.name}<br />{ref.email}<br />{ref.mobile}</SkillContent>
                                        </div>
                                    ))}
                                </SkillGroup>
                            </Content>
                        </Row>
                    </>
                }
            </ContentLayer>
        </TemplateContainer>
    )
}

export default Template1;