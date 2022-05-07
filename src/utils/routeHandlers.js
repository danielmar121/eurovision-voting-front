const songsUrl = 'https://36ca-77-124-6-115.eu.ngrok.io';

async function httpRequestBuilder({
  url,
  method = 'POST',
  headers = { 'Content-Type': 'application/json' },
  body,
}) {
  const res = await fetch(url, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });

  if (!res.ok) throw new Error(await res.text());

  return res;
}

export async function sendScores({ scores }) {
  await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision/daniel`,
    method: 'POST',
    body: scores,
  });
}

export async function getSongs() {
  const response = await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision/songs`,
    method: 'GET',
  });

  return response.json();
}
