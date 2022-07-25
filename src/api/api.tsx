const URL = 'https://test-task-j.herokuapp.com/data?page=1&size=10';

export async function getPeople() {
  // eslint-disable-next-line max-len
  const promis = await fetch(URL);

  const result = await promis.json();

  return result;
}
