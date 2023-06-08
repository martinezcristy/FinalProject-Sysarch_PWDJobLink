import React from 'react';
import './JobListPage.css';
import { useNavigate } from 'react-router-dom';

function JobListingPage() {
  const navigate = useNavigate();
  
  const handleApplyNow = () => {
    // Perform the redirection to the desired page
    navigate('/apply');
  };

  const jobs = [
    {
      id: 1,
      company: 'Concentrix',
      title: 'Customer Support Associate',
      location: 'Cebu City',
      description: 'Interact with customers through calls and the Internet, catering to client requirements. They provide support and resolution for routine problems with the clients products or services.',
      requirements: ['High School diploma with 3 to 6 months of relevant experience preferred', 'Strong computer navigation skills and PC Knowledge', 'Able to rotate shifts'],
    },
    {
        id: 2,
        company: 'Optum',
        title: 'USRN Healthcare Specialist',
        location: 'Cebu City',
        description: 'Your role is critical in allowing our members, families, facilities and health professionals to have greater confidence in the exceptional care we provide.',
        requirements: ['Valid and unrestricted USRN license and PHRN License required', 'Preferably with a minimum of 2 years hospital experience or 3-4 years BPO USRN experience'],
    },
    {
        id: 3,
        company: 'InspireX',
        title: 'Finance Associate',
        location: 'Cebu City',
        description: 'Ensure accurate and timely preparation and monitoring of reports and assist finance team with preparation of compliance documentation.',
        requirements: ['Background in Business Administration', 'Proficient on Google sheets or MS Excel','At least 1 year experience','Able to rotate shifts'],
    },
    
  ];

  return (
    <div className='bgImage'>
    <div className="job-listing">
        <p></p>
        <p></p>
        <p></p>
      <h2>LIST OF JOB VACANCIES</h2>
      <p></p>
      <p></p>
      <p></p>
      <div className="job-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>{job.description}</p>
              <ul>
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              <div className="button-container">
                <button className="custom-button apply-button" onClick={handleApplyNow}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobListingPage;
