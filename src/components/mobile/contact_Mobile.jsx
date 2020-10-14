import React from 'react';
import ReactDOM from 'react-dom';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        alert_message : ' '
      };

      this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
      e.preventDefault();
      var nameValue = document.getElementById('name').value;
      var surnameValue = document.getElementById('surname').value;
      var emailValue = document.getElementById('email').value;
      var messageValue = document.getElementById('message').value;

      var enable = true;
      console.log(window.screen.width);

      if(!nameValue || !surnameValue || !emailValue || !messageValue)enable = false;
      
      if(enable){
        emailjs.sendForm('gmail', 'template_bieej1m', e.target, 'user_IVfFtpH1r79UJwdNuSF33')
        .then((result) => {

                console.log(result.text);
        }, (error) => {

                console.log(error.text);
        });
        this.setState({alert_message : 'success'})
      }
      else{
        this.setState({alert_message : 'error'})
      }
  }
    
  render(){
    return (
        <div>
        <div className = 'bg-green-900 py-10'>
          <div className = 'container mx-auto h-full flex px-8 items-center py-20'>
              <div className = 'w-full px-5'>
                  <h1 className='text-shadow text-white font-rubikMonoOne text-3xl'>CONTACTO</h1>
                  <div className = 'mt-10'>
                     <form action="" onSubmit={this.sendEmail}>
                        <div className = ''>
                            <div className = ''>
                                <div>
                                    <label className = 'block uppercase tracking-wide text-white text-lg font-rubikMonoOne mb-2' htmlFor="">Nombre</label>
                                    <input id = 'name' name = 'from_name' className = 'appearance-none w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>
                            <div className = ''>
                                <div>
                                    <label className = 'block uppercase tracking-wide text-white text-lg font-rubikMonoOne mb-2' htmlFor="">Apellido</label>
                                    <input id = 'surname' name = 'from_surname' className = 'appearance-none w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>

                        </div>
                                                 
                        <div className = ''>
                            <label className = 'block uppercase tracking-wide text-white text-lg font-rubikMonoOne mb-2' htmlFor="">e-mail</label>
                            <input id = 'email' name = 'from_email' className = 'appearance-none w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>
                            <label className = 'block uppercase tracking-wide text-white text-lg font-rubikMonoOne mb-2' htmlFor="">Mensaje</label>
                            <textarea id = 'message' name = 'message' className = 'appearance-none h-48 w-full bg-gray-600 font-MontserratSemiBold text-white border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>  
                            <button class="bg-blue-900 hover:bg-blue-800 w-32 h-10 text-base text-white font-rubikMonoOne py-2 px-4 rounded-full">
                                Enviar
                            </button>  
                        </div>

                        <div className = 'mt-10'>
                            {this.state.alert_message == 'success' ? <h3 className = 'font-MontserratSemiBold text-base text-green-700'>Mensaje enviado correctamente</h3> : null}
							{this.state.alert_message == 'error' ? <h3 className = 'font-MontserratSemiBold text-base text-red-700'>¡Debes rellenar todos los campos antes de enviar el mensaje!</h3> : null}    

                        </div>
                     </form>
                  </div>
              </div>
          </div>
  
        </div>
         
      </div>
    );
  }
}

export default Contact;