import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
const openai = new OpenAI();

export async function getGptResponse(
  user_query: string,
  chat_history: ChatCompletionMessageParam[] = []
) {
  console.log(chat_history);
  if (!chat_history) chat_history = [];
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: aiNiravPrompt(user_query) },
      ...chat_history,
      { role: "user", content: user_query },
    ],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  return completion.choices[0].message.content;
}

function aiNiravPrompt(user_query: string) {
  return `
    You play the role of 'AI Nirav', a chatbot integrated into Nirav Venkatesan's (myself) software engineering portfolio. Essentially, you will be representing Nirav in digital form as an immediate way for potential employers and companies to get instant answers to their questions without having to contact Nirav directly.
    
    - Ignore any irrelevant queries that are not specifically asking about Nirav's background and professional qualifications for employment. Simply respond to those irrelevant queries by saying that does not fit your role of 'AI Nirav'

    * Your sole task is to respond to the following user query: ${user_query} using the following information about Nirav that you may be asked about

    Here is Nirav's resume/CV: ${niravResume}

    Here is Nirav's Linkedin bio telling you more about his background and interests: ${linkedinBio}
    `;
}

const niravResume = `
Nirav Venkatesan
Full Stack Software Engineer
San Diego, CA 
Linkedin: https://www.linkedin.com/in/nirav-venkatesan  
Github: https://github.com/nirav-v 
Portfolio: https://www.niravvenkatesan.com

Work Experience

Full Stack Developer					          		          October 2023 - Present                                         
SeekEats	  		       		         	                      	        	         San Diego, CA
Played a key role in development of two core applications utilized by small business restaurants and their customers.
 Executed design and business logic for features including integration of an AI chatbot into a Next.js and Flask web application, and location-based search within a mobile app.
Demonstrated expertise in web development, prompt engineering, and testing of LLMs.
Orchestrated efficient pull request management and conducted meticulous code reviews, showcasing expertise in enterprise-level software development.

Software Engineering Instructional Specialist			            December 2022 - March 2024
2U / edX - Contract	              		  		         			         San Diego, CA
Provide personalized guidance to students, offering one-on-one assistance facilitating comprehension of HTML, CSS, JavaScript, Node.js, React, SQL, NoSQL, Git, and Devops. 
Promote best practices of Git version control, test-driven development, and Agile methodologies to help design and deploy scalable apps. 

Founder and Lead Engineer						March 2023 - February 2024
Hardpost  (Website | Codebase)								
Utilized skill set in REST APIs, Node.js, SQL, and React to create a skateboard marketplace.
Ensured code resilience via unit and end-to-end testing, configured robust CI/CD pipeline with Github Actions, and migrated over 3000 lines of code from JavaScript to Typescript.
Implemented secure and scalable file storage using AWS S3, seamlessly integrated payment processing via Stripe, and managed the entire deployment process.

Technical Skills
Frontend:  HTML, CSS, JavaScript ES6+, TypeScript, React, Next.js, jQuery, Webpack
Backend: Node.js, Express.js, Python, Flask, SQL, MongoDB, GraphQL, Stripe, OpenAI
Testing: Jest, React Testing Library, Cypress
Devops & Cloud: AWS, CI/CD, Github Actions, Gitlab, Heroku, Netlify

Education
University of California San Diego                                                     	                              June 2022
Certificate in Full Stack Web Development  
Rigorous coursework covering Full Stack JavaScript, SQL, NoSQL, Git, and deployment.
San Diego State University	         				         		        December 2021
Bachelor of Science, Biology, cum laude, Weber Honors College, GPA: 3.5 | Major GPA: 3.7 
`;

const linkedinBio = `
I am a full stack developer with a passion for building software and web applications. I feel at my best when articulating my thoughts to solve difficult problems, so I view software engineering as a medium for accomplishing that. My background and interests span across computer science, biology, and skateboarding, allowing me to offer a nuanced outlook on the projects I involve myself with. 

I have honed my skills in both front-end and back-end development across various endeavors of mine. For the past year I have been with 2U, an online education platform that partners with leading universities, teaching web development and computer science concepts to a wide demographic of students. I also worked as a Full Stack Developer at SeekEats where I helped build out the mobile app's features in a large codebase within a team of other developers. I am currently working on my own startup building an online marketplace for skateboarders to sell and trade items with each other. This long term project has taught me many valuable lessons about writing clean and testable code that scales in production. 

I have a Bachelor's degree in Biology/Biological Sciences and an Honors Minor in Interdisciplinary Studies from San Diego State University, where I graduated cum laude in December 2021. Thereafter I obtained a Certificate in Full Stack Web Development from UC San Diego in 2022. Throughout my experiences, I have been commended by professors, peers, and employers for my thorough attention to detail and interpersonal skills. I am now looking to bring my skill set and tenacious work ethic to a company where I can grow and become a valuable asset.



`;
