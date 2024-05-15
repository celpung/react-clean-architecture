import { User, Credentials } from "../entities/UserEntity";

export interface LoginUseCase {
  execute(credentials: Credentials): Promise<User>;
}

export interface RegisterUseCase {
  execute(userData: User): Promise<User>;
}
