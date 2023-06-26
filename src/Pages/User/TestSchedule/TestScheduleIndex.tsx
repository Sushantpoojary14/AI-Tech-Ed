import { useLocation, Route, Routes, Link } from 'react-router-dom';
import Exam_Section from './Exam_Section';
import TestSeries from './TestSeries';

const TestScheduleIndex = () => {
    return (
        <Routes>
            <Route index element={<TestSeries />} />
            <Route path="/Exam-section/:id" element={<Exam_Section />} />
        </Routes>
    )
}

export default TestScheduleIndex