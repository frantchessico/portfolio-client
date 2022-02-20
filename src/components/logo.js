/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.svg';
// import logoWhite from 'assets/images/white.png';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      {white ? <h2 style={{color: '#fff'}}>Francisco Inoque</h2> : <h2>Francisco Inoque</h2>} 
    </Link>
  );
}
