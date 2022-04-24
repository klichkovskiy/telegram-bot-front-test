import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to='/#'>Главная</NavLink>
        <NavLink to='/sushi'>Суши</NavLink>
        <NavLink to='/pizza'>Пицца</NavLink>
      </nav>
    </header>
  )
}

export default Header;