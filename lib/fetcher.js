export default async function fetcher() {
  const res = await fetch(input, init)

  if (!res.ok && res.status === 401) {
    throw new Error('Unauthorized')
  }

  return res.json()
}
