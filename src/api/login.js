import request from '@/utils/request'

// 登录
export function getLogin(phone, password) {
  const params={
    phone, password
  }
  return request({
    url: '/member/login',
    method: 'post',
    params
  })
}

// 注册
export function register(phone,code,password,type,name) {
  const params = {phone,code,password,type,name}
  return request({
    url: '/member/register',
    method: 'post',
    params
  })
}

// 注册页获取验证码
export function registerCode(phone) {
  const params={
    phone
  }
  return request({
    url: '/member/register_code',
    method: 'post',
    params
  })
}

// 忘记密码的密码
export function forgetPassword(phone,password,code) {
  const params={
    phone,password,code
  }
  return request({
    url: '/member/forget_password',
    method: 'post',
    params
  })
}

// 忘记密码页获取验证码
export function forgetCode(phone) {
  const params={
    phone
  }
  return request({
    url: '/member/send_code',
    method: 'post',
    params
  })
}