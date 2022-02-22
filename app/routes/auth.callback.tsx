import { LoaderFunction } from 'remix';

export const loader: LoaderFunction = ({ params }) => {
  return params;
}
