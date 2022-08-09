import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../../../styles/components/contactinformation.sass';

export default function ContactInformation() {
  return (
    <section id="information">
      <div className='info-card'>
        <AiFillPhone id='phone-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>(85) 99972-7976</p>
        </div>
      </div>

      <div className='info-card'>
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>Email</h3>
          <p id='email-string'>luizferreirafariasn@gmail.com</p>
        </div>
      </div>

      <div className='info-card'>
        <AiFillEnvironment id='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Fortaleza/CE</p>
        </div>
      </div>

    </section>
  );
}