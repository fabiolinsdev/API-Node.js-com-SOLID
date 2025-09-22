import { UsersRepository } from '@/repositories/users-repository'

import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

interface RegisterUseCaseRequest {
  name: 'string'
  email: 'string'
  password: 'string'
}

export class RegisterUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6) // utilizando (hash) para criar 1 salt que seria uma coisa unica ou seja a senha do usuario seja unica, e como ele espera uma promess, eu posso esta usando o await para esperar uma promessa

    const userWithSameEmail = await this.userRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    // const prismaUsersRepository = new PrismaUsersRepository()

    await this.userRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
