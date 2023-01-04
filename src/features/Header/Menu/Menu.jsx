//React and Core Components
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
//Inbuilt Components

//Styles Components
import './Menu.style.sass';
import { BsPersonCircle } from 'react-icons/bs';

//Third party components

//Contexts & Services

export default function Menu({ isCollapsed, setCollapsed, toggleHeaderMenu }) {
  const [active, setActive] = useState('');
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  let windowWidth = window.innerWidth;

  //refs
  const blogRef = useRef(null);
  const filesRef = useRef(null);
  const portfolioRef = useRef(null);
  const trainingRef = useRef(null);
  const ideiaRef = useRef(null);
  const admRef = useRef(null);
  const profileRef = useRef(null);



  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, [location.pathname]);

  const handleResize = () => {
    windowWidth = window.innerWidth;
    const root = document.documentElement;
    if (windowWidth >= 768) {
      setCollapsed(false);
    }
    switch (location.pathname) {
      case '/':
        root?.style.setProperty('--color-active', '#eb5c29');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?55:newTop}px`))(
                blogRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                blogRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.4rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            blogRef.current?.clientWidth
          )
        );
        setActive('blog');
        break;
      case '/arquivos':
        root?.style.setProperty('--color-active', '#1072B9');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?95:newTop}px`))(
                filesRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                filesRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.5rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            filesRef.current?.clientWidth
          )
        );
        setActive('files');
        break;
      case '/portfolio':
        root?.style.setProperty('--color-active', '#04933E');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?135:newTop}px`))(
                portfolioRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                portfolioRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.5rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            portfolioRef.current?.clientWidth
          )
        );
        setActive('portfolio');
        break;
      case '/formacao':
        root?.style.setProperty('--color-active', '#E72C7C');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?175:newTop}px`))(
                trainingRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                trainingRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.5rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            trainingRef.current?.clientWidth
          )
        );
        setActive('training');
        break;
      case '/ideia':
        root?.style.setProperty('--color-active', '#ffc107');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?215:newTop}px`))(
                ideiaRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                ideiaRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.5rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            ideiaRef.current?.clientWidth
          )
        );
        setActive('ideia');
        break;
      case '/adm':
        root?.style.setProperty('--color-active', '#000');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${newTop==0?255:newTop}px`))(
                admRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                admRef.current?.offsetLeft
              )
            ) &
            root?.style.setProperty('--top-selector', '0.5rem');
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            admRef.current?.clientWidth
          )
        );
        setActive('adm');
        break;
      case '/perfil':
        root?.style.setProperty('--color-active', '#bbb');
        windowWidth < 768
          ? root?.style.setProperty('--right-selector', '0') &
            root?.style.setProperty('--left-selector', 'unset') &
            setTop((top) =>
              ((newTop) =>
                root?.style.setProperty('--top-selector', `${295}px`))(
                profileRef.current?.offsetTop
              )
            )
          : root?.style.setProperty('--right-selector', 'unset') &
            setLeft((left) =>
              ((newLeft) =>
                root?.style.setProperty('--left-selector', `${newLeft}px`))(
                profileRef.current?.offsetLeft
              )
            );
        setWidth((width) =>
          ((newWidth) =>
            root?.style.setProperty('--width-selector', `${newWidth}px`))(
            profileRef.current?.clientWidth
          )
        );
        setActive('profile');
        break;
      default:
        setActive('');
    }
  };
  const toggleMenu = () => {
    toggleHeaderMenu();
    handleResize();
  }
  


  return (
    <div className='nav-container'>
      <div className="nav__toggle" onClick={toggleMenu}>
        <div className="nav__toggle__line"></div>
        <div className="nav__toggle__line"></div>
        <div className="nav__toggle__line"></div>
      </div>
      <nav className={'nav ' + (windowWidth < 768 ? isCollapsed ? '' : 'collapsed' : '')}>
        <div className={'selector'}></div>
        <ul className={'nav__list'}>
          <li
            className={'nav__item blog ' + (active == 'blog' ? 'active' : '')}
            ref={blogRef}
          >
            <Link to="/" className="nav__link">
              BLOG
            </Link>
          </li>
          <li
            className={'nav__item files ' + (active == 'files' ? 'active' : '')}
            ref={filesRef}
          >
            <Link to="/arquivos" className="nav__link">
              ARQUIVOS
            </Link>
          </li>
          <li
            className={
              'nav__item portfolio ' + (active == 'portfolio' ? 'active' : '')
            }
            ref={portfolioRef}
          >
            <Link to="/portfolio" className="nav__link">
              PORTFOLIO
            </Link>
          </li>
          <li
            className={
              'nav__item training ' + (active == 'training' ? 'active' : '')
            }
            ref={trainingRef}
          >
            <Link to="/formacao" className="nav__link">
              FORMAÇÃO
            </Link>
          </li>
          <li
            className={'nav__item ideia ' + (active == 'ideia' ? 'active' : '')}
            ref={ideiaRef}
          >
            <Link to="/ideia" className="nav__link">
              IDEIA
            </Link>
          </li>
          <li
            className={'nav__item adm ' + (active == 'adm' ? 'active' : '')}
            ref={admRef}
          >
            <Link to="/adm" className="nav__link">
              ADM
            </Link>
          </li>
          <li
            className={
              'nav__item profile ' + (active == 'profile' ? 'active' : '')
            }
            ref={profileRef}
          >
            <Link to="perfil" className="nav__link">
              <BsPersonCircle />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
