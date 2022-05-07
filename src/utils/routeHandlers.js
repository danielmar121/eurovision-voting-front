const urlBlockchain = 'http://localhost:8080/blockchain';
const songsUrl =
  'https://80f9-77-124-6-115.eu.ngrok.io/api/v1/eurovision/songs';
// const songsUrl = 'https://httpbin.org/anything';

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

export async function hash({ data }) {
  const response = await httpRequestBuilder({
    url: `${urlBlockchain}/hash`,
    method: 'POST',
    body: {
      data,
    },
  });

  return response.json();
}

export async function getSongs() {
  const response = await httpRequestBuilder({
    url: songsUrl,
    method: 'GET',
  });
  console.log(response);

  return response.json();
}
