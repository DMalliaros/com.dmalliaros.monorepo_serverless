import { Context } from 'aws-lambda';
import { HelloService } from '../service/hello';
import { CreateBookDTO } from '../model/dto/createBookDTO';
import responseLayer = require('response_layer');

export class HelloController extends HelloService {
  async create(event: any, context?: Context) {
    console.log('functionName', context.functionName);
    const params: CreateBookDTO = JSON.parse(event.body);
    try {
      const result = await this.createBook({
        name: params.name,
        description: params.description
      });

      return responseLayer.success({ "result": result });
    } catch (err) {
      console.error(err);

      return responseLayer.failure({ "result": err });
    }
  }
}