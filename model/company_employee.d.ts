import { Attachment }  from './attachment'

export type CompanyEmployee = {
    cid: number,
    user_id: number,
    user: User,
    name: string,
    job_title:string,
    work_email: string
}


export type User = {
  id: 7,
  partner: Partner
}

export type Partner = {
  id: number,
  name: string,
  company_id: number,
  create_date: DateTime,
  display_name: string,
  date: DateTime,
  title: string,
  parent_id: number,
  ref:  string,
  lang:  string,
  tz:  string,
  user_id: number,
  vat:  string,
  website:  string,
  comment:  string,
  credit_limit: number,
  active: Boolean,
  employee:  string,
  function:  string,
  type: string,
  street: string,
  street2: string,
  zip: string,
  city: string,
  state_id: number,
  country_id: number,
  partner_latitude: string,
  email: string,
  phone: string,
  mobile: string,
  is_company: boolean,
  industry_id: number,
  attachment: Attachment
}
