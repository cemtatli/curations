const parseUrl = (url: string) => {
  const urlPattern = /^(https?:\/\/)?(([^:/?#]*)(?:([^/?#]*))?)([^?#]*)(\?[^#]*|)(#.*|)$/
  const matches = url.match(urlPattern)

  if (!matches || !(matches[1] === 'http://' || matches[1] === 'https://') || !matches[2].startsWith('www.')) {
    return {
      domain: false,
      isHttps: false,
    }
  }

  const protocol = matches[1]
  const domain = matches[2]

  return {
    domain,
    isHttps: protocol === 'https://',
  }
}

export default parseUrl
