// Hooks
import { useState } from 'react';

// Custom components
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

// Third-party library
import { ReactSVG } from 'react-svg'; 
import { useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import  emailjs  from "@emailjs/browser";
// Images and icons
import IconLocation from '../../assets/svg/icon-location.svg';
import IconCall from '../../assets/svg/icon-call.svg';
import IconEmail from '../../assets/svg/icon-email.svg';
import IconLinkedin from '../../assets/svg/icon-linkedin.svg';
import IconBehance from '../../assets/svg/icon-behance.svg';
import IconDribble from '../../assets/svg/icon-dribbble.svg';
import IconInstagram from '../../assets/svg/icon-instagram.svg';


const createMessageSchema = z.object({
  name: z.string()
  .nonempty('Please enter your name.')
   .transform(name => {
      return name.trim().split('').map(word =>{
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join('')
    }),
  email: z.string()
    .nonempty('Email cannot be empty.')
    .email('Please enter a valid email address.')
    .toLowerCase()
   ,
  subject: z.string().nonempty('Please enter the subject of your message.'),
  message: z.string().nonempty('Please enter your message.'),
});

type CreateMessageFormData = z.infer<typeof createMessageSchema>

export const Contact = () => {

  const [output, setOutput] = useState('');
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { register, handleSubmit ,formState: {errors}, reset} = useForm<CreateMessageFormData>({
    resolver: zodResolver(createMessageSchema),
  });
  function createMessage(data: CreateMessageFormData) {
    emailjs.send('service_848llvu','template_5byehxi' ,data ,"TCLktfm9ZduBs_7pu")
      .then(() => {
        setOutput(`Email sent successfully!`);
        setShowSuccessMessage(true);
        reset(); // Reset the form after submission
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }, () => {
        setOutput(`An error occurred while sending the email`);
      });
  }

  return (
    <>
      <Header />
      <div className="blur-page-1"></div>
      <main>
        <section className="contact  mt-6">
          <div className="container ">
       
            <div className="row">
              <div className="grid-6">
                     <div className="title-section">
              <h4 data-aos="fade-up" data-aos-delay="1000">Contact</h4>
            </div>
                <div className="info-contact">
                  <div className="flex mb-3" data-aos="fade-up"
                  data-aos-delay="1100">
                    <div className="icon-box flex-center mr-2">
                      <ReactSVG src={IconLocation} data-alt="Icon Location" />
                    </div>
                    <p className="p1">Maputo ,Mozambique</p>
                  </div>
                  <div className="flex mb-3"  data-aos="fade-up"
                  data-aos-delay="1200">
                    <div className="icon-box flex-center mr-2">
                      <ReactSVG src={IconCall} data-alt="Icon Phone" />
                    </div>
                    <p className="p1">(+ 258) 853146777</p>
                  </div>
                  <div className="flex"  data-aos="fade-up"
                  data-aos-delay="1300">
                    <div className="icon-box flex-center mr-2">
                      <ReactSVG src={IconEmail} data-alt="Icon Envelop" />
                    </div>
                    <p className="p1">Cristimirorobert@gmail.com</p>
                  </div>
                </div>
                 <nav className="social-media-links mt-10">
              <ul className="social-media-list flex">
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1400"
                >
                  <a href="https://www.linkedin.com/in/cristimiroroberto/" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <ReactSVG src={IconLinkedin} data-alt="LinkedIn Icon" />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1500"
                >
                  <a href="https://www.behance.net/cristimirositoe" aria-label="Behance">
                    <span className="sr-only">Behance</span>
                    <ReactSVG src={IconBehance} data-alt="Behance Icon" />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1600"
                >
                  <a href="https://dribbble.com/cristimiro" aria-label="Dribbble">
                    <span className="sr-only">Dribbble</span>
                    <ReactSVG src={IconDribble} data-alt="Dribbble Icon" />
                  </a>
                </li>
                <li
                  className="social-media-item"
                  data-aos="fade-up"
                  data-aos-delay="1700"
                >
                  <a href="ttps://www.instagram.com/cristimiroroberto/" aria-label="Instagram Icon">
                    <span className="sr-only">Instagram</span>
                    <ReactSVG
                      src={IconInstagram}
                      data-alt="Ícone do Instagram"
                    />
                  </a>
                </li>
              </ul>
            </nav>
              </div>
              <div className="grid-6"   data-aos="fade-up"
                  data-aos-delay="1000">
                <form  onSubmit={handleSubmit(createMessage)}>
                  <fieldset>
                    <legend className="sr-only">Contact Form</legend>
                    <div className="form-control">
                      <input type="text"  {...register('name')}/>
                      <label htmlFor="name">
                        <span>Please enter your </span>name
                      </label>
                      {errors.name && <span className='error-input'>{errors.name.message}</span>}
                    </div>
                    <div className="form-control">
                      <input type="email"  {...register('email')}/>
                      <label htmlFor="email">
                        <span>Please enter your </span>email
                      </label>
                      {errors.email && <span className='error-input'>{errors.email.message}</span>}
                    </div>
                    <div className="form-control">
                      <input type="text"  {...register('subject')}/>
                      <label htmlFor="subject">
                        <span>Please enter your </span>subject
                      </label>
                      {errors.subject&& <span className='error-input'>{errors.subject.message}</span>}
                    </div>
                    <div className="form-control">
                      <textarea {...register('message')}/>
                      <label htmlFor="message">
                        <span>Please enter your </span>Message
                      </label>
                      {errors.message && <span className='error-input'>{errors.message.message}</span>}
                    </div>
                  </fieldset>
                   {showSuccessMessage && <h5 className='success'>{output}</h5>}

                  <button type='submit' className="btn btn-md btn-primary mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="blur-page-2"></div>
      <Footer />
    </>
  );
};
