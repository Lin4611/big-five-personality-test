import Title from "./Title";
import Intro from "./Intro";
import Banner from "./Banner";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorInfo from "../../components/ErrorInfo";
import Meta from "../../components/Meta";
import { META } from "../../config/metaConfig";
import { useBigFiveData } from "../../hooks/useBigFiveData";

const LandingPage = () => {
  const { data, loading, error } = useBigFiveData();

  if (loading) {
    return (
      <>
        <Meta {...META.landing} />
        <LoadingSpinner />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Meta {...META.landing} />
        <ErrorInfo error={error} />
      </>
    );
  }

  return (
    <>
      <Meta {...META.landing} />
      <main className="w-full flex flex-col justify-center items-center">
        <Banner />
        <section className="max-w-352.5 w-full flex flex-col py-12  px-10 items-center gap-5 lg:py-24 lg:gap-18.75 lg:items-start 2xl:px-0">
          <Title
            zh={data.name["zh"].split("(")[0]}
            en={data.name["en"].split("(")[0]}
          />
          <Intro description={data.description} />
        </section>
      </main>
    </>
  );
};
export default LandingPage;
