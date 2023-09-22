
const getStoredJobApplication =()=>{
      const storedjobApplication = localStorage.getItem('job-application');
      if(storedjobApplication){
            return JSON.parse(storedjobApplication)
      }
      return [];
}


const saveJobApplication = id =>{
      const storedjobApplications=getStoredJobApplication();
      const exists =storedjobApplications.find(jobId => jobId === id);
      if(!exists){
            storedjobApplications.push(id);
            localStorage.setItem('job-application',JSON.stringify(storedjobApplications))
      }

}


export {getStoredJobApplication, saveJobApplication}