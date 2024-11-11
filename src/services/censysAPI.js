//const API_URL = 'https://search.censys.io/api/v2/hosts/search';
const API_ID = '9b3024b8-fbe8-4f1f-8ca7-00b3152cca5f';
const API_SECRET = 'Eb50NKcJYxvu6xxO0cGiaIIm0M2eAl3i';
const encodedCredentials = btoa(`${API_ID}:${API_SECRET}`);
export async function fetchApiData(query, cursor = null) {
  const params = new URLSearchParams({ q: query });
  if (cursor) {
    params.append('cursor', cursor);
  }

  try {
    const response = await fetch(`${API_URL}?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
