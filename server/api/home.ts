export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const strapi = await $fetch(
    'https://thegrind-strapi-5x42fcw6uq-df.a.run.app/api/thegrinds?populate=*'
  )

  return {
    data: strapi.data,
  }
})
