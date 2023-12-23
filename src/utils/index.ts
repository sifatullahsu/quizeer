/* eslint-disable @typescript-eslint/no-explicit-any */
export function getRandom(list: any[] | undefined) {
  if (!list) return list

  return list[Math.floor(Math.random() * list.length)]
}
