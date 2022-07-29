export let usersOnPage = 10;
export let pageNumber = 1;

const URL = `https://test-task-j.herokuapp.com/data?page=${pageNumber}&size=${usersOnPage}`;

export async function getPeople() {
  // eslint-disable-next-line max-len
  const promis = await fetch(URL);

  const result = await promis.json();

  return result;
}
