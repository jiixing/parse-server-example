// @ts-nocheck
import ParseDashboard from "parse-dashboard";
import { config } from './config.js';


const appId = config.appId;
const appName = "local dev app"
const masterKey = config.masterKey;
const serverURL = config.serverURL;
const dashPath = "/dash"


export function startParseDashboard(app) {
  const dash = new ParseDashboard(
    {
      apps: [
        {
          serverURL,
          appId,
          appName,
          masterKey,
        },
      ],
    },
    {
      dev: true,
    }
  );

  app.use(dashPath, dash);
}

