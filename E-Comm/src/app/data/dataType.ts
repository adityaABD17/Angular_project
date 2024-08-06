export interface Signup{
    name:string,
    password:string,
    email:string
}
export interface SignupResponse {
    // Define the structure of your response if known
    id?: string;
    Name?: string;
    Email?: string;
    // Any other fields returned by your API
  }