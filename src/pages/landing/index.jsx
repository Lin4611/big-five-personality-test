import Title from "./Title";
import Intro from "./Intro";
import Banner from "./Banner";
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorInfo from '../../components/ErrorInfo'
import { useBigFiveData } from "../../hooks/useBigFiveData";

const LandingPage = () => {
  const { data, loading, error } = useBigFiveData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorInfo error={error} />;
  }

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Banner />
      <section className="max-w-352.5 w-full flex flex-col  py-24 px-12 items-center gap-5 lg:gap-18.75 lg:items-start 2xl:px-0">
        <Title zh={data.name["zh"].split("(")[0]} en={data.name["en"].split("(")[0]} />
        <Intro description={data.description} />
      </section>
    </main>
  );
};
export default LandingPage;
