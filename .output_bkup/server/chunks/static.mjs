import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/AvatarCard-0ba29b61.mjs": {
    "type": "application/javascript",
    "etag": "\"2fa-DT2tYLEtFMXAaL679Rd0zMdueUk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/AvatarCard-0ba29b61.mjs"
  },
  "/_nuxt/AvatarCard-3b142190.mjs": {
    "type": "application/javascript",
    "etag": "\"31e-thpTRiKhTyTcIUwxlxyK9VUl7TA\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/AvatarCard-3b142190.mjs"
  },
  "/_nuxt/Avator-17dc9d54.mjs": {
    "type": "application/javascript",
    "etag": "\"446-82yLvNcIJaNpyfaekjyx5NPXqEU\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Avator-17dc9d54.mjs"
  },
  "/_nuxt/button-reset-85008c80.mjs": {
    "type": "application/javascript",
    "etag": "\"ce2-bxTlLnOl4CrGaIz5R7DdyUEHhrQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/button-reset-85008c80.mjs"
  },
  "/_nuxt/CalendarDateIndicator-7ee8e7e8.mjs": {
    "type": "application/javascript",
    "etag": "\"228-OSJWKF9tVsbtTCQQSpU86lSvLbk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CalendarDateIndicator-7ee8e7e8.mjs"
  },
  "/_nuxt/CalendarDateSelector-e99e2b9c.mjs": {
    "type": "application/javascript",
    "etag": "\"7d1-MHh8i6Q5Ux61idoklEmwcR+ytM0\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CalendarDateSelector-e99e2b9c.mjs"
  },
  "/_nuxt/CalendarMonth-aa28387f.mjs": {
    "type": "application/javascript",
    "etag": "\"118d-xMl9XX2dKkXMVXR+iAW2d25S5bc\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CalendarMonth-aa28387f.mjs"
  },
  "/_nuxt/CalendarMonthDayItem-b6798928.mjs": {
    "type": "application/javascript",
    "etag": "\"632-sop9PlQhXDdYuDFjDCO/sQkbcWE\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CalendarMonthDayItem-b6798928.mjs"
  },
  "/_nuxt/CalendarWeekdays-b5d1f0b7.mjs": {
    "type": "application/javascript",
    "etag": "\"27a-+ab3OPXEzUkNPlGlFV/tOEZ6YzY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CalendarWeekdays-b5d1f0b7.mjs"
  },
  "/_nuxt/Carousel-1b5fc9a4.mjs": {
    "type": "application/javascript",
    "etag": "\"5dd-qDCz8lIlh4PebSkX8sNo6hZ/bk0\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Carousel-1b5fc9a4.mjs"
  },
  "/_nuxt/CommentCard-2ccd8cdc.mjs": {
    "type": "application/javascript",
    "etag": "\"ad8-6IzYg9V8/qVWfr0ioBtjBaCO7WE\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CommentCard-2ccd8cdc.mjs"
  },
  "/_nuxt/ContactUsCard-59bb0100.mjs": {
    "type": "application/javascript",
    "etag": "\"3d4-OuZ7QZ59aC+He1YjjaT5ukkFxwk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/ContactUsCard-59bb0100.mjs"
  },
  "/_nuxt/CourseCard-6a94ba46.mjs": {
    "type": "application/javascript",
    "etag": "\"a33-ganidPJ3oaXAwees0Blx35Yp4kY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/CourseCard-6a94ba46.mjs"
  },
  "/_nuxt/dayjs.min-d4e3765c.mjs": {
    "type": "application/javascript",
    "etag": "\"190b-JJlqj3HEjEudnBJIOzwENw0h3mA\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/dayjs.min-d4e3765c.mjs"
  },
  "/_nuxt/default-1a0e2197.mjs": {
    "type": "application/javascript",
    "etag": "\"2fc-WEPDPpsPyj1y4+V0FF2kuL/uQ5U\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/default-1a0e2197.mjs"
  },
  "/_nuxt/DescriptionCard-207b168f.mjs": {
    "type": "application/javascript",
    "etag": "\"dfa-3ur+LQQPXK6AWiON3l2/EjnEFNI\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DescriptionCard-207b168f.mjs"
  },
  "/_nuxt/DescriptionCard-90029c73.mjs": {
    "type": "application/javascript",
    "etag": "\"5ba-BF9IEvMDae02MFVhWPD7PIfUqjY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DescriptionCard-90029c73.mjs"
  },
  "/_nuxt/DescriptionCard-ddd73cfb.mjs": {
    "type": "application/javascript",
    "etag": "\"6b0-v8bQuHZIbjdFsNxlTV6//UYJbj8\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DescriptionCard-ddd73cfb.mjs"
  },
  "/_nuxt/DescriptionCardMobile-6d62ea12.mjs": {
    "type": "application/javascript",
    "etag": "\"707-meEtsrlxm+3jmZBtQxY2VE72iEI\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DescriptionCardMobile-6d62ea12.mjs"
  },
  "/_nuxt/DesktopView-c8473d36.mjs": {
    "type": "application/javascript",
    "etag": "\"6a8-sOdZ4u3HITCR0oy3bcS2N/KJCHA\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DesktopView-c8473d36.mjs"
  },
  "/_nuxt/DropdownButton-855d59ef.mjs": {
    "type": "application/javascript",
    "etag": "\"771-YBuGnoJK5EWxMnZeuIPUXBGXSJg\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/DropdownButton-855d59ef.mjs"
  },
  "/_nuxt/EditCard-210825b3.mjs": {
    "type": "application/javascript",
    "etag": "\"7ea-DF8szyKP7OyxzztNjX9IrV+QGp0\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/EditCard-210825b3.mjs"
  },
  "/_nuxt/entry-1f578a9a.mjs": {
    "type": "application/javascript",
    "etag": "\"a6983-O+GWW3yZyd+Plxugt9CGkgZ6xpU\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/entry-1f578a9a.mjs"
  },
  "/_nuxt/EventCard-581ab410.mjs": {
    "type": "application/javascript",
    "etag": "\"4b5-IiW3pfNJDEoc0QxnuNQLqbwaRRY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/EventCard-581ab410.mjs"
  },
  "/_nuxt/EventCard-9e04a502.mjs": {
    "type": "application/javascript",
    "etag": "\"4b5-IiW3pfNJDEoc0QxnuNQLqbwaRRY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/EventCard-9e04a502.mjs"
  },
  "/_nuxt/ExerciseCard-2f11a6e6.mjs": {
    "type": "application/javascript",
    "etag": "\"3ca-eMgRHALkWmT7z6+EHxN50zrgjEI\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/ExerciseCard-2f11a6e6.mjs"
  },
  "/_nuxt/ExerciseCard-b217d750.mjs": {
    "type": "application/javascript",
    "etag": "\"3d2-MdPMd0glSfQlUWThkw1MGeDylWk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/ExerciseCard-b217d750.mjs"
  },
  "/_nuxt/ExerciseCard-ed756477.mjs": {
    "type": "application/javascript",
    "etag": "\"3b6-HH5U2jDK2mImIl0rnksjekTj5oc\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/ExerciseCard-ed756477.mjs"
  },
  "/_nuxt/Hamburger-d711961f.mjs": {
    "type": "application/javascript",
    "etag": "\"44d-W85K7GzkUfwBW04jeNyUW/QbvOQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Hamburger-d711961f.mjs"
  },
  "/_nuxt/HamburgerContent-9575d06d.mjs": {
    "type": "application/javascript",
    "etag": "\"2764-labEWhUJAPwh80SMntm3u7b81Pk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/HamburgerContent-9575d06d.mjs"
  },
  "/_nuxt/HamburgerContentMobile-33e17e15.mjs": {
    "type": "application/javascript",
    "etag": "\"3270-t8FFx8OUTbpk7q3nYcEdPL6WBjA\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/HamburgerContentMobile-33e17e15.mjs"
  },
  "/_nuxt/Header-6b678ac3.mjs": {
    "type": "application/javascript",
    "etag": "\"bb3-Awj2lpibpqDIu+TR0Y8MCqPyb7Q\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Header-6b678ac3.mjs"
  },
  "/_nuxt/icon-calendar-1-4461c864.mjs": {
    "type": "application/javascript",
    "etag": "\"69a-OnJ6sRm+VHmjP1s4x9vy8/DtdgQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-calendar-1-4461c864.mjs"
  },
  "/_nuxt/icon-calendar-82cd1ded.mjs": {
    "type": "application/javascript",
    "etag": "\"69a-OnJ6sRm+VHmjP1s4x9vy8/DtdgQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-calendar-82cd1ded.mjs"
  },
  "/_nuxt/icon-go-24d5d775.mjs": {
    "type": "application/javascript",
    "etag": "\"190-VmjOAWU+kTp273QQRby/PBTdyuQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-go-24d5d775.mjs"
  },
  "/_nuxt/icon-go-back-8989d536.mjs": {
    "type": "application/javascript",
    "etag": "\"17b-WqC8IyeViqXpxnSgA25bS4co99o\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-go-back-8989d536.mjs"
  },
  "/_nuxt/icon-profile-173a7bbe.mjs": {
    "type": "application/javascript",
    "etag": "\"581-7qV/QQmEdCvbHrFqnr5KlO4SbBs\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-profile-173a7bbe.mjs"
  },
  "/_nuxt/icon-pw-f1e26c95.mjs": {
    "type": "application/javascript",
    "etag": "\"346-EBXw+yERTM56eJo734PKEfrAUfQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/icon-pw-f1e26c95.mjs"
  },
  "/_nuxt/index-1af97814.mjs": {
    "type": "application/javascript",
    "etag": "\"79f-2QrL7GN5Xv8rGqI4LAKnwTEpPs0\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/index-1af97814.mjs"
  },
  "/_nuxt/index-3354aaf9.mjs": {
    "type": "application/javascript",
    "etag": "\"a6-KBW4u55pJGwb44dCQYelwawMauM\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-3354aaf9.mjs"
  },
  "/_nuxt/index-34b10a15.mjs": {
    "type": "application/javascript",
    "etag": "\"806-uaFQGoUr2ilptnUr6POw87tZh18\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-34b10a15.mjs"
  },
  "/_nuxt/index-43df1bc8.mjs": {
    "type": "application/javascript",
    "etag": "\"d62-lEhGmhxan7y03FVOTSP5bgPNU9g\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-43df1bc8.mjs"
  },
  "/_nuxt/index-50196894.mjs": {
    "type": "application/javascript",
    "etag": "\"850-0mtScfc9Q7T6MHt3UR9bivorjWA\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-50196894.mjs"
  },
  "/_nuxt/index-6d7b2d8d.mjs": {
    "type": "application/javascript",
    "etag": "\"70a-aTWuF0ofHUnvOKHij1tMSqxOUAE\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/index-6d7b2d8d.mjs"
  },
  "/_nuxt/index-852049b4.mjs": {
    "type": "application/javascript",
    "etag": "\"42f-rJwdH6S09PpGVfFm7uy0wuSl2EU\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/index-852049b4.mjs"
  },
  "/_nuxt/index-943204a3.mjs": {
    "type": "application/javascript",
    "etag": "\"aec-O2wWzSvLTprMJRoKcf/4121NvaY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-943204a3.mjs"
  },
  "/_nuxt/index-acf1515e.mjs": {
    "type": "application/javascript",
    "etag": "\"87e-zWiYm3SmA9NzIEN+ziU3y/g6JIw\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-acf1515e.mjs"
  },
  "/_nuxt/index-b1cefb83.mjs": {
    "type": "application/javascript",
    "etag": "\"5ac-U/sEEaa9Y+A4a8LnNaXE2uFrwqo\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-b1cefb83.mjs"
  },
  "/_nuxt/index-c23b12bd.mjs": {
    "type": "application/javascript",
    "etag": "\"a3-7qyk8Jlr68aLeBPzuPuSbv6YUDQ\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/index-c23b12bd.mjs"
  },
  "/_nuxt/index-ceeb6089.mjs": {
    "type": "application/javascript",
    "etag": "\"157f-Qy/DK+0ZmYO/yDo8ZP9OB6CNL5I\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/index-ceeb6089.mjs"
  },
  "/_nuxt/LeftTitle-359e51b5.mjs": {
    "type": "application/javascript",
    "etag": "\"a4a-DhuAPjlWlGkNgFk4gzgITmYpZwk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/LeftTitle-359e51b5.mjs"
  },
  "/_nuxt/login-46c4b515.mjs": {
    "type": "application/javascript",
    "etag": "\"25e-AveEIjxE6TmOoQ7V2aAmxmxqElA\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/login-46c4b515.mjs"
  },
  "/_nuxt/LoginCard-0adfb676.mjs": {
    "type": "application/javascript",
    "etag": "\"12ba-sON9kJZBUlDsOwbe5RZN+4Gu+p4\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/LoginCard-0adfb676.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"74b4-MHmcQC8YvbhCBlE0tB0ryDE/H6U\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/md5-8628bc77.mjs": {
    "type": "application/javascript",
    "etag": "\"f05-ZSx3Yo2q3oTMiF6W2Pp6HEvjKdY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/md5-8628bc77.mjs"
  },
  "/_nuxt/MobileEditCard-8e5a0165.mjs": {
    "type": "application/javascript",
    "etag": "\"700-cD0RPzfFXQVW7xpUmXHEvg3FS7c\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/MobileEditCard-8e5a0165.mjs"
  },
  "/_nuxt/MobileUploadCard-e2377be0.mjs": {
    "type": "application/javascript",
    "etag": "\"5ab-AnElpwELX0zy45TZ9AOPuQgw3eo\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/MobileUploadCard-e2377be0.mjs"
  },
  "/_nuxt/MobileView-72bb5e70.mjs": {
    "type": "application/javascript",
    "etag": "\"661-vwP14esIGHtRN9PwwHpSXxko4aM\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/MobileView-72bb5e70.mjs"
  },
  "/_nuxt/NewsCard-a948756b.mjs": {
    "type": "application/javascript",
    "etag": "\"233-1j+zIU3CAvdRgdQG5DB9jEArdMY\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/NewsCard-a948756b.mjs"
  },
  "/_nuxt/NoticeCard-e3b8070c.mjs": {
    "type": "application/javascript",
    "etag": "\"25a-1SCtu7YuhuHC6SR4C3W/97OzWr8\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/NoticeCard-e3b8070c.mjs"
  },
  "/_nuxt/PageTitle-6790e92f.mjs": {
    "type": "application/javascript",
    "etag": "\"e0-2U3b+RtbmM/DXDkGaZWH8nzNd/c\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/PageTitle-6790e92f.mjs"
  },
  "/_nuxt/Pagination-f1e4b848.mjs": {
    "type": "application/javascript",
    "etag": "\"a5a-OgI8oyzAA2eIKKqCuxa2EcVYeZU\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Pagination-f1e4b848.mjs"
  },
  "/_nuxt/RegisterLoginIdCard-3fd5ad59.mjs": {
    "type": "application/javascript",
    "etag": "\"e57-YrHuFpnBpEcYU25CNaiv3+xcHhk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/RegisterLoginIdCard-3fd5ad59.mjs"
  },
  "/_nuxt/RegisterPasswordCard-437c5524.mjs": {
    "type": "application/javascript",
    "etag": "\"a89-liMDzPQVQyCxTAbrznDDWqhowfE\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/RegisterPasswordCard-437c5524.mjs"
  },
  "/_nuxt/SearchBar-a7a497be.mjs": {
    "type": "application/javascript",
    "etag": "\"537-RPwxqopWoZdv4lOqmV3jDJ5yXsU\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/SearchBar-a7a497be.mjs"
  },
  "/_nuxt/SearchBar-ad3bd7d0.mjs": {
    "type": "application/javascript",
    "etag": "\"50f-OUcF3qfu62gisCmvqBh87wyECR4\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/SearchBar-ad3bd7d0.mjs"
  },
  "/_nuxt/SearchBar-f8bfd6e8.mjs": {
    "type": "application/javascript",
    "etag": "\"530-y4ky71//HjXxD6f1xNdKtTKBhlk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/SearchBar-f8bfd6e8.mjs"
  },
  "/_nuxt/Tab-7a2656e8.mjs": {
    "type": "application/javascript",
    "etag": "\"520-eg73I43w+JQBeEQ60Al6ny5yg9U\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Tab-7a2656e8.mjs"
  },
  "/_nuxt/Tab-902a5a9d.mjs": {
    "type": "application/javascript",
    "etag": "\"511-vL9SJdc/dsSBNyJHyMjAr2Dtthk\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/Tab-902a5a9d.mjs"
  },
  "/_nuxt/teams-694f1089.mjs": {
    "type": "application/javascript",
    "etag": "\"725-2n6Bm4oKsyy//ekZWgZucRdvoIc\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/teams-694f1089.mjs"
  },
  "/_nuxt/teamsMobile-873ba414.mjs": {
    "type": "application/javascript",
    "etag": "\"6bc-o5urNFxTu0eVnoEXyi9VU6clVxo\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/teamsMobile-873ba414.mjs"
  },
  "/_nuxt/TermsCard-aad281e1.mjs": {
    "type": "application/javascript",
    "etag": "\"3b83-bU8adFJJYGlQCQI7NTcXNWajO/I\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/TermsCard-aad281e1.mjs"
  },
  "/_nuxt/UploadCard-f9db865b.mjs": {
    "type": "application/javascript",
    "etag": "\"689-iRpZWWsY63tS8Zvq9g6aLRPF2d0\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/UploadCard-f9db865b.mjs"
  },
  "/_nuxt/VideoListView-74dc8b86.mjs": {
    "type": "application/javascript",
    "etag": "\"891-8NzoYCFSgRjZGOQ1e39NfoEemjI\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/VideoListView-74dc8b86.mjs"
  },
  "/_nuxt/VideoRow-b389498e.mjs": {
    "type": "application/javascript",
    "etag": "\"2a1-ibHCI4ZAXlgD+zl8q06ctwLbZF0\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/VideoRow-b389498e.mjs"
  },
  "/_nuxt/VideoRow-ccb4eb10.mjs": {
    "type": "application/javascript",
    "etag": "\"294-6XFw213ETXQRPcNu/bbs+fGkHV8\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/VideoRow-ccb4eb10.mjs"
  },
  "/_nuxt/VideoSectionTitle-fa0c83e9.mjs": {
    "type": "application/javascript",
    "etag": "\"20d-AMq03u8cusRcjPRNpWv9KPEZNRw\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/VideoSectionTitle-fa0c83e9.mjs"
  },
  "/_nuxt/_id_-0adb1dc7.mjs": {
    "type": "application/javascript",
    "etag": "\"8b9-wnYUzmd1sDXuo2X7IhjAHRagJ8E\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-0adb1dc7.mjs"
  },
  "/_nuxt/_id_-0e6fcea3.mjs": {
    "type": "application/javascript",
    "etag": "\"20d-l2ckrAEq4iZKOvwR3GEgkQLEfLo\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-0e6fcea3.mjs"
  },
  "/_nuxt/_id_-116106da.mjs": {
    "type": "application/javascript",
    "etag": "\"68a-BQtU8rHVjzWBXTm5v6eGnKDYykM\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/_id_-116106da.mjs"
  },
  "/_nuxt/_id_-42e90961.mjs": {
    "type": "application/javascript",
    "etag": "\"b5-8Zj7LmwDPwUbLDu0yyLuLXzlIMg\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/_id_-42e90961.mjs"
  },
  "/_nuxt/_id_-47343999.mjs": {
    "type": "application/javascript",
    "etag": "\"1e1e-c5EFJPQv/yrSsxiTeURjRPWOqLE\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-47343999.mjs"
  },
  "/_nuxt/_id_-a4fb559f.mjs": {
    "type": "application/javascript",
    "etag": "\"935-HziT7+6HGAFy4BMNr8TJz7ESZSI\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-a4fb559f.mjs"
  },
  "/_nuxt/_id_-ddc3cf3f.mjs": {
    "type": "application/javascript",
    "etag": "\"b87-5OHUsu4pqeWVZyPJLN72VEI6854\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-ddc3cf3f.mjs"
  },
  "/_nuxt/_id_-f152c6f5.mjs": {
    "type": "application/javascript",
    "etag": "\"692-KJKDkkxbvw9TMPMgZblwwlx84S4\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/_id_-f152c6f5.mjs"
  },
  "/_nuxt/assets/background.7df65bc4.png": {
    "type": "image/png",
    "etag": "\"7c602-hC1GoPe01NnpA8OrQmzI63/7JXs\"",
    "mtime": "2022-04-24T08:24:21.195Z",
    "path": "../public/_nuxt/assets/background.7df65bc4.png"
  },
  "/_nuxt/assets/Carousel.6324b518.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26a-9SdMkQaawVdv1Q0F7adL11XGiO4\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/Carousel.6324b518.css"
  },
  "/_nuxt/assets/default.34e1bf25.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53c-QjjngJhWEs+qFzL6R6yuRPK6Jtg\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/default.34e1bf25.css"
  },
  "/_nuxt/assets/DescriptionCard.d04971f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e-jnwcweiNqsTCCrJ5oGZ7mkjh7dg\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/DescriptionCard.d04971f8.css"
  },
  "/_nuxt/assets/entry.90078781.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"331aa-b5ztCQR9kdDGAfkRxIzq4e8Oa7M\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/entry.90078781.css"
  },
  "/_nuxt/assets/Header.4364c11e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36-Wo02fG5JuE1CT/yhJh4cnQF5XTE\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/Header.4364c11e.css"
  },
  "/_nuxt/assets/index.2288d6ce.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-9cYRym6y48oFKpMmazHyUDnSCOY\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/index.2288d6ce.css"
  },
  "/_nuxt/assets/login.6854854f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ba-sQrYUtkV09CdlCV2S00RaG4iObY\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/login.6854854f.css"
  },
  "/_nuxt/assets/LoginCard.d8055bf8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"467-Udn8u9koF20pXESZxB7Qj5omc30\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/LoginCard.d8055bf8.css"
  },
  "/_nuxt/assets/RegisterLoginIdCard.904f7801.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"237-9YNpw2MJS0nvC5q09YYeKOU9OVc\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/RegisterLoginIdCard.904f7801.css"
  },
  "/_nuxt/assets/RegisterPasswordCard.dbe8e12c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"237-YZ52ifIRGgPSfdAIyVYZBkoL/Ao\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/RegisterPasswordCard.dbe8e12c.css"
  },
  "/_nuxt/assets/teams.b7c2c5eb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12d-Vyl70ar6rqyuGzaH4AhL3XfNP9s\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/teams.b7c2c5eb.css"
  },
  "/_nuxt/assets/teamsMobile.aed797c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e8-HcMLUagZKWUVSe/FOgsgFXRMnuc\"",
    "mtime": "2022-04-24T08:24:21.196Z",
    "path": "../public/_nuxt/assets/teamsMobile.aed797c6.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "D:/project/GitHub/thegrind-frontend-nuxt/dist" + "/" + "1650788655";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
