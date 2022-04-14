export type FindCoursesParams = {
    filter?: InputMaybe<JobsFilter>
    includePast?: InputMaybe<Scalars['Boolean']>
    pageSize?: InputMaybe<Scalars['Int']>
    searchText?: InputMaybe<Scalars['String']>
    skip?: InputMaybe<Scalars['Int']>
    sort?: InputMaybe<Scalars['String']>
  }

  export type FindLessonsParams = {
    id: number,
    filter?: InputMaybe<JobsFilter>
    includePast?: InputMaybe<Scalars['Boolean']>
    pageSize?: InputMaybe<Scalars['Int']>
    searchText?: InputMaybe<Scalars['String']>
    skip?: InputMaybe<Scalars['Int']>
    sort?: InputMaybe<Scalars['String']>
  }

  export type FindLessonParams = {
    id: number,
    filter?: InputMaybe<JobsFilter>
    includePast?: InputMaybe<Scalars['Boolean']>
    pageSize?: InputMaybe<Scalars['Int']>
    searchText?: InputMaybe<Scalars['String']>
    skip?: InputMaybe<Scalars['Int']>
    sort?: InputMaybe<Scalars['String']>
  }

  export type FindVideoParams = {
    id: number,
    filter?: InputMaybe<JobsFilter>
    includePast?: InputMaybe<Scalars['Boolean']>
    pageSize?: InputMaybe<Scalars['Int']>
    searchText?: InputMaybe<Scalars['String']>
    skip?: InputMaybe<Scalars['Int']>
    sort?: InputMaybe<Scalars['String']>
  }


  export type FindCompanyParams = {
    id: number,
    filter?: InputMaybe<JobsFilter>
    includePast?: InputMaybe<Scalars['Boolean']>
    pageSize?: InputMaybe<Scalars['Int']>
    searchText?: InputMaybe<Scalars['String']>
    skip?: InputMaybe<Scalars['Int']>
    sort?: InputMaybe<Scalars['String']>
  }


  export type UploadFileParams = {
    userId: InputMaybe<Scalars['Int']>,
    file: InputMaybe<File>,
    filename: InputMaybe<Scalars['String']>,
    name: InputMaybe<Scalars['String']>,
    type: InputMaybe<Scalars['Int']>,
    classId: InputMaybe<Scalars['Int']>,
    url: InputMaybe<Scalars['Int']>,
  }
