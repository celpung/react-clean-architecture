import { Credentials, User } from "../entities/UserEntity"

export default interface UserRepository {
  login(credentials: Credentials): Promise<User>;
  register(userData: User): Promise<User>;
}
