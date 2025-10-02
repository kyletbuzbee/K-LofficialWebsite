import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// This is the same data from contact.tsx. In a real app, this would come from a database or CMS.
const locations = [
  {
    id: "kl-tyler",
    name: "K&L Recycling",
    address: "4134 Chandler Highway, Tyler, TX 75702",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.3879, lng: -95.3344 },
    isMain: true,
  },
  {
    id: "houston-county",
    name: "Houston County Scrap",
    address: "403 South 2nd Street, Crockett, TX 75835",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Roll-off Containers"],
    coordinates: { lat: 31.3143, lng: -95.4572 },
    isMain: false,
  },
  {
    id: "mineola",
    name: "Mineola Iron & Metal",
    address: "2590 Highway 80 West, Mineola, TX 75773",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.6515, lng: -95.5233 },
    isMain: false,
  },
  {
    id: "anderson-county",
    name: "Anderson County Scrap",
    address: "4340 State Highway 19, Palestine, TX 75801",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Demolition Services"],
    coordinates: { lat: 31.8118, lng: -95.6483 },
    isMain: false,
  },
  {
    id: "nacogdoches",
    name: "Nacogdoches Recycling Center",
    address: "2508 Woden Road, Nacogdoches, TX 75961",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Roll-off Containers"],
    coordinates: { lat: 31.5718, lng: -94.6293 },
    isMain: false,
  },
  {
    id: "premier",
    name: "Premier Recyclers",
    address: "1953 Highway 190 West, Jasper, TX 75951",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Car Crushing"],
    coordinates: { lat: 30.9185, lng: -94.0252 },
    isMain: false,
  },
  {
    id: "jacksonville",
    name: "Jacksonville Iron & Metal",
    address: "599 CR 1520, Jacksonville, TX 75766",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 31.9963, lng: -95.2533 },
    isMain: false,
  },
  {
    id: "acme",
    name: "Acme Scrap",
    address: "700 Frey Street, Great Bend, KS 67530",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Car Crushing"],
    coordinates: { lat: 38.3606, lng: -98.7745 },
    isMain: false,
  },
  {
    id: "madfos",
    name: "Madfos Metals",
    address: "10757 Highway 271, Tyler, TX 75708",
    phone: "(800) 533-8081",
    hours: "Mon-Fri: 7AM-5PM, Sat: 8AM-3PM",
    services: ["Public Drop-off", "Industrial Pickup"],
    coordinates: { lat: 32.4639, lng: -95.2119 },
    isMain: false,
  },
];

type Location = (typeof locations)[0];

type LocationPageProps = {
  location: Location;
};

const LocationPage: NextPage<LocationPageProps> = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(", ")[0],
      addressLocality: location.address.split(", ")[1],
      addressRegion: location.address.split(", ")[2].split(" ")[0],
      postalCode: location.address.split(", ")[2].split(" ")[1],
      addressCountry: "US",
    },
    telephone: location.phone,
    openingHours: location.hours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
  };

  return (
    <Layout>
      <Head>
        <title>{`${location.name} - K&L Recycling`}</title>
        <meta
          name="description"
          content={`Find ${location.name} in ${location.address}. We offer a variety of recycling services.`}
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Head>
      <h1>{location.name}</h1>
      <p>{location.address}</p>
      <p>{location.phone}</p>
      <p>{location.hours}</p>
      <h2>Services</h2>
      <ul>
        {location.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={location.coordinates}
          zoom={15}
        >
          <Marker position={location.coordinates} />
        </GoogleMap>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const city = context.params?.city as string;
  const location = locations.find((loc) => loc.id === city);

  if (!location) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location,
    },
  };
};

export default LocationPage;
