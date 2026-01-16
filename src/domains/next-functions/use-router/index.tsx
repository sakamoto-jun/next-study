import { useRouter } from 'next/router';

const UseRouterMain = () => {
  const router = useRouter();

  return (
    <main className="p-10">
      <ol>
        <li>{router.pathname}</li>
        <li>{router.query.q}</li>
        <li>{router.asPath}</li>
      </ol>
      <ol>
        <li>
          <button type="button" onClick={() => router.back()}>
            Back
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.forward()}>
            Forward
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.reload()}>
            Reload
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/')}>
            Push to /
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.replace('/')}>
            Replace
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.prefetch('/')}>
            Prefetch
          </button>
        </li>
      </ol>
    </main>
  );
};

export { UseRouterMain };
