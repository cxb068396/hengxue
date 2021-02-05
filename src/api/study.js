import request from '@/utils/request'

export function memberCourse(course){
    return request ({
      url: '/member/course',
      method: 'post',
      data: course
    })
  }