const songsUrl = "https://4943-46-116-118-202.ngrok-free.app";

async function httpRequestBuilder({
  url,
  method = "POST",
  headers = { "Content-Type": "application/json" },
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
  if (!name || name === "") {
    throw new Error("Name must be provided");
  }

  const response = await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision/${name}`,
    method: "POST",
    body: scores,
  });

  return response.json();
}

export async function getSongs() {
  const response = await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision/songs`,
    method: "GET",
  });

  return response.json();
}

export async function getScores() {
  const response = await httpRequestBuilder({
    url: `${songsUrl}/api/v1/eurovision`,
    method: "GET",
  });

  return response.json();
}
