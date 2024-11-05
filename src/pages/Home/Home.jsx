import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          Welcome to Bethel Hospital | Explore Our Treatment Solutions
        </title>
        <meta
          property="og:title"
          content="Welcome to Bethel Hospital | Explore Our Treatment Solutions"
        />
        <meta
          property="og:description"
          content="Bethel Hospital provides compassionate, quality healthcare services. Explore our treatment solutions, patient resources, and expert care tailored to meet your health needs. Your well-being is our top priority."
        />
        <meta property="og:url" content="https://www.bethelhospital.in/" />
        <link rel="canonical" href="https://www.bethelhospital.in/" />
        <meta
          property="og:image"
          content="https://i.ibb.co.com/c2VT86j/Bethel-Hospital-Logo.png"
        />
      </Helmet>
      {/* <ComingSoon/> */}
    </>
  );
};

export default Home;
