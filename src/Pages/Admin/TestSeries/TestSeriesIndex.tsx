import React from "react";
import { Route, Routes } from "react-router-dom";
import TestSeries from "./TestSeries";
import AddTestSeries from "./AddTestSeries/AddTestSeries";
import ViewTestSeriesTopics from "./ViewTestSeriesTopics/ViewTestSeriesTopics";
import AddTopics from "./ViewTestSeriesTopics/AddTopics/AddTopics";

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
    </Routes>
  );
};

export default TestSeriesIndex;
