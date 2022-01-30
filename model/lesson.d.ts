
import { Partner }  from './partner'

export type Tag = {
    id: number,
    ame: string
}

export type Course = {
    id: number,
    name: string,
    total_time: string,
    description: string,
    channelChannelTags: { channel_id: number; tag_id: number; tag: Tag }[]
}

export type Owner = {
    id: number,
    partner: Partner
}


export type Video = {
    id: number,
    name: string,
    description: string,
    slide_type: string,
    url: string,
    owner: Owner
    
}

export type Lesson = {
    id: number,
    name: string,
    custom_create_date: Date,
    custom_deadline_date: Date,
    custom_tutor_id: number
    custom_class_id: number
    custom_company_id: number
    custom_lession_details: string
    course: Course,
    videos: Video[]
}


  
