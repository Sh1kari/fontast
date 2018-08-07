export async function registration(name, email, password, setToken) {
  const url = 'rest-auth/registration/';
  try {
    const successPost = await fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password1: password,
        password2: password
      })
    });
    const loginToken = await successPost.json().key;
  } catch (err) {
    console.log('request error ', err.message);
  }
}

export async function login(username, email, password, setToken) {
  const url = 'rest-auth/login/';
  try {
    const successPost = await fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const loginToken = await successPost.json().key;
  } catch (err) {
    console.log('request error ', err.message);
  }
}
