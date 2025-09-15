import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: 'string'
  email: 'string'
  password: 'string'
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUseCaseRequest) {
  const password_hash = await hash(password, 6) // utilizando (hash) para criar 1 salt que seria uma coisa unica ou seja a senha do usuario seja unica, e como ele espera uma promess, eu posso esta usando o await para esperar uma promessa

  const userWithSameEmail = await prisma.user.findUnique({
    // usando findUnique para informar 1 registro unico, nesse caso ele vai busca emails ja cadastrados, ele  tmb vai fazer 1 varredura se tem emails cadastrado ou IDs ele. busca essas 2 informacoes
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('E-mail already exists.')
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  })
}
