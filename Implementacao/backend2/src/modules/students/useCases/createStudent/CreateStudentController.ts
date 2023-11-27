import { Request, Response } from 'express'

import crypto from 'crypto'
import { CreateStudentUseCase } from './CreateStudentUseCase'

export class CreateStudentController {
  async handle(req: Request, res: Response) {
    const { name, email, password, cpf, rg, endereco, instituicao, curso } =
      req.body

    const createStudentUseCase = new CreateStudentUseCase
    const matricula = crypto.randomBytes(4).toString('hex')
    const moedas = 0;

    const result = await createStudentUseCase.execute({
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
    })

    return res.status(201).json(result)
  }
}
