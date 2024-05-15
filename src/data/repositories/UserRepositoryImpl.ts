import { Credentials, User } from "../../domain/entities/UserEntity";
import UserRepository from "../../domain/repositories/UserRepository";
import { loginUser, registerUser } from "../sources/api/UserApi";

export default class UserRepositoryImpl implements UserRepository {
    async login(credentials: Credentials): Promise<User> {
      try {
        const user = await loginUser(credentials);
        return user;
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
    }
  
    async register(userData: User): Promise<User> {
      try {
        const user = await registerUser(userData);
        return user;
      } catch (error) {
        console.error('Error during registration:', error);
        throw error;
      }
    }
  }