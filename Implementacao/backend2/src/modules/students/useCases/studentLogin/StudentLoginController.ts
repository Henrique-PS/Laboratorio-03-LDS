import { Request, Response } from 'express'

import { StudentLoginUseCase } from './StudentLoginUseCase'
import { AppError } from '../../../../errors/AppError'

export class StudentLoginController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const stuentLoginUseCase = new StudentLoginUseCase()

    const result = await stuentLoginUseCase.execute({
      email
    })

    if (password === result?.password) {
      return res.status(201).json(result?.cpf)
    } else {
      throw new AppError("Estudante não encontrado")
    }
  }
}
