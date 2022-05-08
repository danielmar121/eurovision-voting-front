const songsUrl = 'https://3097-77-124-6-115.eu.ngrok.io';

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

export async function sendScores({ scores, name }) {
  console.log({ scores, name });
  await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision/${name}`,
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

export async function getScores() {
  const response = await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision`,
    method: 'GET',
  });

  return response.json();
}
