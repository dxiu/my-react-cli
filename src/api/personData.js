import service from './index'
// 获取会员信息
export function getPesonData (phoneNumOrOpenid) {
  return service({
    url: `/hsmcw/member/getMemberInfo?phoneNumOrOpenid=${phoneNumOrOpenid}`,
    method: 'get',
    proxy: '/api'
  })
}
export function upload (data) {
  return service({
    url: `/format/batch/upload_image`,
    method: 'post',
    data,
    proxy: '/base'
  })
}
