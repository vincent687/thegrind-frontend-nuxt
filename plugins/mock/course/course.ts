const courses =[
  {
    "id": 7,
    "name": "Coach Edwin - Volleyball At Home",
    "custom_start_date": "2022-02-19T08:12:17.000Z",
    "custom_end_date": "2022-02-19T08:12:17.000Z",
    "custom_present_student": 2,
    "employee": {
      "id": 9,
      "name": "Coach Edwin",
      "job_title": null,
      "work_email": "wwyedwin@gmail.com",
      "company": {
        "id": 3,
        "name": "The Grind Volleyball",
        "email": null
      },
      "attachment": {
        "id": 1435,
        "name": "image_128",
        "res_model": "hr.employee",
        "res_id": 9,
        "url": "http://35.185.147.125:10012/web/content/1435"
      }
    },
    "class_room": {
      "id": 3,
      "name": "Volleryball Court 1"
    },
    "location": {
      "id": 2,
      "name": "School"
    },
    "course": {
      "id": 18,
      "name": "Volleyball At Home",
      "total_time": "0.00",
      "description": "Try this volleyball skills training routine to develop your fundamental volleyball skills at home, or when you don't have access to a gym.  All you need is a ball and a wall!  Make sure you watch all my Volleyball Tutorial videos below to learn the proper technique for each skill featured in this workout video.",
      "channelChannelTags": [
        {
          "channel_id": 18,
          "tag_id": 12,
          "tag": {
            "id": 12,
            "name": "5人"
          }
        },
        {
          "channel_id": 18,
          "tag_id": 14,
          "tag": {
            "id": 14,
            "name": "草地"
          }
        }
      ],
      "attachment": {
        "id": 1493,
        "name": "image_256",
        "res_model": "slide.channel",
        "res_id": 18,
        "url": "http://35.185.147.125:10012/web/content/1493"
      }
    }
  },
  {
    "id": 8,
    "name": "Coach Vincent - Football",
    "custom_start_date": "2022-02-19T09:34:58.000Z",
    "custom_end_date": "2022-04-19T09:34:58.000Z",
    "custom_present_student": 0,
    "employee": {
      "id": 8,
      "name": "Coach Vincent",
      "job_title": null,
      "work_email": "vincentwong687@gmail.com",
      "company": {
        "id": 2,
        "name": "The Grind Football",
        "email": "football@thegrind-app.com"
      },
      "attachment": {
        "id": 1428,
        "name": "image_512",
        "res_model": "hr.employee",
        "res_id": 8,
        "url": "http://35.185.147.125:10012/web/content/1428"
      }
    },
    "class_room": {
      "id": 3,
      "name": "Volleryball Court 1"
    },
    "location": null,
    "course": {
      "id": 17,
      "name": "Football",
      "total_time": "0.00",
      "description": "課程內容包括：傳達指令、盤球和傳球學習、射門學習、小組攻防及比賽。\n\n​培育幼苗期對於一個孩童的未來說是很重要的階段，課程以4堂為一毎學期，以玩樂的方式將基本的足球技巧融入課程之中。上課時氣氛輕鬆，運用小遊戲讓學員容易適應課堂，盡情投入，令他們發掘足球運動的樂趣，並成為持久的興趣。",
      "channelChannelTags": [
        {
          "channel_id": 17,
          "tag_id": 12,
          "tag": {
            "id": 12,
            "name": "5人"
          }
        },
        {
          "channel_id": 17,
          "tag_id": 14,
          "tag": {
            "id": 14,
            "name": "草地"
          }
        }
      ],
      "attachment": {
        "id": 1477,
        "name": "image_256",
        "res_model": "slide.channel",
        "res_id": 17,
        "url": "http://35.185.147.125:10012/web/content/1477"
      }
    }
  },
  {
    "id": 9,
    "name": "Coach Andrew - Injury prevention",
    "custom_start_date": "2022-02-19T09:35:04.000Z",
    "custom_end_date": "2022-03-12T09:35:04.000Z",
    "custom_present_student": 1,
    "employee": {
      "id": 7,
      "name": "Coach Andrew",
      "job_title": null,
      "work_email": "andrewliho@hotmail.com",
      "company": {
        "id": 1,
        "name": "The Grind Basketball",
        "email": "basketball@thegrind-app.com"
      },
      "attachment": {
        "id": 1410,
        "name": "image_512",
        "res_model": "hr.employee",
        "res_id": 7,
        "url": "http://35.185.147.125:10012/web/content/1410"
      }
    },
    "class_room": {
      "id": 2,
      "name": "Basketball Court A"
    },
    "location": null,
    "course": {
      "id": 15,
      "name": "Injury prevention",
      "total_time": "0.00",
      "description": null,
      "channelChannelTags": [],
      "attachment": {
        "url": ""
      }
    }
  }
]


// const courses = [
//     {
//       "id": 3,
//       "name": "day 1",
//       "custom_create_date": "2021-11-27T00:00:00.000Z",
//       "custom_deadline_date": "2021-11-29T00:00:00.000Z",
//       "custom_tutor_id": 8,
//       "custom_class_id": 3,
//       "custom_class_room_id": 2,
//       "custom_company_id": 1,
//       "custom_lession_details": "<p>testing</p>",
//       "course": {
//         "id": 4,
//         "name": "Basketball",
//         "total_time": "0.23",
//         "description": "sample text description 123123123123",
//         "channelChannelTags": [
//           {
//             "channel_id": 4,
//             "tag_id": 10,
//             "tag": {
//               "id": 10,
//               "name": "revise"
//             }
//           }
//         ]
//       }
//     },
//     {
//       "id": 4,
//       "name": "2021-11-27 - Day 2 lession",
//       "custom_create_date": "2021-11-27T00:00:00.000Z",
//       "custom_deadline_date": "2021-11-28T00:00:00.000Z",
//       "custom_tutor_id": 8,
//       "custom_class_id": 3,
//       "custom_class_room_id": 2,
//       "custom_company_id": 1,
//       "custom_lession_details": "<p><br></p>",
//       "course": {
//         "id": 8,
//         "name": "Day 2",
//         "total_time": "0.00",
//         "description": null,
//         "channelChannelTags": []
//       }
//     },
//     {
//       "id": 6,
//       "name": "2021-11-27 - Day 2 lession",
//       "custom_create_date": "2021-11-27T00:00:00.000Z",
//       "custom_deadline_date": "2021-11-28T00:00:00.000Z",
//       "custom_tutor_id": 8,
//       "custom_class_id": 3,
//       "custom_class_room_id": 2,
//       "custom_company_id": 1,
//       "custom_lession_details": "<p><br></p>",
//       "course": {
//         "id": 8,
//         "name": "Day 2",
//         "total_time": "0.00",
//         "description": null,
//         "channelChannelTags": []
//       }
//     },
//     {
//       "id": 7,
//       "name": "2021-12-04 - Day 2 lession",
//       "custom_create_date": "2021-12-04T00:00:00.000Z",
//       "custom_deadline_date": "2021-12-05T00:00:00.000Z",
//       "custom_tutor_id": 8,
//       "custom_class_id": 3,
//       "custom_class_room_id": 2,
//       "custom_company_id": 1,
//       "custom_lession_details": "<p><br></p>",
//       "course": {
//         "id": 8,
//         "name": "Day 2",
//         "total_time": "0.00",
//         "description": null,
//         "channelChannelTags": []
//       }
//     },
//     {
//       "id": 8,
//       "name": "2021-12-04 - Day 2 lession",
//       "custom_create_date": "2021-12-04T00:00:00.000Z",
//       "custom_deadline_date": "2021-12-05T00:00:00.000Z",
//       "custom_tutor_id": 8,
//       "custom_class_id": 3,
//       "custom_class_room_id": 2,
//       "custom_company_id": 1,
//       "custom_lession_details": "<p><br></p>",
//       "course": {
//         "id": 8,
//         "name": "Day 2",
//         "total_time": "0.00",
//         "description": null,
//         "channelChannelTags": []
//       }
//     }
//   ]
  
  export default {
    courses
  }
  

