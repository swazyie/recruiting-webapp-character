import axios from 'axios';
import env from './.env';

const apiClient = axios.create({
  baseURL: `${env.REACT_APP_API_URL}/${env.REACT_APP_GITHUB_USERNAME}`,
  headers: {
    'Content-Type': 'application/json',
  },
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${userToken}`
//   }
});

export const saveCharacter = async (character) => {
  try {
    // body: JSON.stringify({
    //     id: userId,
    //     imageUrl: encodeURI(imageUrl)
    //   })
    const response = await apiClient.post('/character', character);
    return response.data;
  } catch (error) {
    console.error('Error saving character:', error);
    throw error;
  }
};

export const loadCharacter = async () => {
  try {
    const response = await apiClient.get('/character');
    return response.data;
  } catch (error) {
    console.error('Error loading character:', error);
    throw error;
  }
};
