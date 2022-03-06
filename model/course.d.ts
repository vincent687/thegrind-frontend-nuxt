import { Attachment }  from './attachment'

export type Tag = {
    id: number,
    name: string
}

export type Employee = {
    id: number,
    name: string,
    job_title:string,
    work_email: string
}

export type ClassRoom = {
    id: number,
    name: string
}

export type Course = {
    id: number,
    name: string,
    total_time: string,
    description: string,
    channelChannelTags: { channel_id: number; tag_id: number; tag: Tag }[],
    attachment: Attachment
}


export type Tutor = {
    id: number,
    name: string,
    custom_start_date: Date,
    custom_end_date: Date,
    custom_present_student: number,
    employee: Employee,
    class_room: ClassRoom,
    location: string,
    course: Course
}


  
