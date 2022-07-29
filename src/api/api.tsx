export async function getPeople(usersOnPage = 10, pageNumber = 1, sortParam = '') {
  const URL = `https://test-task-j.herokuapp.com/data?page=${pageNumber}&size=${usersOnPage}`;
  
  const promis = await fetch(URL);

  const result = await promis.json();

  return result;
}
