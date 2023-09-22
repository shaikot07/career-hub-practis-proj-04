import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
      const [jobs, setJobs] = useState([]);
      const [dataLenght, setDataLength] = useState(4);

      useEffect(() => {
            fetch('jobs.json')
                  .then(res => res.json())
                  .then(data => setJobs(data))
      }, [])

      return (
            <div className='mt-10'>
                  <div className='text-center'>
                        <h2 className='text-4xl text-center font-semibold '>Featured Jobs:{jobs.length}</h2>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                  </div>
                  <div className='grid grid-cols-2 gap-6 mb-10'>
                        {
                              jobs.slice(0, dataLenght).map(job => <Job key={job.id} job={job}></Job>)
                        }
                  </div>
                  <div className='text-center'>
                  <div className={dataLenght === jobs.length ? 'hidden' : ''} >
                        <button onClick={() => setDataLength(jobs.length)} className='btn btn-primary'>Show all data</button>
                  </div>
                  </div>
            </div>
      );
};

export default FeaturedJobs;