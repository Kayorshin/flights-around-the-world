const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable]
  if (!unvalidatedEnvironmentVariable)
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    )

  return unvalidatedEnvironmentVariable
}

export const config = {
  aviationEdgeApiUrl: getEnvironmentVariable('AVIATION_EDGE_API_URL'),
  aviationEdgeApiKey: getEnvironmentVariable('AVIATION_EDGE_API_KEY'),
}
