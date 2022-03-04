import './styles.css';
import logo from '../../assets/harry.png';

export default function Footer() {
  return (
    <footer className='footer_container_home'>
      <img src={logo} alt="Logo" className='logo_footer_home' />
      <ul className='list_item_home'>
        <li className='item_home'>Voltar</li>
      </ul>
      
    </footer>
  )
}