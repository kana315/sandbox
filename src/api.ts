import mock from "./db.json";

export async function fetchAnime(): Promise<any> {
  try {
    return Promise.resolve().then(() => mock.titles);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function fetchCharacters(): Promise<any> {
  try {
    return Promise.resolve().then(() => mock.charalists);
  } catch (error) {
    throw new Error(error.message);
  }
}
