// import axios from 'axios';
// import React from 'react'
// import js from './Pages/Admin/TestSeries/Question'
// import { OpenAIApi, Configuration } from 'openai'
// const Test = () => {
// // Function to generate a question using GPT API
//     // async function generateQuestion(prompt:any) {
//     //   try {
//     //     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//     //       prompt: prompt,
//     //       max_tokens: 100, // Adjust the desired length of the generated question
//     //       temperature: 0.7, // Adjust the temperature to control the randomness (0.0 to 1.0)
//     //       n: 1, // Number of questions to generate
//     //       stop: '\n' // Stop generation at the end of a line
//     //     }, {
//     //       headers: {
//     //         'Content-Type': 'application/json',
//     //         'Authorization': 'Bearer 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' // Replace with your OpenAI API key
//     //       }
//     //     });
    
//     //     const question = response.data.choices[0].text.trim();
//     //     return question;
//     //   } catch (error) {
//     //     console.error('Failed to generate question:', error);
//     //     return null;
//     //   }
//     // }
    
//     // Usage example
    // const prompt = 'The capital city of France is';
    // generateQuestion(prompt)
    //   .then(question => {
    //     console.log('Generated Question:', question);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

//       const configuration = new Configuration({
//         apiKey: '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',
//       });
      
//       const openai = new OpenAIApi(configuration)
      
//       const completion = openai.createCompletion({
//         model:'text-davinci-003',
//         prompt: process.argv.slice(2).toString(),
//         max_tokens: 1000
//       })
      
//       console.info('loading...')
//       completion.then((r:any) =>{
//         console.info(r.data.choices[0].text)
//       })

//       return <div></div>;
// }

// export default Testimport React, { useState } from 'react';
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: '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',
  })
);

function Test() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event:any) => {
    setInput(event.target.value);
  };


  const newRes= useMutation({
    mutationFn:async (event:any) => {
      event.preventDefault();
  
      const response = await openAi.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      });
      console.log(response);
      return response ;
      
   
    },
    onSuccess:(response)=>{
      const message = response?.data?.choices[0]?.message?.content;
      message && setResponse(message);
      const questions = message?.split('Question:');

// Initialize an empty object to store the extracted information
const data: { [key: string]: { question: string; options: string[]; answer: string; explanation: string } } = {};

console.log(questions);
questions?.forEach((question:any, index:any) => {
  if (index === 0) return; // Skip the empty entry at index 0

  // Separate the question, options, answer, and explanation
  const [questionText, optionsText, answerText, explanationText] = question.split('Options:');
  
  // Extract the question
  const questionMatch = questionText.match(/"([^"]+)"/);
  const questionContent = questionMatch ? questionMatch[1] : '';
  
  // Extract the options
  const options = optionsText.match(/(\d+)/g);
  
  // Extract the answer
  const answerMatch = answerText.match(/"([^"]+)"/);
  const answer = answerMatch ? answerMatch[1] : '';
  
  // Extract the explanation
  const explanationMatch = explanationText.match(/"([^"]+)"/);
  const explanation = explanationMatch ? explanationMatch[1] : '';
  
  // Store the extracted information in the data object
  data[`Question ${index}`] = {
    question: questionContent,
    options,
    answer,
    explanation,
  };
});

console.log(data);
      setInput('');
    }
  })

  if(newRes.isLoading){
    return <h1>Loading...</h1>
  }


  return (
    <div>
      <form onSubmit={newRes.mutate}>
        <textarea value={input} onChange={handleInputChange} cols={10}/>
        <button type="submit">Send</button>
      </form>
      <div>
        Response: {response}
      </div>
    </div>
  );
}

export default Test;
