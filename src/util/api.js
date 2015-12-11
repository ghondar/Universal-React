export const titles = {
  '/'     : {
    celular: 'Nokia'
  },
  '/page2': {
    audifono: 'Bose'
  }
}

export function fetchDatas(callback) {
  setTimeout(() => {
    callback(titles)
  }, 500)
}

export function fetchData(key, callback) {
  setTimeout(() => {
    callback(titles[ key ])
  }, 500)
}
