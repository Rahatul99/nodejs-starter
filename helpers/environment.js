const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
  secretKey: "sdjkdlhjfsdkuier",
};

environments.production = {
  port: 5001,
  envName: "production",
  secretKey: "jsfiusufyhuisdgf",
};

// determine which environment was passed

const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "staging";

const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;
