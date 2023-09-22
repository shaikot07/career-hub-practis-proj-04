import React from 'react';

const AppliedJobList = ({ job }) => {
      console.log(job);
      const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
      return (
            <div>

                  <div className='mb-6 flex gap-6  items-center bg-slate-100 p-4'>
                        <div className='bg-[#F4F4F4]  w-[150px] h-[130px] flex items-center justify-center'>
                              <img className='' src={logo} alt="" />
                        </div>
                        <div className='flex items-center justify-between w-full'>
                              <div>
                                    <h2>{job_title}</h2>
                                    <p>{company_name}</p>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                                    <div className='flex gap-4 items-center mt-3 mb-2'>
                                          <small className='text-sm font-bold'>{location}</small>
                                          <small className='text-sm font-bold'>{salary}</small>
                                    </div>
                              </div>
                              <div><button className='btn btn-primary'>View Details</button></div>
                        </div>
                  </div>
            </div>
      );
};

export default AppliedJobList;