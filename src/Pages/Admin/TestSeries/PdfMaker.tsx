import {
  Document,
  Page,
  Text,
  View,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { BButton2 } from "../../../Components/Common/Button";
const styles = {
  page: {
    padding: 20,
  },
  section: {
    margin: 10,
  },
  mainContainer: {
    margin: 3,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // border: "1pt solid #000",
  },
  Container: {
    padding: 2,
    paddingLeft: 20,
    paddingRight: 20,
    // border: "1pt solid #000",
  },
  question: {
    fontSize: 12,
    margin: 0,
  },
  options: {
    fontSize: 12,
    marginBottom: 5,
  },

  answer: {
    fontSize: 12,
    color: "green",
  },

  answer2: {
    fontSize: 12,
    margin: 4,
  },
  header2: {
    fontSize: 12,
    margin: 5,
  },
  explanation: {
    fontSize: 12,
    color: "red",
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center" as const,
  },
};

type questions = {
  question: string;
  options?: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  answer?: string;
  explanation: string;
  correct_option?: string | number;
  tst_id?: number;
  marks?: null | number;
  status?: number;
};

// type questionList = {
//   id: number;
//   question: string;
//   option_1: string;
//   option_2: string;
//   option_3: string;
//   option_4: string;
//   option_5: null;
//   correct_option: string | number;
//   explanation: string;
//   tst_id: number;
//   marks: null | number;
//   status: number;
// };

interface props {
  data: questions[];
  // data2?:questionList[];
  bol: boolean;
  topic: string;
}
const PdfMaker = (props: props) => {
  return (
    <PDFDownloadLink
      document={
        <MyDocument data={props.data} bol={props.bol} topic={props.topic} />
      }
      fileName={`${props.topic}.pdf`}
    >
      {({ loading }) =>
        loading ? "Downloading..." : <BButton2 type="button" name="Download" />
      }
    </PDFDownloadLink>
  );
};

const MyDocument = (props: props) => {
  const arr: number[] = [];
  const random: questions[] = [];
  let count: number = 20;
  if (props.bol) {
    if (props.data?.length < 20) {
      count = 10;
    }
    while (random.length < count) {
      const ran = Math.floor(Math.random() * props.data?.length - 1 + 1);
      if (!arr.includes(ran)) {
        arr.push(ran);
        random?.push(props.data[ran]);
      }
    }
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{props.topic.toUpperCase()}</Text>
        <View style={styles.mainContainer}>
          {random.length != 0 &&
            random?.map((item: questions, key) => (
              <View style={styles.Container}>
                {item.options ? (
                  <>
                    <Text style={styles.question}>
                      {`${key + 1}: ${item.question}`}
                    </Text>
                    <Text style={styles.options}>{`A. ${item.options.a}`}</Text>
                    <Text style={styles.options}>{`B. ${item.options.b}`}</Text>
                    <Text style={styles.options}>{`C. ${item.options.c}`}</Text>
                    <Text style={styles.options}>{`D. ${item.options.d}`}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.options}>
                      {`${key + 1}: ${item.question} `}
                    </Text>
                    <Text style={styles.options}>{`A. ${item.option_1}`}</Text>
                    <Text style={styles.options}>{`B. ${item.option_2}`}</Text>
                    <Text style={styles.options}>{`C. ${item.option_3}`}</Text>
                    <Text style={styles.options}>{`D. ${item.option_4}`}</Text>
                  </>
                )}
              </View>
            ))}
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContainer}>
          <Text style={styles.header2}>Answers:</Text>
          <View style={styles.Container}>
          {random.length != 0 &&
            random?.map((item: questions, key) => (
              <Text style={styles.answer}>
                {item.answer
                  ? `${key + 1}. ${item.answer} `
                  : `${key + 1}. ${item.correct_option} `}
              </Text>
            ))}
            </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.header2}>Explanation:</Text>
          {random.length != 0 &&
            random?.map((item: questions, key) => (
              <View style={styles.Container}>
                <Text style={styles.answer2}>
                  {item.answer
                    ? `${key + 1}.  ${item.answer} `
                    : `${key + 1}.  ${item.correct_option} `}
                </Text>
                <Text style={styles.explanation}>{`${item.explanation} `}</Text>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
};
export default PdfMaker;
