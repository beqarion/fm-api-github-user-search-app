const getElement = (query) => {
  const element = document.querySelector(query)
  if (element) {
    return element
  }
  throw new Error(`Cannot get element with "${query}" query`)
}

export default getElement
