import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Uitili/Localstorage';
import AppliedJobList from './AppliedJobList';


const AppliedJobs = () => {
      const jobs = useLoaderData();

      const [appliedJobs, setAppliedJobs]=useState([])

      useEffect(()=>{
            const storedJobIds = getStoredJobApplication();
            if(jobs.length >0){
                  // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
                  const jobsApplied =[];
                  for(const id of storedJobIds){
                        const job = jobs.find(job => job.id === id);
                        if(job){
                              jobsApplied.push(job)
                        }
                  }
                  setAppliedJobs(jobsApplied);
            }
      },[])
      return (
            <div>
                  
                  {
                        appliedJobs.map(job =><AppliedJobList key={job.id} job={job}></AppliedJobList>)
                  }
            </div>
      );
};

export default AppliedJobs;