import '../components/style.css';
import Logo from '../assets/images/lead.png'
import axios from 'axios';
import { sha512 } from 'js-sha512';
export const Navigation = (props) => {

  const runApi = () => {
    var hashdata = sha512('DTOAGA|Lv14zk11rTBmqT|10.00|iPhone|PayU User|test@gmail.com|||||||||||gfSJyPzFkBAr0ATzFgLa7nwb9kQoZjK7')
    const formData = new FormData();
    formData.append('key', 'DTOAGA');
    formData.append('txnid', 'Lv14zk11rTBmqT');
    formData.append('amount', '10.00');
    formData.append('firstname', 'PayU User');
    formData.append('email', 'test@gmail.com');
    formData.append('phone', '9876543210');
    formData.append('productinfo', 'iPhone');
    formData.append('surl', 'https://apiplayground-response.herokuapp.com/');
    formData.append('furl', 'https://apiplayground-response.herokuapp.com/');
    formData.append('hash', '46fac96f57c6cd5429e1910f7046625dfd96671a284a6850e7b1e1d381279208efec4bdaaa13a2967869c286301a84c9ff3e107d39fd506191fb77611d8df935')
    // formData.append('hash', 'd3dbb13032154ebccf2e0ec76135b5206a4b6699e537e2408c9bff0e595d46ff1900325d49bbb07b1c07b6f7b3cb9b843e766ca8d73212560a1b32075e777594');
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    axios.post(`https://test.payu.in/_payment`, formData,  { headers: headers })
    .then((response) => {
      console.log(response,'response')
    })

  }

  return (
    <>
      <nav id='menu' className='navbar navbar-default navbar-fixed-top header-div'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand navbar-language page-scroll' href='#page-top'>
              తెలుగు
            </a>{' '}
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href= "mailto:happytohelp@ed4all.in" className='page-scroll'>
                <i className="fa fa-envelope icon"></i>
                  happytohelp@ed4all.in
                </a>
              </li>
              <li>
                <a href="tel:180000000000" className='page-scroll'>
                <i className="fa fa-phone icon"></i>
                  1800 0000 0000
                </a>
              </li>
              <li>
                <a style={{ textTransform: "uppercase" }} className='page-scroll'>
                  Accessibility
                  <i className="fa fa-caret-down dropdown-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='logo-div'>
        <div className='container'>
          <div className='navbar-header'>
            <img src={Logo}></img>
          </div>
          <div className='navbar-right'>
              <div className='signin'>
                <a className='signin-a'>Sign In</a>
                <button className='register-button' onClick={()=> runApi()}>Register</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
