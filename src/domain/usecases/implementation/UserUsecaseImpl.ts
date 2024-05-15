import { Credentials, User } from "../../entities/UserEntity";
import UserRepository from "../../repositories/UserRepository";
import { LoginUseCase, RegisterUseCase } from "../UserUsecase";

export class LoginUseCaseImpl implements LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(credentials: Credentials): Promise<User> {
    try {
      const user = await this.userRepository.login(credentials);
      return user;
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }
}

export class RegisterUseCaseImpl implements RegisterUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: User): Promise<User> {
    try {
      const user = await this.userRepository.register(userData);
      return user;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }
}
