/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';
import logoWhite from 'assets/images/logo-white.png';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <h1 style={{color: "#000", fontWeight: "bold", fontFamily: "monospace", margin: 0}}>Francisco Inoque</h1>
    </Link>
  );
}
