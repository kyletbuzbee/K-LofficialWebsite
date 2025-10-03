// src/pages/locations/[city].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { locationsData, type LocationData } from "@/data/locations";

interface IParams extends ParsedUrlQuery {
  city: string;
}

interface CityPageProps {
  location: LocationData;
}

const CityPage: NextPage<CityPageProps> = ({ location }) => {
  if (!location) {
    return <div>Location not found.</div>;
  }

  return (
    <Layout>
      <SEO
        title={location.city}
        description={`Scrap metal recycling services in ${location.city}. View hours, contact info, and accepted materials.`}
      />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Recycling Services in {location.city}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {location.summary}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Recycle in {location.city}?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {location.benefits}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Location Details
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Address:</strong> {location.contact.address}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={location.contact.phoneHref}
                    className="text-royal-blue-600 hover:underline"
                  >
                    {location.contact.phone}
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong> {location.hours}
                </p>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">
                Accepted Materials
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {location.materials.map((material: string) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(locationsData).map((city) => ({
    params: { city },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CityPageProps, IParams> = async ({
  params,
}) => {
  const city = params?.city;
  if (!city || !locationsData[city as keyof typeof locationsData]) {
    return { notFound: true };
  }
  return {
    props: {
      location: locationsData[city as keyof typeof locationsData],
    },
  };
};

export default CityPage;
