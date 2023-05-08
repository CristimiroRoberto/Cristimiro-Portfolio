// Custom components
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="blur-page-1"></div>
       <section className="notFound">
        <div className="container flex-center">
          <div className="content">
            <h1>404</h1>
            <h5 className='my-3'>Sorry, but the page you are looking for was not found. </h5>
            <a href="/" className="btn btn-sm btn-outline-white ">
              Back to home
            </a>
          </div>
        </div>
      </section>
       <div className="blur-page-2"></div>
      <Footer />
    </>
  );
};
