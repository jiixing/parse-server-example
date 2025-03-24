import { schemaDefinitions } from "./cloud/schema.js";
export const config = {
  // databaseURI: process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dev',
  databaseURI: process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb+srv://USER:PASSWORD@chesspecker.g25ul.mongodb.net/parse_dev?retryWrites=true&w=majority',
  cloud: '',//process.env.CLOUD_CODE_MAIN || './cloud/main.js',
  appId: process.env.APP_ID || 'myAppId',
  javascriptKey: 'YOUR_JAVASCRIPT_KEY',
  masterKey: process.env.MASTER_KEY || 'MY_MASTER_KEYU_SC', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  },
  // schema: {
  //   definitions: schemaDefinitions,
  //   lockSchemas: true,
  //   strict: true,
  //   recreateModifiedFields: false,
  //   deleteExtraFields: false,
  // },
};
