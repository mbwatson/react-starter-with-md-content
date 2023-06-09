import PropTypes from 'prop-types'
import { Menu } from './menu'
import classes from './header.module.css'

//

export const Header = ({ title, menuItems }) => {
  return (
    <header className={ classes.header }>
      <div className={ classes.brand }>{ title }</div>
      <Menu options={ menuItems } />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: Menu.propTypes.options,
}
