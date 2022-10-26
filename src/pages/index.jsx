import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NextLink from 'next/link';

import fs from 'fs';
import { basename, extname, join } from 'path';

export async function getStaticProps() {
	const apiDir = join(process.cwd(), 'api');
	const apiFiles = await fs.promises.readdir(apiDir);
	const examples = apiFiles.map((f) => basename(f, extname(f)));
	return { props: { examples } };
}

export default function App({examples}) {
  return (
    <Router>
      <div>
        <ul>
					{examples.map((example) => (
						<li key={example}>
							<Link href={`/api/${example}`}>
								<a>{example}</a>
							</Link>
						</li>
					))}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>

          <li>
            <NextLink href="/console">Console (SSR)</NextLink>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/topics">
            <h1>Topics</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
