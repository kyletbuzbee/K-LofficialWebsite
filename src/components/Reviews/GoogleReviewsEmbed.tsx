import React from "react";

export function GoogleReviewsEmbed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers on Google.
          </p>
        </div>

        {/* 
          To get your Google Reviews embed code:
          1. Go to your Google Business Profile.
          2. Find the "Get more reviews" card.
          3. Click on the "Share review form" button.
          4. You can get a link to your reviews page. For an embeddable widget, you might need to use a third-party service or create your own with the Google Places API.
          
          For this example, we will use a simple placeholder.
        */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Google Reviews
            </h3>
            <p className="text-gray-700">
              Replace this with your Google Reviews embed code or a custom
              component that fetches your reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
