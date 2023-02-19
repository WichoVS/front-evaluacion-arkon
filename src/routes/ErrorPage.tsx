import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div className="flex h-screen justify-center flex-col items-center">
      <h1 className="font-mono text-4xl">Oops!</h1>
      <p className="font-sans mt-5 mb-2 text-lg">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a className="font-mono text-lg text-blue-600" href="/">
        Back to Principal page
      </a>
    </div>
  );
}
