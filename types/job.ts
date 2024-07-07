export enum Employment {
    FULL_TIME = 'FULL_TIME',
    PART_TIME = 'PART_TIME',
    CONTRACT = 'CONTRACT',
    FREELANCE = 'FREELANCE',
    INTERNSHIP = 'INTERNSHIP',
    VOLUNTEER = 'VOLUNTEER'
};

export enum JobCategory {
    Academic = 'Academic',
    Accounting = 'Accounting',
    Administration = 'Administration',
    Advertising = 'Advertising',
    Agriculture = 'Agriculture',
    Automotive = 'Automotive',
    Aviation = 'Aviation',
    Banking = 'Banking',
    Business_Management = 'Business_Management',
    Call_Centre = 'Call_Centre',
    Chemical = 'Chemical',
    Clothing = 'Clothing',
    Construction = 'Construction',
    Consulting = 'Consulting',
    Cruise_Ship = 'Cruise_Ship',
    Defence = 'Defence',
    Design_Services = 'Design_Services',
    Ecommerce = 'Ecommerce',
    Education = 'Education',
    Engineering = 'Engineering',
    Entertainment = 'Entertainment',
    Environmental = 'Environmental',
    FMCG = 'FMCG',
    Fashion = 'Fashion',
    Finance = 'Finance',
    General_Employment = 'General_Employment',
    Government = 'Government',
    Graduate = 'Graduate',
    Health_and_Safety = 'Health_and_Safety',
    Hospitality = 'Hospitality',
    Human_Resources = 'Human_Resources',
    IT_and_Computer = 'IT_and_Computer',
    Import_and_Export = 'Import_and_Export',
    Insurance = 'Insurance',
    Investment = 'Investment',
    Legal = 'Legal',
    Lifestyle = 'Lifestyle',
    Logistics = 'Logistics',
    Management = 'Management',
    Manufacturing = 'Manufacturing',
    Market_Research = 'Market_Research',
    Marketing = 'Marketing',
    Media = 'Media',
    Medical = 'Medical',
    Mining = 'Mining',
    Motoring = 'Motoring',
    NGOs = 'NGOs',
    PR_and_Communication = 'PR_and_Communication',
    Petrochemical = 'Petrochemical',
    Pharmaceutical = 'Pharmaceutical',
    Property = 'Property',
    Purchasing = 'Purchasing',
    Real_Estate = 'Real_Estate',
    Recruitment = 'Recruitment',
    Research = 'Research',
    Retail = 'Retail',
    Sales = 'Sales',
    Social_Services = 'Social_Services',
    Soft_Skills = 'Soft_Skills',
    Sports = 'Sports',
    Stockbroking = 'Stockbroking',
    Technical = 'Technical',
    Technology = 'Technology',
    Telecommunications = 'Telecommunications',
    Trades_and_Services = 'Trades_and_Services',
    Travel_and_Tourism = 'Travel_and_Tourism',
    Warehousing = 'Warehousing',
};


export type User = {
    id: string,
    name: string,
    email: string,
    hashedPassword: string,
    image: string,

};

export interface FeaturedJob {
    id: string;
    category: string;
    name: string;
    company_name: string;
    images: string[];
    link: string;
};

// types/job.ts

export interface Job {
    employer_name: string;
    employer_logo: string | null;
    employer_website: string | null;
    employer_company_type: string;
    job_publisher: string;
    job_id: string;
    job_employment_type: string;
    job_title: string;
    job_apply_link: string;
    job_apply_is_direct: boolean;
    job_apply_quality_score: number;
    job_description: string;
    job_is_remote: boolean;
    job_posted_at_timestamp: number;
    job_posted_at_datetime_utc: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_latitude: number;
    job_longitude: number;
    job_benefits: string | null;
    job_google_link: string;
    job_offer_expiration_datetime_utc: string | null;
    job_offer_expiration_timestamp: number | null;
    job_required_experience: {
      no_experience_required: boolean;
      required_experience_in_months: number;
      experience_mentioned: boolean;
      experience_preferred: boolean;
    };
    job_required_skills: string[] | null;
    job_required_education: {
      postgraduate_degree: boolean;
      professional_certification: boolean;
      high_school: boolean;
      associates_degree: boolean;
      bachelors_degree: boolean;
      degree_mentioned: boolean;
      degree_preferred: boolean;
      professional_certification_mentioned: boolean;
    };
    job_experience_in_place_of_education: boolean;
    job_min_salary: number | null;
    job_max_salary: number | null;
    job_salary_currency: string | null;
    job_salary_period: string | null;
    job_highlights: {
      Qualifications: string[] | null;
    };
    job_posting_language: string;
    job_onet_soc: string;
    job_onet_job_zone: string;
    job_naics_code: string;
    job_naics_name: string;
  }
  
  export interface SearchJobsResponse {
    data: Job[];
  }
  
  export interface SearchFiltersResponse {
    data: {
      categories: { name: string; value: string; est_count: number }[];
      job_titles: { name: string; value: string; est_count: number }[];
      company_types: { name: string; value: string; est_count: number }[];
      employers: { name: string; value: string; est_count: number }[];
      date_posted: { name: string; value: string; est_count: number }[];
      employment_types: { name: string; value: string; est_count: number }[];
      job_requirements: { name: string; value: string; est_count: number }[];
    };
  }
  
  export interface JobRequiredExperience {
    required_experience_in_months: number;
    experience_mentioned: boolean;
    experience_preferred: boolean;
  }
  
  export interface JobRequiredEducation {
    degree: string;
    education_mentioned: boolean;
    qualifications: string[];
  }
  
  export interface JobHighlights {
    qualifications: string[];
    responsibilities: string[];
  }
  
  export interface EmployerReview {
    rating: number;
    review: string;
  }

export interface JobDetails {
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: any;
  job_google_link: string;
  job_offer_expiration_datetime_utc: any;
  job_offer_expiration_timestamp: any;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[];
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: boolean;
  job_min_salary: any;
  job_max_salary: any;
  job_salary_currency: any;
  job_salary_period: any;
  job_highlights: JobHighlights;
  job_job_title: any;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_occupational_categories: string[];
  job_naics_code: string;
  job_naics_name: string;
  estimated_salaries: any[];
  apply_options: any[];
  employer_reviews: EmployerReview[];
}

export type JobDetailsResponse = JobDetails;
  
export interface EstimatedSalaryResponse {
    data: {
      location: string;
      job_title: string;
      publisher_name: string;
      publisher_link: string;
      min_salary: number;
      max_salary: number;
      median_salary: number;
      salary_period: string;
      salary_currency: string;
    }[];
}

  export interface JobRequiredExperience {
    no_experience_required: boolean;
    required_experience_in_months: number;
    experience_mentioned: boolean;
    experience_preferred: boolean;
  }
  
  export interface JobRequiredEducation {
    postgraduate_degree: boolean;
    professional_certification: boolean;
    high_school: boolean;
    associates_degree: boolean;
    bachelors_degree: boolean;
    degree_mentioned: boolean;
    degree_preferred: boolean;
    professional_certification_mentioned: boolean;
  }
  
  export interface JobHighlights {
    Qualifications: string[];
  }
  
  export interface EmployerReview {
    publisher: string;
    employer_name: string;
    score: number;
    num_stars: number;
    review_count: number;
    max_score: number;
    reviews_link: string;
  }
  




