export default {
  sequentialSearch(list, search, key) {
    const exp = RegExp(`.*${search.toLowerCase().split('').join('.*')}.*`)
    return list.filter(item => (key? item[key] : item).toLowerCase().match(exp))
  }
}