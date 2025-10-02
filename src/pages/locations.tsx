import React, { FC, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

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

const LocationsPage: FC = () => {
  const [activeMarker, setActiveMarker] = useState<Location | null>(null);

  const handleMarkerClick = (marker: Location) => {
    setActiveMarker(marker);
  };

  return (
    <Layout>
      <Head>
        <title>Locations - K&L Recycling Facilities | Texas & Kansas</title>
        <meta
          name="description"
          content="Find K&L Recycling facilities near you. We have locations throughout Texas and Kansas offering scrap metal recycling services."
        />
        <link rel="canonical" href="https://www.klrecycling.com/locations" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-royal-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find the nearest K&L Recycling facility. We serve customers
            throughout Texas and Kansas with convenient locations and
            competitive pricing.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Map
              locations={locations}
              activeMarker={activeMarker}
              onMarkerClick={handleMarkerClick}
              onCloseClick={() => setActiveMarker(null)}
            />
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              All Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the location most convenient for you. All facilities offer
              the same high-quality service and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  location.isMain ? "ring-2 ring-royal-blue-500" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {location.isMain && (
                  <div className="bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white px-4 py-2 text-center">
                    <span className="text-sm font-semibold">Main Facility</span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {location.name}
                    </h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-gray-600">{location.address}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${location.phone}`}
                        className="text-royal-blue-600 hover:text-royal-blue-700 font-semibold"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Services Available:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-royal-blue-100 text-royal-blue-700 px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Call Now
                    </a>
                    <Link
                      href="/contact#quote-tool"
                      className="flex-1 border-2 border-royal-blue-600 text-royal-blue-600 text-center py-3 px-4 rounded-xl font-semibold hover:bg-royal-blue-50 transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Services by Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each location offers specialized services tailored to the local
              market needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Public Drop-off",
                description: "Open to individuals and small businesses",
                locations: "All Locations",
                icon: "👥",
              },
              {
                title: "Industrial Pickup",
                description:
                  "Scheduled collection for manufacturing facilities",
                locations: "Houston, Dallas, Wichita, Kansas City",
                icon: "🏭",
              },
              {
                title: "Roll-off Containers",
                description: "On-site container rental and service",
                locations: "Houston, Austin, San Antonio",
                icon: "📦",
              },
              {
                title: "Car Crushing",
                description: "Vehicle recycling and processing",
                locations: "Dallas, Wichita, San Antonio",
                icon: "🚗",
              },
              {
                title: "Demolition Services",
                description: "C&D site metal recovery",
                locations: "Austin, Kansas City",
                icon: "🏗️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-royal-blue-600 font-semibold">
                  Available at: {service.locations}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue-600 to-electric-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Can&apos;t Find a Location Near You?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We&apos;re always expanding our service area. Contact us to discuss
            pickup services or to learn about our nearest facility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="bg-white text-royal-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+17135550123"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-royal-blue-600 transition-colors text-lg"
            >
              Call (713) 555-0123
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Map: FC<{
  locations: Location[];
  activeMarker: Location | null;
  onMarkerClick: (marker: Location) => void;
  onCloseClick: () => void;
}> = ({ locations, activeMarker, onMarkerClick, onCloseClick }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 33.5,
    lng: -96.0,
  };

  if (!isLoaded)
    return (
      <div
        className="map-loading flex items-center justify-center bg-gray-200"
        style={mapContainerStyle}
      >
        <p>Loading Map...</p>
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={6}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          position={loc.coordinates}
          onClick={() => onMarkerClick(loc)}
          icon={{
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: loc.isMain ? "#1d4ed8" : "#0ea5e9",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 1.5,
            anchor: new google.maps.Point(12, 24),
          }}
        />
      ))}

      {activeMarker && (
        <InfoWindow
          position={activeMarker.coordinates}
          onCloseClick={onCloseClick}
        >
          <div className="p-2 max-w-xs">
            <h4 className="font-bold text-md mb-1">{activeMarker.name}</h4>
            <p className="text-sm text-gray-600">{activeMarker.address}</p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${activeMarker.coordinates.lat},${activeMarker.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-royal-blue-600 hover:underline mt-2 inline-block"
            >
              Get Directions
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default LocationsPage;
