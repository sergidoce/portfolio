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
        <div className = 'bg-color-secundario py-20'>
          <div className = 'container mx-auto h-full flex justify-center font-Catamaran'>
              <div className = ''>
                  <h1 className='text-color-primario text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl '>¿Quieres contactar conmigo?</h1>
                  <div className = 'mt-10 text-color-primario'>
                     <form action="" onSubmit={this.sendEmail}>
                        <div className = 'flex'>
                            <div className = ' flex'>
                                <div>
                                    <label className = 'block tracking-wide text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mb-2' htmlFor="">Nombre</label>
                                    <input id = 'name' name = 'from_name' className = 'appearance-none w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>
                            <div className = 'flex ml-5'>
                                <div>
                                    <label className = 'block tracking-wide text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mb-2' htmlFor="">Apellido</label>
                                    <input id = 'surname' name = 'from_surname' className = 'appearance-none w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>
                                </div>
                            </div>

                        </div>
                                                 
                        <div className = 'mt-10'>
                            <label className = 'block tracking-wide text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mb-2' htmlFor="">E-mail</label>
                            <input id = 'email' name = 'from_email' className = 'appearance-none w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>
                            <label className = 'block tracking-wide text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mb-2' htmlFor="">Mensaje</label>
                            <textarea id = 'message' name = 'message' className = 'appearance-none h-64 w-full bg-color-secundario border rounded py-3 px-4 mb-3 ' type="text"/>     
                        </div>

                        <div className = 'mt-10'>  
                            <button class="bg-color-secundario hover:bg-color-primario text-color-primario hover:text-color-secundario w-64 h-16 text-xl border-2 border-color-primario  py-2 px-4 rounded-full">
                                Enviar
                            </button>  
                        </div>

                        <div className = 'mt-10'>
                            {this.state.alert_message == 'success' ? <h3 className = 'text-xl text-green-700'>Mensaje enviado correctamente</h3> : null}
							{this.state.alert_message == 'error' ? <h3 className = 'text-xl text-red-700'>¡Debes rellenar todos los campos antes de enviar el mensaje!</h3> : null}    

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