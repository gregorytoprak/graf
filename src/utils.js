import Cookies from 'js-cookie'

export const makeId = (type) => type + '-' + Date.now()

export const persistence = {
  save: (state) => {
    Cookies.set('graph', JSON.stringify(state))
  },
  load: () => {
    const stringState = Cookies.get('graph')
    return stringState ? JSON.parse(stringState) : {}
  },
  clear: () => {
    Cookies.remove('graph')
  }
}
