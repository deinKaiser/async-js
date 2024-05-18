const axios = require('axios');

const fetchPerson = (id) => {
  return axios.get(`https://swapi.dev/api/people/${id}/`).then(response => response.data.name);
};

const fetchPeople = async () => {
  try {
    const promises = [fetchPerson(1), fetchPerson(2), fetchPerson(3), new Promise((resolve, reject) => setTimeout(() => reject('Timeout'), 2000))];
    for (let i = 4; i <= 10000; i++) {
      promises.push(fetchPerson(i));
    }
    const results = await Promise.allSettled(promises);
    console.log('Results fulfilled:', results.filter(result => result.status === 'fulfilled'));
    console.log('Results rejected:', results.filter(result => result.status === 'rejected'));
  } catch (error) {
    console.error('Error fetching people:', error);
  }
};

fetchPeople();
