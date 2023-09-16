import axios from "axios";
import { saveAs } from "file-saver";
import {
  AlignmentType,
  Document,
  Footer,
  Header,
  HeadingLevel,
  ImageRun,
  Packer,
  PageBreak,
  Paragraph,
  SectionType,
  TextRun,
  UnderlineType,
} from "docx";

function blobToBase64(blob: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve((<string>reader.result).split(",")[1]); // Remove the data URI prefix
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}

export async function fetchAndReplaceImages(apiData: any) {
  const {
    id,
    tspc_id,
    set_number,
    set_name,
    status,
    question: questions,
  } = apiData;

  const newQuestions = await Promise.all(
    questions.map(async (question: any) => {
      try {
        const images = question.images;
        const base64Images = await Promise.all(
          images.map(async (image: any) => {
            const imageUrl =
              import.meta.env.VITE_IMAGE_URL + `${image.image_url}`; // Replace with your base URL
            const response = await axios.get(imageUrl, {
              responseType: "blob",
            });

            if (response.status === 200) {
              const blob = response.data;
              // console.log("BLOB", blob);

              const base64Image = await blobToBase64(blob);
              return base64Image;
            } else {
              console.error(`Failed to fetch image: ${imageUrl}`);
              return null; // Return null for failed requests
            }
          })
        );

        // Replace the image URLs with Base64-encoded images in the question object
        const updatedQuestion = { ...question };
        updatedQuestion.images = base64Images;

        return updatedQuestion;
      } catch (error) {
        console.error("Error fetching or encoding image:", error);
        return question; // Return the original question object on error
      }
    })
  );

  // Now, newQuestions contains updated question objects with Base64-encoded images
  // console.log("newQuestions", newQuestions);

  const updatedApiData = {
    id,
    tspc_id,
    set_number,
    set_name,
    status,
    question: newQuestions,
  };
  console.log("updatedApiData", updatedApiData);
  downloadAsDocx(updatedApiData);
  // If needed, you can use the newQuestions data in your application
}

export const downloadAsDocx = async (data: any) => {
  const doc = new Document({
    // creator: "Clippy",
    // title: "Sample Document",
    // description: "A brief example of using docx",
    styles: {
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 28,
            bold: true,
            italics: true,
            // color: "red",
          },
          paragraph: {
            spacing: {
              after: 120,
            },
          },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 26,
            bold: true,
            underline: {
              type: UnderlineType.DOUBLE,
              color: "FF0000",
            },
          },
          paragraph: {
            spacing: {
              before: 240,
              after: 120,
            },
          },
        },
        {
          id: "aside",
          name: "Aside",
          basedOn: "Normal",
          next: "Normal",
          run: {
            color: "999999",
            italics: true,
          },
          paragraph: {
            indent: {
              left: 720,
            },
            spacing: {
              line: 276,
            },
          },
        },
        {
          id: "wellSpaced",
          name: "Well Spaced",
          basedOn: "Normal",
          quickFormat: true,
          paragraph: {
            spacing: {
              line: 276,
              before: 20 * 72 * 0.1,
              after: 20 * 72 * 0.05,
            },
          },
        },
        {
          id: "ListParagraph",
          name: "List Paragraph",
          basedOn: "Normal",
          quickFormat: true,
        },
      ],
    },

    sections: [
      {
        children: [
          new Paragraph({
            text: `${data?.set_name}`,
            heading: HeadingLevel.HEADING_1,
          }),
          ...data?.question?.flatMap((question: any, index: number) => {
            return [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `Discussion:`,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${
                      question?.paragraph == null ||
                      question?.paragraph == undefined
                        ? ""
                        : question?.paragraph + "\n"
                    }`,
                  }),
                  new TextRun({
                    text: `${
                      question?.conversation == null ||
                      question?.conversation == undefined
                        ? ""
                        : question?.conversation + "\n"
                    }`,
                  }),
                ],
              }),

              new Paragraph({
                children: [
                  ...question?.images?.flatMap((img: any, index: number) => {
                    return [
                      new ImageRun({
                        data: img,
                        transformation: {
                          width: 100,
                          height: 100,
                        },
                      }),
                    ];
                  }),
                  // new ImageRun({
                  //   data: question?.images[1],
                  //   transformation: {
                  //     width: 100,
                  //     height: 100,
                  //   },
                  // }),
                ],
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: `Question`,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                text: `${question?.question}`,
              }),
              new Paragraph({
                text: `A. ${question?.option_1}`,
              }),
              new Paragraph({
                text: `B. ${question?.option_2}`,
              }),
              new Paragraph({
                text: `C. ${question?.option_3}`,
              }),
              new Paragraph({
                text: `D. ${question?.option_4}`,
              }),
              new Paragraph({
                text: "",
              }),
            ];
          }),
        ],
      },
      {
        properties: {
          type: SectionType.NEXT_PAGE,
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Answers: `,
                bold: true,
              }),
            ],
          }),
          ...data?.question?.flatMap((answers: any, index: number) => {
            return [
              new Paragraph({
                text: `${index + 1}. ${answers?.correct_option}`,
              }),
            ];
          }),
        ],
      },
      {
        properties: {
          type: SectionType.NEXT_PAGE,
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Explanation: `,
                bold: true,
              }),
            ],
          }),
          ...data?.question?.flatMap((expl: any, index: number) => {
            return [
              new Paragraph({
                text: `${index + 1}. ${expl?.correct_option}`,
              }),
              new Paragraph({
                text: `${expl?.explanation} \n`,
              }),
            ];
          }),
        ],
      },
    ],
  });

  // Generate the DOCX file
  // Packer.toBlob(doc).then((blob) => {
  //   // Trigger the download
  //   const url = window.URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = `${data?.set_name}.docx`;
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // });

  Packer.toBlob(doc).then((blob) => {
    // console.log(blob);
    saveAs(blob, `${data?.set_name}.docx`);
    console.log("Document created successfully");
  });
};
