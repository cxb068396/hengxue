
import request from '@/utils/request'

// client_id之外还有
// source:来源 1web 2app
// source_page：来源页面
// first_page:着陆页
export function bindClientId(data){
  return request ({
    url: '/admin/index/bind_member',
    method: 'post',
    data: data
  })
}

export function send(data){
  return request ({
    url: '/admin/index/send',
    method: 'post',
    data: data
  })
}
