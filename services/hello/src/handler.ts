import { Handler, Context } from 'aws-lambda';
import { HelloController } from './controller/hello';

const helloController = new HelloController();

export const create: Handler = (event: any, context: Context) => {
  return helloController.create(event, context);
};