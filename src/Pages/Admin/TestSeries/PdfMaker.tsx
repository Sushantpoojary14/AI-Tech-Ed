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
  questionContainer: {
    margin: 3,
    padding: 3,
    // border: "1pt solid #000",
  },
  question: {
    fontSize: 12,
    // marginBottom: 5,
  },
  options: {
    fontSize: 12,
  },
  answer: {
    fontSize: 12,
  },
  explanation: {
    fontSize: 12,
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
};

type questionList = {
  id: number;
  question: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  option_5: null;
  correct_option: string | number;
  explanation: string;
  tst_id: number;
  marks: null | number;
  status: number;
};

interface props {
  data: questions[] | questionList[];
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
      const ran = Math.floor(Math.random() *props.data?.length - 1 + 1);
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
        {random.length != 0 &&
          random?.map((item: questions, key) => (
            <View key={key} style={styles.questionContainer}>
              <Text style={styles.question}>
                {`${key + 1}: ${item.question} `}
              </Text>
              {item.options && (
                <>
                  <Text style={styles.options}>{`A. ${item.options.a}`}</Text>
                  <Text style={styles.options}>{`B. ${item.options.b}`}</Text>
                  <Text style={styles.options}>{`C. ${item.options.c}`}</Text>
                  <Text style={styles.options}>{`D. ${item.options.d}`}</Text>
                </>
              )}
              {item.option_1 && <Text style={styles.options}>{`A. ${item.option_1}`}</Text>}
              {item.option_2 && <Text style={styles.options}>{`B. ${item.option_2}`}</Text>}
              {item.option_3 && <Text style={styles.options}>{`C. ${item.option_3}`}</Text>}
              {item.option_4 && <Text style={styles.options}>{`D. ${item.option_4}`}</Text>}
            </View>
          ))}
      </Page>
      <Page size="A4" style={styles.page}>
        {random.length != 0 &&
          random?.map((item: questions, key) => (
            <View key={key} style={styles.questionContainer}>
              <Text style={styles.explanation}>
                {`${key + 1}: ${item.explanation} `}
              </Text>
            </View>
          ))}
      </Page>
    </Document>
  );
};
export default PdfMaker;
