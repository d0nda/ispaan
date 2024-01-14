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

export type Job = {
    id: string;
    userId: string;
    company_name: string;
    job_title: string;
    description: string;
    salary?: string;
    location?: string;
    logo?: string;
    employment: Employment;
    category: JobCategory;
    start_date: Date;
    end_date?: Date;
    created_at: Date;
    is_hired?: boolean;
    is_featured?: boolean;
    price?: number;
    created_by: User;
};

export type User = {
    id: string,
    name: string,
    email: string,
    hashedPassword: string,
    image: string,

};

