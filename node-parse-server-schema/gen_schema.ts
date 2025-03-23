// call down from parse-server-schema

import { up, down, typescript } from './src';
import { config } from '../config.js';

const schemaPath = './schema.json';
const cfg = {
  publicServerURL: config.serverURL,
  appId: config.appId,
  masterKey: config.masterKey,
};

// await up(cfg, schemaPath);

const main = async () => down(cfg, schemaPath);
main();
