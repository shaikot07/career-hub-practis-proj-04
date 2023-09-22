import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Uitili/Localstorage";

const JobDetails = () => {
      const jobs = useLoaderData();
      const { id } = useParams()
      const idInt = parseInt(id);
      const job = jobs.find(job => job.id === idInt);
      console.log(job);

      const handleApplyJob=()=>{
            saveJobApplication(idInt);
            toast('You have applied successfully')
      }

      const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, address } = job;
      return (
            <div>
                  <h2>this job details</h2>
                  <div className="grid md:grid-cols-4 gap-4">
                        <div className="border border-red-500 md:col-span-3">
                              <div className="mb-3">
                                    <p><span className="text-1xl font-bold">Job Description: </span><small className="text-[#757575] text-">{job_description}</small></p>
                              </div>
                              <div className="mb-3">
                                    <p><span className="text-1xl font-bold">Job Responsibility:</span><small>{job_responsibility}</small></p>
                              </div>
                              <div className="mb-3">
                                    <p><span className="text-1xl font-bold">Educational Requirements:</span><br /><small>{educational_requirements}</small></p>
                              </div>
                              <div className="">
                                    <p><span className="text-1xl font-bold">Experiences:</span><br /><small>{experiences}</small></p>
                              </div>
                        </div>
                        <div className="border  border-indigo-500">
                              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
                                    <h2 className="text-2xl font-bold mb-6">Job Details</h2>
                                    <hr />
                                    <h2><span>Salary :</span></h2>
                                    <h2><span>Job Title :</span></h2>
                                    <h2 className="text-2xl font-bold mb-5">Contact Information</h2>
                                    <hr />
                                    <h2><span>Phone :</span></h2>
                                    <h2><span>Email :</span></h2>
                                    <h2><span>Address :</span></h2>
                              </div>
                              <div className="mt-4">
                                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                              </div>
                        </div>

                  </div>
                  <ToastContainer />
            </div>
      );
};

export default JobDetails;