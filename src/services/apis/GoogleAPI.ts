type GoogleFile = {
  id: string;
  name: string;
};

async function fetchGoogleSheets(token: string): Promise<GoogleFile[]> {
  const driveApiUrl = `https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.spreadsheet'&fields=files(id,name)`;
  const response = await fetch(driveApiUrl, {
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }),
  });
  const data = await response.json();
  return data.files as GoogleFile[];
}

export { fetchGoogleSheets };