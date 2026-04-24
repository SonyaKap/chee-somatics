import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Jane Doe, LCSW</p>
        <p className="footer-detail">123 Wellness Lane &nbsp;|&nbsp; Chicago, IL 60601</p>
        <p className="footer-detail">
          <a href="mailto:janedoe@email.com">janedoe@email.com</a>
        </p>
      </div>
    </footer>
  )
}
