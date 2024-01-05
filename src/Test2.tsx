import React, { useEffect, useRef, useState } from "react";
import PdfMaker from "./Pages/Admin/TestSeries/Components/PdfMaker";
import { BButton2 } from "./Components/Common/Button";

// import { useTime, useTimer } from 'react-timer-hook';
// import {
//   BlobProvider,
//   Document,
//   Page,
//   Text,
//   View,
//   Image,
//   Link,
//   StyleSheet,
//   PDFViewer,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";
// import PdfMaker from "./Pages/Admin/TestSeries/Components/PdfMaker";
// import AlertBox from "./Components/Common/AlertBox";
// import { UserContext } from "./Context/UserContext";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const Test2 = () => {
// const val = `Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years.
//   Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years.`;

// const questions = val?.split("Question:");
// const objects:any = {};  ;
// const tempArray:any = [];

// questions?.map((question: string, index: any) => {
//   if(!question) return;
//   if(index==0) return;
//     const val1 = question?.split("Options:");
//     objects.question =  val1[0];
//     const val2 = val1[1]?.split("Answer:");
//     objects.options =  val2[0];
//     const val3 = val2[1]?.split("Explanation:");
//     objects.answer =  val3[0];
//     objects.explanation =  val3[1];

//     objects.options = {
//      "a": objects.options.split("a.")[1].split("b.")[0],
//      "b": objects.options.split("b.")[1].split("c.")[0],
//      "c": objects.options.split("c.")[1].split("d.")[0],
//      "d": objects.options.split("d.")[1],
//     }

//   tempArray.push(objects)

// });

// console.log(tempArray);
//   return (
//     <div>
//       {/* {questions?.map((item: any, key: any) => {
//         return <div key={key}>{item}</div>;
//       })} */}

//     </div>
//   );
// };

// function MyTime() {
//   const time: Date = new Date();
//   time.setSeconds(time.getSeconds()+(45*60));

//   const { seconds, minutes , hours } = useTimer({
//     expiryTimestamp: time,
//     onExpire: () => console.warn('onExpire called'),
//   });

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ fontSize: '100px' }}>
//         <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//     </div>
//   );
// }
// let data = `Generate five unique multiple-choice questions (MCQs), keeping the question  sentence the same as the provided example, but changing variables like numbers, names, and genders. Do not include question numbers after 'Question'. An example is provided below with options, correct answer, explanation, and question based on the topic ${topic}. Also keep the explanation similar:

// Question: ${pCurrentData.Question}

// Options:
// a. ${pCurrentData.Option_A},
// b. ${pCurrentData.Option_B},
// c. ${pCurrentData.Option_C},
// d. ${pCurrentData.Option_D}

// Answer: ${pCurrentData.Answer}

// Explanation:${
//   pCurrentData.Explanation
//     ? pCurrentData.Explanation
//     : "Generate an explanation based questions and correct answer"
// }
// `;
let ArrayData: any = [
  {
      "Paragraph": "Evidence indicates that the people of Springfield have significantly low voter turnout. Bill suggested that mobile voting booths should be introduced in Springfield in order to encourage more residents to vote.",
      "Conversation": "",
      "Question": "Which of the following, if true, would most likely weaken the suggestion made by Bill?",
      "Options": {
          "a": "The prospect of casting a vote is considered a civic duty by the majority of those residents who do vote.",
          "b": "Mobile voting booths have been effective in improving voter turnout in another town named Greenfield.",
          "c": "The low turnout was not due to accessibility, but due to political disengagement among the Springfield residents.",
          "d": "It is often suggested that an increase in the number of polling stations can boost participation rates."
      },
      "Answer": "c",
      "Explanation": "This option weakens the argument by suggesting that even if mobile voting booths were to be introduced, it wouldn't necessarily solve the main problem which is political disengagement.",
      "images": [
          "/images/bill.jpg"
      ]
  },
  {
      "Paragraph": "Nora, who loves to cook, believes that fresh ingredients are the key to a great meal. She argues that dishes prepared with processed or canned ingredients are not as tasty or healthy as those made with fresh produce.",
      "Question": "Which of the following, if true, would strengthen the above argument?",
      "Options": {
          "a": "Fresh ingredients are generally more expensive than processed or canned ingredients.",
          "b": "In a blind taste test, people preferred the flavour of dishes made with fresh ingredients over those made with canned or processed ingredients.",
          "c": "Nora’s friends and family love her cooking and say she makes the best meals they have ever tasted.",
          "d": "Many professional chefs also claim to use fresh ingredients wherever possible in their cooking."
      },
      "Answer": "b",
      "Explanation": "This answer is CORRECT as it provides additional evidence to bolster Nora's belief that fresh ingredients make for tastier meals. The results of a blind taste test suggest that people do notice and prefer the taste of fresh ingredients.",
      "Conversation": "",
      "images": []
  },
  {
      "Paragraph": "A study conducted amongst students of a reputable university revealed that the majority of students have a high level of stress. The primary stressor identified was the pressure to maintain a high grade point average (GPA). Thus, the university should introduce mandatory mental health workshops to help curb this issue.",
      "Conversation": "",
      "Question": "Which of the following, if true, would most likely weaken the above argument?",
      "Options": {
          "a": "Mental health workshops have shown to alleviate stress levels in other university environments.",
          "b": "The data for the study was gathered from only a single university, so it may not accurately represent all student populations.",
          "c": "Mental heath is considered an important issue by many educational institutions.",
          "d": "Engineering students are reportedly more stressed than Art students."
      },
      "Answer": "b",
      "Explanation": "The argument weakens because it assumes that the experience at this one university applies to all universities. If the data is only from one university, it may not be a representative sample and thus, its use in a general argument about all universities becomes questionable.",
      "images": []
  },
  {
      "Paragraph": "John often spends more time on tasks he finds enjoyable. He tends to postpone or avoid tasks that are difficult or he perceives as boring. As a result, John often struggles to complete those tasks within the required timeline.",
      "Question": "Which of the following, if true, would strengthen the above argument?",
      "Options": {
          "a": "In a survey, people like John who procrastinate were found to handle enjoyable tasks more efficiently.",
          "b": "John once failed to submit a project on time as he was preoccupied with more enjoyable activities.",
          "c": "John is known to desire immediate gratification and tend to ignore potential future outcomes.",
          "d": "In an interview, John admitted to enjoying tasks that are easy and fun, and struggling with tasks he finds difficult or tedious."
      },
      "Answer": "d",
      "Explanation": "This answer is CORRECT as it strengthens the argument that John struggles with tasks he finds difficult or boring. He himself confirms this by admitting his preference for enjoyable tasks and difficulty with less exciting ones.",
      "Conversation": "",
      "images": [
          "/images/john.jpg"
      ]
  },
  {
      "Paragraph": "In a town meeting discussing a proposed increase in property tax, a local news team conducted interviews with the residents. It was observed that those interviewed who were against the proposed tax hike far outnumbered those who were in favor of it. The residents assert that the news team showed a bias against the tax hike proposal.",
      "Question": "Which one of the following, if true, would most seriously weaken the residents' argument?",
      "Options": {
          "a": "The news team has a reputation for fair and balanced reporting.",
          "b": "The majority of viewers do not believe that news media are completely unbiased.",
          "c": "Before the town meeting, a citizens' survey showed a significantly higher number of residents against the proposed tax hike than those in favor of it.",
          "d": "The lead reporter of the news team owns several properties in the town that would be affected by the tax hike."
      },
      "Answer": "c",
      "Explanation": "This information weakens the argument by indicating that the observed bias in the interviews likely resulted from the existing public sentiment, rather than a bias on the part of the news team. If, before the town meeting, a significant number of residents were already against the proposed tax hike, it would naturally lead to more interviews with individuals who oppose it, even without any intentional bias from the news team.",
      "Conversation": "",
      "images": []
  },
  {
      "Paragraph": "",
      "Conversation": "",
      "Question": "A statement in a pet store says: 'All parrots can talk and all canaries cannot. No parrots are canaries.' Which of the following must be true?",
      "Options": {
          "a": "Some parrots are canaries.",
          "b": "Canaries are not birds because they do not talk.",
          "c": "All talking birds in the store are parrots.",
          "d": "No canaries can talk."
      },
      "Answer": "d",
      "Explanation": "This answer is CORRECT as if all parrots can talk, but no canaries can talk then there must be no overlap between parrots and canaries in regards to their ability to talk. Therefore, no canaries can talk.",
      "images": []
  },
  {
      "Paragraph": "In Stella's gym class, everyone had a limited time to use the gym equipment. But due to the high number of attendees, not everyone got the equal amount of time. Noticing this, Stella shared some of her workout time with others who couldn't get enough time. This gesture was appreciated by those who benefited from her action. Thus, we should all strive to share resources fairly when there's scarcity.",
      "Question": "Which of the following, if true, would best strengthen the above argument?",
      "Options": {
          "a": "In practice, sharing scarce resources is more complex than sharing gym equipment.",
          "b": "If everyone took the initiative to share scarce resources, this would alleviate the issue of scarcity, leading to a more harmonious community.",
          "c": "It's the job of the gym instructor, not the individual, to ensure fair usage of gym equipment.",
          "d": "Sharing with others provides an emotional reward for the sharer."
      },
      "Answer": "b",
      "Explanation": "Option B reinforces the argument by suggesting that if everyone began to share scarce resources, the issue of scarcity may largely be resolved, resulting in a more harmonious community.",
      "Conversation": "",
      "images": []
  },
  {
      "Paragraph": "At an exclusive art exhibition centre, entry is not permitted after working hours unless you are a premium member. However, there is a special provision: 'If you are a renowned artist and the exhibition is displaying your work, you will be permitted access even after hours.' Given these conditions, evaluate the following scenarios.",
      "Conversation": "",
      "Question": "Which of the following statements must be true?",
      "Options": {
          "a": "Stella, who is a renowned artist, can access the exhibition centre after hours even if she is not a premium member.",
          "b": "Stella, despite not being a premium member, was allowed entry after hours because she was exhibiting her work.",
          "c": "Stella can't exhibit her work in the centre after hours as she is not a renowned artist.",
          "d": "Stella, a renowned artist, but without an exhibit at the centre, can't access it after working hours."
      },
      "Answer": "c",
      "Explanation": "The paragraph clearly mentions that for someone to gain access after working hours without being a premium member, they need to be a renowned artist and have their work displayed at the exhibition. Since in option C, Stella is not a renowned artist, she would not enjoy the provision and could not exhibit her work after hours.",
      "images": []
  },
  {
      "Paragraph": "In Frank's office team, everyone was accustomed to taking turns making coffee for the team. However, on some days, certain team members wouldn't get their turn due to uneven distribution. Thinking quickly, Frank stepped up and offered to make coffee when no one else was available. His actions were appreciated by his team members. Hence, everyone in a team should be ready to step up when necessary for the benefit of the team.",
      "Question": "Which of the following, if true, would strengthen the above argument?",
      "Options": {
          "a": "In a team environment, it's not always feasible for everyone to take turns.",
          "b": "If every team member was ready to step up when necessary, the overall efficiency and camaraderie of the team would be enhanced.",
          "c": "The team leader should be the one to step up when other members can't take their turn.",
          "d": "Being ready to step up in a team is not an important aspect of teamwork."
      },
      "Answer": "b",
      "Explanation": "Option B supports the idea that readiness of all team members to step up when necessary has significant implications beyond the immediate act. If everyone in the team follows this, it could lead to increased efficiency and camaraderie in the team, thereby enhancing the overall team dynamics.",
      "Conversation": "",
      "images": [
          "/images/frank.jpg"
      ]
  },
  {
      "Paragraph": "A vast number of college students depend on online resources to prepare for their exams. Some educators argue that relying too heavily on these resources can lead to a lack of deep understanding and critical thinking skills. In this context, John believes that colleges should enact stricter policies about using online resources for studying.",
      "Question": "Which of the following, if true, most effectively strengthens John's argument?",
      "Options": {
          "a": "Many online resources provide incorrect or misleading information.",
          "b": "Not all students have access to internet, making it unfair for those who depend on traditional resources.",
          "c": "Most college professors recommend their students to use online resources for additional learning.",
          "d": "A research study found that students who rely heavily on online resources have a lower understanding of the subject matter compared to those who use traditional study methods."
      },
      "Answer": "d",
      "Explanation": "Option D strengthens John's argument about enforcing stricter policies on the usage of online resources. It gives evidence that relying heavily on online resources can lead to a lower understanding, which aligns with John's concern.",
      "Conversation": "",
      "images": [
          "/images/john.jpg"
      ]
  },
  {
      "Paragraph": "At a famous ski resort, access to the best slopes during the winter season is only granted for guests having high-end bookings. However, an exception is made for: 'If you are a national champion in skiing and have been personally invited by the resort owner, you can enjoy unfettered access to all slopes.' Given this, if these preconditions are fulfilled, which statements must be accurate?",
      "Conversation": "",
      "Question": "Which of the following statements must be true?",
      "Options": {
          "a": "Nathan hasn't made a high-end booking but can still access all the ski slopes during winter.",
          "b": "Nathan, being friends with the resort owner, will be able to get to ski without a prior high-end booking.",
          "c": "Nathan, not being a national champion, has no way to get premier access without making a high-end booking.",
          "d": "Nathan has a personal invite from the owner but is not a national champion. Hence, he will get premier access."
      },
      "Answer": "c",
      "Explanation": "From the given paragraph, we understand that to get premier access without a high-end booking, one must be a national champion and have a personal invite from the owner. Since option C states that Nathan is not a national champion, he would not enjoy the exception.",
      "images": []
  },
  {
      "Paragraph": "In the context of eco-conservation, Frank suggests that strict regulations should be established on companies that produce excessive amounts of greenhouse gases. He believes this can greatly reduce the carbon footprint and slow down the process of global warming.",
      "Question": "Which of the following, if true, most effectively strengthens Frank's argument?",
      "Options": {
          "a": "Several companies have already taken initiatives on their own to reduce carbon emissions.",
          "b": "Greenhouse gases are not the only factors contributing to global warming.",
          "c": "A recent report indicates that companies contributing to most of the greenhouse gases are actually only a handful, and they are known for neglecting eco-friendly practices.",
          "d": "Some companies claim that they can't reduce carbon emissions without seeing a significant decrease in production."
      },
      "Answer": "c",
      "Explanation": "Option C strengthens Frank's argument. It provides evidence that the most significant contributors to greenhouse gas emissions represent a small number of companies, which are known for ignoring eco-friendly practices. Thus, enforcing strict regulations would directly target these primary contributors.",
      "Conversation": "",
      "images": [
          "/images/frank.jpg"
      ]
  },
  {
      "Paragraph": "Lack of physical activity has been identified as a key factor contributing to the rising number of teenagers with bad health and obesity. Schools, therefore, should make participation in at least one physical sport mandatory for students.",
      "Conversation": "",
      "Question": "Which of the following, if true, would strenghten the above argument?",
      "Options": {
          "a": "Obesity among teenagers has been associated with increased risk of various diseases like diabetes and heart disease.",
          "b": "A lot of students find physical sports boring and would rather engage in other activities like playing video games or reading.",
          "c": "Not all students are skilled in physical sports and this may lead to them feeling left out or bullied.",
          "d": "Modern technology has made it easy for kids to stay indoors and engage in sedentary activities for long periods"
      },
      "Answer": "a",
      "Explanation": "Option A strengthens the argument by outlining the potential health risks of teen obesity, providing a sense of urgency to the need for mandatory physical sports participation in schools.",
      "images": []
  },
  {
      "Paragraph": "During a broadcast covering a dispute over a new city park proposal, a radio show host interviewed several residents. Out of the total interviews conducted, the number of residents who opposed the park proposal was twice as many as those who supported it. Consequently, John argues that the radio show is biased against the park proposal.",
      "Question": "Which one of the following, if true, most seriously weakens John's argument?",
      "Options": {
          "a": "The majority of listeners were already familiar with the city park issue before the radio show.",
          "b": "Most listeners of the radio show do not expect it to be entirely unbiased.",
          "c": "Prior to the broadcast, a poll showed that twice as many residents were against the park proposal as were in favor of it.",
          "d": "The proposed park is in close proximity to the radio station, potentially causing disturbances during broadcasts."
      },
      "Answer": "c",
      "Explanation": "This information weakens John's argument by suggesting that the bias observed in the interviews may reflect pre-existing public sentiment rather than a conscious bias by the radio show. If more residents were already against the park proposal before the broadcast, it is only natural that there would be more interviews with those opposed to it, even without any intentional bias from the radio show.",
      "Conversation": "",
      "images": [
          "/images/john.jpg"
      ]
  },
  {
      "Paragraph": "Fast food companies have often been criticized for contributing to the obesity epidemic in the society. These companies serve high calorie, unhealthy food which contributes to consuming more than necessary calories in a day. Hence, the authorities should consider placing stricter regulations on fast food companies.",
      "Conversation": "",
      "Question": "Which of the following, if true, would strenghten the above argument?",
      "Options": {
          "a": "Obesity rates have skyrocketed in the last few years and majority of these cases can be traced back to excessive consumption of fast food.",
          "b": "Fast food companies engage in aggressive marketing tactics to entice consumers, particularly children.",
          "c": "A lot of fast food companies have started including healthier options in their menu.",
          "d": "The food served by fast food companies is usually cheap and easily accessible, making it a common choice for a lot of people."
      },
      "Answer": "a",
      "Explanation": "Option A strengthens the argument by providing a direct link between fast food consumption and obesity rate, amplifying the reasoning for stricter regulations on fast food companies.",
      "images": []
  }
];

// export default function Test2() {
// const { handleAlertBoxOpen, alertBox } = UserContext();

// const click = () => {
//   // handleAlertBoxOpen();
//   data?.map((item: any, key: number) => {
//     let data = item.question.split(" ").sort();
//     item.images = [];

//     ["boys", "girls", "Two"].sort().forEach((search: string) => {
//       let s = 0;
//       let e = data.length - 1;
//       let caps = search.toUpperCase();
//       while (s <= e) {
//         let mid = Math.floor((s + e) / 2);

//         if (data[mid].toUpperCase() === caps) {
//           // console.log(item);
//           item.images.push(caps);
//           break;
//         }

//         if (data[mid].toUpperCase() < caps) {
//           s = mid + 1;
//         } else {
//           e = mid - 1;
//         }
//       }
//     });
//     if (item.images.length == 0) {
//       delete item.images;
//     }
//   });
//   // console.log(data);
// };

// return (
// <>
{
  /* <AlertBox name="Error" type="error" bol={ alertBox} /> */
}
{
  /* <PdfMaker data={data} bol={true} topic="ratio"/> */
}
{
  /* <button onClick={click}>click</button>
   */
}
{
  /* <img src="http://127.0.0.1:8000/images/nike.jpg" alt="" /> */
}
{
  /* <img src={`${import.meta.env.VITE_IMAGE_URL}/images/boy.jpg`} alt="dd" /> */
}
{
  /* {data && (
        <PdfMaker
          data={data}
          bol={!!data}
          topic={"new"}
          total={20}
          button={<BButton2 type="button" name="Download" />}
        />
      )} */
}

//   </>
// );

import DownloadPDF from "./Pages/Admin/TestSeries/Components/PDF/DownloadPDF";
import adminTokenAxios from "./Hooks/AdminTokenAxios";
import { useQuery } from "@tanstack/react-query";
import { Stack } from "@mui/system";
import QuestionCard from "./Pages/Admin/TestSeries/Components/QuestionCard";
// import potrace from "potrace-js";
const MyComponent = () => {
  const { data } = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      return await adminTokenAxios.get(`/admin/get-image/3`);
    },
  });
  const responses: any[] = [];
  let image_data = data?.data.images;
  const [resData, setResData] = useState<any>([]);
  const maleNames = [
    "boy",
    "Nathan",
    "Austin",
    "Frank",
    "Bill",
    "Jenson",
    "Lloyd",
    "Oliver",
    "Louis",
    "Sam",
    "Chris",
    "David",
    "Tom",
    "Bobby",
    "Dennis",
    "Evan",
    "Philips",
    "James",
    "Adam",
    "Jay",
  ];
  const femaleNames = [
    "girl",
    "Zoya",
    "Ruby",
    "Lucy",
    "Daisy",
    "Georgia",
    "Sally",
    "Nora",
    "Amelia",
    "Stella",
    "Natasha",
    "Marry",
    "Annie",
    "Clara",
    "Jessie",
    "Flora",
    "Myra",
    "Sarah",
    "Alice",
    "Eliza",

  ];
  const image_keyword = image_data?.map((item:any)=>{
  
    return item.image_name;
});
  const set = ()=>{
    const newArray = ArrayData?.map((item: any, index: any) => {
      // if (category == 3) {
      item.Paragraph =
        item.Paragraph && item.Paragraph != "undefined"
          ? item.Paragraph.replace(/Paragraph:/g, "").replace(/\/n/g, "")
          : "";

      item.Conversation =
        item.Conversation && item.Conversation != "undefined"
          ? item.Conversation.replace(/Conversation:/g, "").replace(
              /\/n/g,
              ""
            )
          : "";

      // }
      item.Explanation =
        item.Explanation &&
        item.Explanation.replace(/Explanation:/g, "").replace(/\/n/g, "");
      item.Question =
        item.Question &&
        item.Question.replace(/Question:/g, "").replace(/\/n/g, "");
      let data: string[] = [];
      // const keysToCheck = ["Paragraph", "Conversation", ""];
      // const itemKeys = Object.keys(item);
      // const exists = keysToCheck.every((key) => {
      //   return itemKeys.includes(key);
      // });

      // if (exists) {
      // if (item.Paragraph || item.Conversation) {
      const paragraphData = item.Paragraph?.split(" ") ?? [];
      const conversationData = item.Conversation?.split(" ") ?? [];
      const questionData = item.Question.split(" ") ?? [];
      data = [...paragraphData, ...conversationData, ...questionData];
      // console.log(paragraphData, conversationData, questionData);
      
      // }

      // data = [
      //   ...item.Paragraph?.split(" "),
      //   ...item.Conversation?.split(" "),
      // // ];
      // else {
      //   data = item.Question.split(" ");
      // }
      // console.log(data);

      item.images = [];
      let count: number = 0;
      // console.log(item.images?.length);

      // if (item.images?.length !== 2) {
      // if (exists) {
      // const m_random = Math.floor(Math.random() * 3);
      
     
    
      // const m_image_urls2:string[] = [...maleNames].splice(10,10).filter((name:string)=>{
      //   return image_keyword.includes(name)
      // });
      // let t = [...maleNames];
  
      
      // console.log(" girl " + m_random);
      if(count==0){
        const m_image_urls:string[] =  [...maleNames].splice(0,10).filter((name:string)=>{
          return image_keyword.includes(name)
         });
        [...m_image_urls].forEach((search: string) => {
          const caps = search.toUpperCase();
          let match = data.find(
            (word: string) => word.toUpperCase() === caps
          );
        
          if (match) {
            const url = image_data.find((word:any) => word.image_name.toUpperCase() === match);
                item.images?.push(url);
                count++;
                return true; 
            }
        });
      }

      if(count==0){
        const g_image_urls =  femaleNames.splice(0,10).filter((name:string)=>{
          image_keyword.includes(name)
        });
        [...g_image_urls].forEach((search: string) => {
          const caps = search.toUpperCase();
          let match = data.find(
            (word: string) => word.toUpperCase() === caps
          );
        
          if (match) {
            const url = image_data.find((word:any) => word.image_name.toUpperCase() === match);
                item.images?.push(url);
                count++;
                return true; 
            }
        });
      }
      
      if(count<=1){
        const m_image_urls2:string[] =  [...maleNames].splice(10,10).filter((name:string)=>{
          return image_keyword.includes(name)
         });
        [...m_image_urls2].forEach((search: string) => {
          const caps = search.toUpperCase();
          let match = data.find(
            (word: string) => word.toUpperCase() === caps
          );
        
          if (match) {
            const url = image_data.find((word:any) => word.image_name.toUpperCase() === match);
                item.images?.push(url);
                count++;
                return true; 
            }
        });
      }

      if(count<=1){
        const g_image_urls2 =  femaleNames.splice(10,10).filter((name:string)=>{
          image_keyword.includes(name)
        });
        [...g_image_urls2].forEach((search: string) => {
          const caps = search.toUpperCase();
          let match = data.find(
            (word: string) => word.toUpperCase() === caps
          );
        
          if (match) {
            const url = image_data.find((word:any) => word.image_name.toUpperCase() === match);
                item.images?.push(url);
                count++;
                return true; 
            }
        });
      }
    
      // const g_random = Math.floor(Math.random() * 1);
   
      // const g_image_urls2 = femaleNames.splice(0,10).filter((name:string)=>{
      //   image_keyword.includes(name)
      // });
      // console.log(" girl " + g_random);

      femaleNames.forEach((search: string) => {
        if (item.images.length >= 2) {
          return true;
        }
        const caps = search.toUpperCase();
        const match = data.find(
          (word: string) => word.replace(/:/g, "").toUpperCase() === caps
        );

        if (match) {
          const url = image_data.find((word:any) => word.image_name.toUpperCase() === match);
          switch (count) {
            case 1:
              item.images?.push(url);
              count++;
              break;
            case 2:
              item.images?.push(url);
              count++;
              break;
            case 3:
            default:
              item.images?.push(url);
              count++;
          }
        }
      });
      // }
      image_data.forEach(
        (search: { image_name: string; image_url: string }) => {
          if (item.images?.length >= 2) {
            return true;
          }
          const caps = search.image_name.toUpperCase();

          const match = data.find(
            (word: string) => word.toUpperCase() === caps
          );

          if (match) {
            item.images?.push(search.image_url); // Add the image URL to the question
          }
        }
      );
      // }
      // console.log(male,female);

      // if (item.images.length === 0) {
      //   delete item.images;
      // }
      return item;
      console.log(item);
      // responses.push(item); // Add the modified item to the responses array
    });console.log(newArray);
    
    setResData(newArray);

  }

  
  return (
    <Stack spacing={2}>
      <button onClick={set}>Click</button>
    {resData && resData.length != 0 && resData.map((questionData: any, index: any) => (
      <QuestionCard
        key={index}
        // questionNo={index + 1}
        paragraph={questionData?.Paragraph}
        conversation={questionData?.Conversation}
        images={questionData?.images}
        question={questionData?.Question}
        options={questionData?.Options}
        answer={questionData?.Answer}
        explanation={questionData?.Explanation}
        index={index}
        data={resData}
        updateData={setResData}
      />
    ))}
  </Stack>
    
  );
};

export default MyComponent;
