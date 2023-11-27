import { Student } from '@prisma/client'
import { prisma } from '../../../../prisma/client'

interface IStudent {
  email: string
}

export class StudentLoginUseCase {
  async execute({
    email,
  }: IStudent): Promise<Student | undefined> {
    // try {
    //   const student = await prisma.student.findUnique({
    //     where: {
    //       email,
    //       password
    //     }
    //   })

    //   console.log(student)

    //   if(student) {
    //     return student
    //   }
    // } catch (err) {
    //   throw new Error("Estudante não encontrado")
    // }
    console.log("aqui")
    const student = await prisma.student.findUnique({
      where: {
        email: email,
      }
    })

    console.log(student)

    if(student) {
      return student
    }
  }
}
