import { BsFillGeoAltFill, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
      const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
      return (
            <div className="card card-compact  bg-base-100 shadow-xl p-4 border border-[#7E90FE] ">
                  <img className="w-52" src={logo} alt="logo" />
                  <div className="card-body">
                        <h2 className="card-title">{job_title}</h2>
                        <p className="text-1xl font-bold">{company_name}</p>
                        <div>
                              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
                        </div>
                        <div className="flex gap-4 mt-4 mb-4">
                              <h2 className="flex text-1xl font-bold"><BsFillGeoAltFill className="text-1xl mr-2 font-bold"></BsFillGeoAltFill>{location}</h2>
                              <h2 className="flex text-1xl font-bold"><BsCurrencyDollar className="text-1xl mr-2 font-bold"></BsCurrencyDollar>{salary}</h2>
                        </div>
                        <div className="card-actions  ">
                              <Link to={`/job/${id}`}>
                                    <button className="btn btn-primary">View Details</button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Job;