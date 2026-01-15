/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/routing">STATIC</Link>
        </li>
        <li>
          <a href="/routing/dynamic/123">DYNAMIC</a>
        </li>
        <li>
          <Link href="/routing/nested/123/routing">NESTED</Link>
        </li>
        <li>
          <a href="/routing/catch-all-segments/123/456/abc">CATCH ALL SEGMENTS</a>
        </li>
      </ul>
    </main>
  );
}
