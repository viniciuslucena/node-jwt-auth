import { IController, IRequest, IResponse } from '../interfaces/IController';

export class ListLeadersController implements IController {
  async handle(): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          { id: 1, name: 'Carlinhos' },
          { id: 2, name: 'Zezinho' },
          { id: 3, name: 'Marquinhos' },
        ]
      }
    };
  }
}
