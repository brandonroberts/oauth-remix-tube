import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import { LoaderFunction } from 'remix';
import { api } from '~/appwrite';

export const loader: LoaderFunction = () => {
  return {
    ENV: {
      endpoint: process.env.APPWRITE_ENDPOINT,
      projectId: process.env.APPWRITE_PROJECT_ID
    }
  };
}

export default function AuthCallback() {
  const [session, setSession] = useState<Models.Session>();

  function logout() {
    api.account.deleteSession('current');
    window.location.reload();
  }
  
  useEffect(() => {
    api.account.getSession('current')
      .then(sess => setSession(sess))
  }, []);

  return (
    <div>
      Here {JSON.stringify(session)}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
