export default function reducer (days) {
  return ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    .map(d => ({ [d]: days[d] || undefined }))
    .reduce((acc, cur, ind, arr) => {
      // Find duplicates by range
      const group = arr.filter(d => JSON.stringify(d[Object.keys(d)[0]]) === JSON.stringify(cur[Object.keys(cur)[0]]))

      // Handle the group: take the first and the last item
      const inp = { from: undefined, to: undefined, hours: undefined }
      try {
        const first = group.shift()
        inp.from = Object.keys(first)[0]
        inp.ranges = first[Object.keys(first)[0]] || ['closed']

        const last = group.pop()
        inp.to = last && Object.keys(last)[0]
      } catch (e) {
        // pop has failed
      }

      // Add new item only if it doesn't already exist in accumulator
      if (!acc.find(i => i.from === inp.from)) {
        acc.push(inp)
      }

      return acc
    }, [])
}
