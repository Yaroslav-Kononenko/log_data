export async function getPeople(usersOnPage = 10, pageNumber = 1, sortParam = '&name') {
  const URL = `https://test-task-j.herokuapp.com/data?page=${pageNumber}&size=${usersOnPage}${sortParam}`;
  
  const promis = await fetch(URL);

  const result = await promis.json();

  return result;
}
