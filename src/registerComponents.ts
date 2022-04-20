import 'antd-mobile/es/global'
import VConsole from 'vconsole'
if (window.localStorage && window.localStorage.dev_online === '1') {
  const vConsole = new VConsole()
}