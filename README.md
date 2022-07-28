RESULT LINK:  [DEMO LINK](https://Yaroslav-Kononenko.github.io/log_data/)

TASK
Figma: https://www.figma.com/file/ARZLeAI1PWBYCpYUYaGrUq/Memoria-Press-App-Copy?node-id=284%3A9762

Test task description:
Prepare react app.
The UI part must include only view functionality.
Use Redux/Redux toolkit.
Request all data from the endpoint below.
Pagination and sorting is an important part and have to be completed.
Search must be fully functional.
Headers of the page can be hardcoded in the UI.
Click on the row of the student to collapse the internal table with the test results.
Export CSV button must generate a .csv file with data displayed in the table.

Task explanation: 
https://share.vidyard.com/watch/EjXFfccmLfYAwKQxMPpAp4?

Endpoint to get data:
URL: https://test-task-j.herokuapp.com/data
HTTP: GET


REQUEST QUERY PARAMS:
page: int (REQUIRED)
size: int (REQUIRED)
search: string
sortBy: string from [‘name’, ‘class’, ‘score’, ‘speed’]
sortDir: int from [-1, 1]

sortBy and sortDir work only together.

RESPONSE EXAMPLE:
{
  totalPages: 1,
  data: [
    {
      name: 'Nicole Kidmann',
      id: 123456,
      class: '1C',
      score: '76%',
      speed: 'Below Expected',
      parents: ['Antony Kidmann', 'Janelle Kidmann'],
      tests: [
        {
          label: 'Average 1-100',
          score: 95,
          speed: '1h 12m 00s',
          total: 100,
          expSpeed: "1h 00m 00s",
          concept: 'Multiplication',
          date: 'APR 30 2021',
          abcent: false
        },
        {
          label: 'Average 1-10',
          score: null,
          speed: null,
          total: 10,
          expSpeed: "0h 30m 00s",
          concept: 'Multiplication',
          date: 'APR 30 2021',
          absent: true
        }
      ]
    }
  ]
}
