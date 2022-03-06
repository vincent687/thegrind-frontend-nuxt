import { Attachment }  from './attachment'
import { CompanyEmployee } from './company_employee'

export type Company = {
    id: number,
    name: string,
    email: string,
    attachment: Attachment,
    CompanyInfo: CompanyInfo,
    employee: CompanyEmployee[]
}
