export default {
  debug: true,
  state: {
    //is_new: false, //状态管理：注册成功后跳转到登录页面有alert
    is_authenticated: window.localStorage.getItem('madblog-token') ? true : false,    //状态管理：用户登录前导航栏上显示 Login，用户登录后显示 Logout
    // 用户登录后，就算刷新页面也能再次计算出 user_id
    user_id: window.localStorage.getItem('madblog-token') ? JSON.parse(atob(window.localStorage.getItem('madblog-token').split('.')[1])).user_id : 0
  },
//   setNewAction () {
//     if (this.debug) { console.log('setNewAction triggered') }
//     this.state.is_new = true
//   },
//   resetNotNewAction () {
//     if (this.debug) { console.log('resetNotNewAction triggered') }
//     this.state.is_new = false
//   },
  loginAction () {
    if (this.debug) { console.log('loginAction triggered') }
    this.state.is_authenticated = true
    this.state.user_id = JSON.parse(atob(window.localStorage.getItem('madblog-token').split('.')[1])).user_id
  },
  logoutAction () {
    if (this.debug) console.log('logoutAction triggered')
    window.localStorage.removeItem('madblog-token')
    this.state.is_authenticated = false
    this.state.user_id = 0
  }
}