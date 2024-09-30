import { Auth } from 'aws-amplify';

const signUp = async () => {
  try {
    const user = await Auth.signUp({
      username: 'email@example.com',
      password: 'Password123!',
      attributes: {
        email: 'email@example.com'
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
};
