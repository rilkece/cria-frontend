//React and Core Components
import { useState } from 'react';
import { Link } from 'react-router-dom';

//Inbuilt Components
import Menu from './Menu';

//Styles Components
import './Header.style.sass';
import CriaTree from '../../assets/imgs/identity/cria_tree.svg';
import CriaName from '../../assets/imgs/identity/cria_name.svg';

//Third party components

//Contexts & Services

export default function Header() {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleHeaderMenu = () => {
    setCollapsed((isCollapsed) => !isCollapsed);
    
  };
  return (
    <header className='header'>
        <div className="header__content">
            <Link to="/" className={'header__logo ' + (isCollapsed ? 'hidden' : '')}>
                <img className='tree' src={CriaTree} alt="logo" />
                <img className='name' src={CriaName} alt="logo" />
            </Link>
            <Menu isCollapsed={isCollapsed} toggleHeaderMenu={toggleHeaderMenu} setCollapsed={setCollapsed}/>
            </div>
    </header>
  );
}
