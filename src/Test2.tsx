import React from "react";

const Test2 = () => {
  const val = `Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years. 
    Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years.`;

  const questions = val?.split("Question:");
  const objects:any = {};  ;
  const tempArray:any = [];

  questions?.map((question: string, index: any) => {
    if(!question) return;
    if(index==0) return;
      const val1 = question?.split("Options:");
      objects.question =  val1[0];
      const val2 = val1[1]?.split("Answer:");       
      objects.options =  val2[0];
      const val3 = val2[1]?.split("Explanation:");  
      objects.answer =  val3[0];
      objects.explanation =  val3[1];

      objects.options = {
       "a": objects.options.split("a.")[1].split("b.")[0],
       "b": objects.options.split("b.")[1].split("c.")[0],
       "c": objects.options.split("c.")[1].split("d.")[0],
       "d": objects.options.split("d.")[1],
      }

    
    tempArray.push(objects)  
    
  });

  console.log(tempArray);
  return (
    <div>
      {questions?.map((item: any, key: any) => {
        return <div key={key}>{item}</div>;
      })}
    </div>
  );
};
export default Test2;
