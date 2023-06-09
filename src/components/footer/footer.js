import classes from './footer.module.css'

//

export const Footer = () => {
  return (
    <footer className={ classes.footer }>
      &copy; RENCI { new Date().getFullYear() }
    </footer>
  )
}
