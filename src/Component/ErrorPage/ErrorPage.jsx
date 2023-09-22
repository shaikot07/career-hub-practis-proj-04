
import { Link } from 'react-router-dom';

const ErrorPage = () => {
      return (
            <div className='mt-24 text-center' >
                  <h2 className='text-5xl text-red-500'>OooopS !!!</h2>
                  <Link to="/"> <button className='bg-sky-500 px-6 py-2 mt-10 rounded text-white font-bold'>Go back to Home</button></Link>
            </div>
      );
};

export default ErrorPage;