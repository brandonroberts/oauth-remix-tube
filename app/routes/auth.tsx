import { FormEvent } from 'react';
import { LoaderFunction, useLoaderData } from 'remix';
import { api } from '../appwrite';

export const loader: LoaderFunction = () => {
  return {
    ENV: {
      endpoint: process.env.APPWRITE_ENDPOINT,
      projectId: process.env.APPWRITE_PROJECT_ID
    }
  };
}

export default function Auth() {
  const data = useLoaderData();
  api.setEndpoint(data.ENV.endpoint);
  api.setProject(data.ENV.projectId);

  function login(e: FormEvent<any>) {
    e.preventDefault();
    api.account.createOAuth2Session('google', 'http://localhost:3000/auth/callback', 'http://localhost:3000/login');
  }

  return (
    <div>
      <button type="submit" onClick={login}>Login With Google</button>
    </div>
  );
}