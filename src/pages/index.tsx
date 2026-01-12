/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <a href="/routing">STATIC</a>
        </li>
        <li>
          <a href="/routing/dynamic/123">DYNAMIC</a>
        </li>
        <li>
          <a href="/routing/nested/123/routing">NESTED</a>
        </li>
        <li>
          <a href="/routing/catch-all-segments/123/456/abc">CATCH ALL SEGMENTS</a>
        </li>
      </ul>
    </main>
  );
}
