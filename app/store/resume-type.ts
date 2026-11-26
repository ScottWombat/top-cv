export interface Template {
    id?: number //will combine with template text
    templateId?: number
    type?:string
    isImageProfileRequired?:  boolean
    imageProfileStyle?: string //square,cicle
    bgImage?: string
}
export interface IPersonInfo {
    profileImage?: string
    position?: any
    firstName?: any
    lastName?: any
    address?: string
    email?: any
    mobile?: any
    //career_objective?: string
   // professional_summary?: string
   // facebook?: string
    //linkin?: string
   // instagram?: string
   // imageName?: String
   // imageRequired?: boolean
}

export interface IEducation {
    id?: number
    institution?: string
    qualification?: string
    major?:string
    startYear?: string
    endYear?: string
}
export interface IExperience {
    id?: number
    company?: string
    startYear?: string
    endYear?: string
    position?: string
    location?: string
    duty?: [string]
}
export interface IReferee{
    id?: string
    name?: string
    email?: string
    mobile?: string
}

export interface ILanguage{
    id?: number
    name?: string
    checked?: boolean
}

export interface ITemplate{
    id?: number
    name?: string
    image?: string
    style?: string
}

