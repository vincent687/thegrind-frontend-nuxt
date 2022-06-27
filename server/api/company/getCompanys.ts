export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const data = await $fetch(
    'https://thegrind-backend-5x42fcw6uq-df.a.run.app/companys?' +
      new URLSearchParams({
        page: query.page,
        pageSize: query.pageSize,
      })
  )

  return {
    data: data.data,
  }
})
