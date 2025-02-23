import './Footer.css'
import { menu } from '../../data'
import { Link } from 'react-scroll'
import SocialHandles from '../../ui/SocialHandles'

const Footer = () => {
  return (
    <footer>
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLocaleLowerCase()}
              smooth={true}
              duration={500}
              className="nav__item"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All rights reserved | 2025</h3>
          <p className="text__muted">Made with ❤️ by Ilham</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">Ilham Arifin</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer