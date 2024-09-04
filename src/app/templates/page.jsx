import Card from './Card'


const functionalities = [
  {
    title: "Blog-Post-Generator",
    description: "Generates fully written blog posts based on a given topic, keywords, and preferred tone. Users can specify length, style, and additional parameters to tailor content."
  },
  {
    title: "Code-Snippet-Generator",
    description: "Generates code snippets or entire scripts based on user inputs, such as programming language, functionality requirements, and specific coding guidelines."
  },
  {
    title: "SEO-Content-Optimizer",
    description: "Optimizes generated content for SEO by analyzing keywords, readability, and suggesting improvements for better search engine ranking."
  },
  {
    title: "Social-Media-Post-Generator",
    description: "Creates engaging social media posts tailored for platforms like Twitter, Facebook, or LinkedIn, with an emphasis on maximizing engagement."
  },
  {
    title: "Landing-Page-Content-Generator",
    description: "Generates persuasive landing page content, including headlines, CTAs, and body text, to convert visitors into leads or customers."
  },
  {
    title: "Email-Campaign-Generator",
    description: "Crafts email content for marketing campaigns, including subject lines, body text, and personalized elements to enhance open and conversion rates."
  },
  {
    title: "Product-Description-Generator",
    description: "Generates compelling product descriptions that highlight key features, benefits, and use cases, tailored to various industries and audiences."
  },
  {
    title: "Script-Generator",
    description: "Creates scripts for videos, podcasts, or presentations based on user-defined topics, audience, and purpose, ensuring engaging and relevant content."
  },
  {
    title: "Idea-Generator",
    description: "Generates creative ideas for blog posts, social media content, or product launches based on user preferences, industry trends, and market analysis."
  },
  {
    title: "FAQ-Generator",
    description: "Automatically generates frequently asked questions and answers for websites, based on common customer inquiries and industry standards."
  }
];



const page=()=>
{
    console.log("hello")


  return (<>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {
      functionalities.map((f,index)=>
      {
        return <Card key={index} f={f}/>
      })
    }
        
  </div>   
  </>
  )

}

export default page;