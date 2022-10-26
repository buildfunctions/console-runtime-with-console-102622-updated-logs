export default async function fetchAPI(
  url,
  options = {}
) {
  try {
    const res = await fetch(`/api${url}`, {
      ...options,
      headers: {
        ...options.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      ...(options.data ? { body: JSON.stringify(options.data) } : {}),
    })
    const data = await res.json()
    return data
  } catch (e) {
    if (e.message === 'cancelled') {
      // Cancelled by browser
      console.log('Request Cancelled by the Browser', e)
    } else {
      console.error('Network Error, CORS or timeout.')
    }
  }
}
