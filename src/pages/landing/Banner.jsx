import banner from "../../assets/imgs/banner_pic.png";
const Banner = () => {
  return (
    <>
      <img
        src={banner}
        alt="banner pic"
        className="w-full object-cover bg-center max-h-80 lg:max-h-135"
      />
    </>
  );
};
export default Banner;
