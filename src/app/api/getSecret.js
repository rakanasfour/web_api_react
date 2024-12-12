import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "my-app-secret"; // Replace with your secret name

const client = new SecretsManagerClient({
  region: "us-east-1", // Replace with your AWS region
});

async function loadSecrets() {
  let secretValue;

  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // Defaults to AWSCURRENT
      })
    );

    // Parse the secret string into a JSON object
    secretValue = JSON.parse(response.SecretString);
  } catch (error) {
    console.error("Error retrieving secret:", error);
    throw error;
  }

  return secretValue;
}

// Fetch and set the environment variable
const initializeSecrets = async () => {
  const secrets = await loadSecrets();

  // Use the secret value (e.g., DB_USERNAME)
  process.env.DB_USERNAME = secrets.NEXT_PUBLIC_DB_USERNAME;

  // If needed, log to verify (remove this in production)
  console.log("Loaded DB_USERNAME:", process.env.NEXT_PUBLIC_DB_USERNAME);
};

initializeSecrets();
