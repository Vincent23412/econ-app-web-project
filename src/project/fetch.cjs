const axios = require('axios');

axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=b9oW1CFo48oGmq1-8EtR2dbz125HViqc5tdCj5BNuCsk8zITRGsNtdzB9rzyJckuK24R1nPzkjEgNZOk2GUYUKNgj0oN_2uzm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIoTkjF-pGmTRCkbwvN7ld4yvK06nzaq3ORXKHduEplsXgtfzFWD7hELUDh5ZziLjL2pSy5UkE9nQtQKHaDUWDSfSb8-dVSzBw&lib=MQNqBE03-Z35YX4RPP2zGdtmFulhg_8-J')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

dataX = ['Timestamp', 'Email Address', 'Name', 'School Id', 'Group', 'Title', 'Subtitle (optional)', 'Video link', 'Summary', 'Github code link', 'Video link 2', "Video link 2's language", "Video link's language"]