import classes from './MainNavigation.module.css';
import Link from 'next/Link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Golden Apple</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Articles</Link>
          </li>
          <li>
            <Link href='/new-article'>Add New Article</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;