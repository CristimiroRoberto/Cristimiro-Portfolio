import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/style/style.css'
import { createServer} from "miragejs";
import  AOS  from "aos";
import 'aos/dist/aos.css'

  AOS.init({
    duration: 1000,
  }); 
/*
createServer({
  seeds(server){
    server.db.loadData({
      projects:[
             {
            "id": 1,
            "title": "Redesign of LAM's website",
            "category": ["UI Design"],
            "description": "The objective of this personal case study was to improve my design skills by applying concepts of accessibility, minimalism, and usability to the home page of the LAM - Linhas Aéreas de Moçambique website. To ensure accessibility, I used contrasting and legible colors, as well as easy-to-read and appropriate fonts for screen readers. I also adopted clear and objective language throughout the home page content. Minimalism was applied to avoid overwhelming the user with excess information or unnecessary elements. I prioritized a clean aesthetic, using white space and simple graphic elements without compromising the elegance and sophistication of the design.Usability was improved by restructuring the home page, making navigation more intuitive and information easier to locate for the user. I created an organized layout with clear visual elements and well-defined action buttons to facilitate user interaction with the site.he result was a more accessible, minimalist, and usable home page that offers a more pleasant and efficient experience for LAM users. This personal case study allowed me to improve my design skills while also applying important concepts of accessibility, minimalism, and usability.",
            "technologies": ["Figma"],
            "imageUrl": ["https://i.pinimg.com/750x/20/4f/d5/204fd51b433faac4c6f593992956faac.jpg","https://i.pinimg.com/750x/1f/e1/0e/1fe10e3bca79f4f7b156d3b88d62a92f.jpg"],
            "urlProject": "https://www.behance.net/gallery/165259099/Redesign-LAM"
         },
        {
            "id": 2,
            "title": "Personal Portfolio",
            "category": ["UI Design","Front-End"],
           "description": "When creating my UI Design and Front-End Development portfolio, I used a creative process that began with researching references, trends, and best market practices, seeking inspiration from other areas. Next, I started sketching ideas and concepts on paper, creating wireframes and prototypes to test the usability and functionality of proposed solutions. After refining the layout and structure, I began the visual design phase, where I defined the color palette, typography, icons, and graphic elements. With the design approved, I moved on to the development stage, using best HTML, CSS, and JavaScript coding practices to create a fast, responsive, and accessible website. Throughout the process, I used tools such as Figma, Visual Studio Code, among others, ensuring efficiency and quality at each stage. The end result is a portfolio that highlights my services as a UI Designer and Front-End Developer, presenting relevant and recent projects as detailed case studies. I hope this portfolio inspires other professionals and companies to explore new design and development possibilities, always striving for excellence in delivery and customer satisfaction.",
            "technologies": ["Figma","Scss","React","TypeScript"],
            "imageUrl": ["https://i.pinimg.com/750x/24/e8/c4/24e8c47336be196dc54cad2297985488.jpg","https://i.pinimg.com/750x/28/04/b9/2804b90df8df32c28ff09e8b753221e8.jpg","https://i.pinimg.com/750x/27/20/e8/2720e820158866518bb5f7e81b69e3a5.jpg"],
            "urlProject": "https://www.behance.net/gallery/165259099/Redesign-LAM"
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/projects',() => {
      return this.schema.all('projects')
    })
  }
})
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
