import { Student } from '@prisma/client'
import { AppError } from '../../../../errors/AppError'
import { prisma } from '../../../../prisma/client'
import { CreateUserDTO } from '../../dtos/CreateStudentDTO'

export class CreateStudentUseCase {
  async execute({
    name,
    email,
    password,
    cpf,
    rg,
    endereco,
    instituicao,
    curso,
    matricula,
    moedas
  }: CreateUserDTO): Promise<Student> {
    console.log("aqui2");
    
    const studentAlreadyExists = await prisma.student.findUnique({
      where: {
        email
      }
    })

    if (studentAlreadyExists) {
      throw new AppError('Estudante já cadastrado')
    }

    const student = await prisma.student.create({
      data: {
        name,
        email,
        password,
        cpf,
        rg,
        endereco,
        instituicao,
        curso,
        matricula,
        moedas
      }
    })

    return student
  }
}
