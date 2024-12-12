const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

module.exports = async () => {
  // Initialize the Secrets Manager client
  const client = new SecretsManagerClient({ region: 'us-east-1' });

  let decryptedSecret = '';
  try {
    // Retrieve the secret
    const command = new GetSecretValueCommand({ SecretId: 'local_db_sql' });
    const response = await client.send(command);

    if (response.SecretString) {
      decryptedSecret = JSON.parse(response.SecretString).username;
    }
  } catch (error) {
    console.error('Error fetching secret from AWS Secrets Manager:', error);
  }

  return {
    env: {
      NEXT_PUBLIC_DB_USERNAME: decryptedSecret, // Inject decrypted username into environment variables
    },
  };
};
