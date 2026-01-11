import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/index";
import QuestionPage from "../pages/question/index";
import ResultPage from "../pages/result/index";
const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<QuestionPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};
export default WebRouter;