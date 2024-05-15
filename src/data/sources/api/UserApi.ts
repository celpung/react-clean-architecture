import { Credentials, User } from "../../../domain/entities/UserEntity";

export async function loginUser(credentials: Credentials): Promise<User> {
  try {
    // Implement login logic using API
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

export async function registerUser(userData: User): Promise<User> {
  try {
    // Implement registration logic using API
    const response = await fetch('api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
}
