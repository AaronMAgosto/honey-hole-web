import { Github } from "react-bootstrap-icons"

export default function Footer() {

 const gitHubUrl = 'https://github.com/aaronmagosto'
 const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p className="text-center">
        <a href= {gitHubUrl}
        target="_blank"
        rel="noreferrer"
        className="button-effect">
        <Github size='40' color='red'/>
        </a>
        <div className="footer">
        <small>&copy; {currentYear} Aaron Agosto </small>
        </div>
        </p>
        </footer>



  )

}