import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body

    try {
      const createNewUser = this.createUserUseCase.execute({ name, email })
      return response.status(201).json(createNewUser)
    } catch (e) {
      return response.status(400).json({ error: true, message: e.message })
    }

  }
}

export { CreateUserController };
