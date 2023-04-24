
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}