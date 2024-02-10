import { Link } from 'react-router-dom'
import './NavButton.css'

export default function NavButton({ action, url, text }) {
  return (
    <>
      <button className='button-style' onClick={() => action(url)}>
        {text}
      </button>
    </>
    // <>
    //   <Link onClick={console.log('Hello')} className='link-style' to={to}>{txt}</Link>
    // </>
  )
}