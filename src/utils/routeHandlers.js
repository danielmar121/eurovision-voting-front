const urlBlockchain = 'http://localhost:8080/blockchain';

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
