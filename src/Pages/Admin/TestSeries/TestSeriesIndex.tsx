import React from "react";
import { Route, Routes } from "react-router-dom";
import TestSeries from "./TestSeries";
import AddTestSeries from "./AddTestSeries/AddTestSeries";
import ViewTestSeriesTopics from "./ViewTestSeriesTopics/ViewTestSeriesTopics";
import AddTopics from "./ViewTestSeriesTopics/AddTopics/AddTopics";
import ViewProductDetail from "./ViewProductDetail/ViewProductDetail";
import ViewTopicDetail from "./ViewTestSeriesTopics/TopicView/ViewProductDetail/ViewTopicDetail";


const TestSeriesIndex = () => {
  return (
    <Routes>
      <Route index element={<TestSeries />} />
      <Route path="add-test-series" element={<AddTestSeries />} />
      <Route
        path="view-test-series-topics"
        element={<ViewTestSeriesTopics />}
      />
      <Route
        path="view-test-series-topics/add-topics"
        element={<AddTopics />}
      />
      <Route
        path="view-product-detail/:productdetails"
        element={<ViewProductDetail />}
      />

      <Route
        path="view-test-series-topics/view-topic-detail/:topicId"
        element={<ViewTopicDetail />}
      />
    </Routes>
  );
};

export default TestSeriesIndex;
