// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hotel } = initSchema(schema);

export {
  Hotel
};