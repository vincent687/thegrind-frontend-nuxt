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