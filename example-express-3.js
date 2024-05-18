const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const fetchPerson = (id) => {
  return axios.get(`https://swapi.dev/api/people/${id}/`).then(response => response.data.name);
};


async function getRaceCharacter() {
  try {
    const promises = [fetchPerson(1), new Promise((resolve, reject) => setTimeout(() => reject('Timeout'),  15000))];
    const result = await Promise.race(promises);
    console.log(result);
  } catch (error) {
    console.error('Error fetching people:', error);
  }
}


getRaceCharacter()