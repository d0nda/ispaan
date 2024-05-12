declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE_URL: string;
        NEXTAUTH_SECRET: string;
        NEXTAUTH_URL: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        API_URL: string;
        RAPID_API_KEY: string;
        ALGOLIA_APP_ID: string;
        ALGOLIA_SEARCH_API_KEY: string;
        ALGOLIA_INDEX_NAME: string;
      }
    }
  }
  
  export {};
  