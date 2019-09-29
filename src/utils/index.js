// 传参空值过滤
export function optionSort(opt) {
    let obj = {}
    if (typeof opt === 'object') {
        for (let k in opt) {
            if (opt[k] !== null && opt[k] !== '') {
                obj[k] = opt[k]
            }
        }
    } else {
        obj = opt
    }
    return obj
}

export function remove (arr, item){
    if (arr.length) {
      const index = arr.indexOf(item)
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }