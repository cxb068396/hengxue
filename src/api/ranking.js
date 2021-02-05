import request from '@/utils/request'

export function getSchools(panelFrom){
    return request ({
      url: '/nur',
      method: 'post',
      data: panelFrom
    })
  }
  export function getSchoolInfo(school_name){
    return request ({
      url: '/abstract',
      method: 'post',
      data: {school_name}
    })
  }