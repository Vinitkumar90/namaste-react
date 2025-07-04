import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -ResturantContainer
 *    -ResturantCard
 *      -Img
 *      -name of res, star rating,cuisine
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://miro.medium.com/v2/resize:fit:1400/0*Jq1CWuILSBB7LT28.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  const{deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}min</h4>
    </div>
  );
};

const resObj = {
  id: "696327",
  name: "KFC",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f1480259-2e27-4245-adfb-c51462604d67_696327.JPG",
  locality: "Shiv Dayal Nagar",
  areaName: "Harmu Ranchi",
  costForTwo: "₹400 for two",
  cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  avgRating: 4.4,
  parentId: "547",
  avgRatingString: "4.4",
  totalRatingsString: "2.9K+",
  sla: {
    deliveryTime: 46,
    lastMileTravel: 8.3,
    serviceability: "SERVICEABLE",
    slaString: "45-50 mins",
    lastMileTravelString: "8.3 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2025-07-04 02:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
        description: "Delivery!",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "Delivery!",
              imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹59",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  cta: {
    link: "https://www.swiggy.com/city/ranchi/kfc-shiv-dayal-nagar-harmu-ranchi-rest696327",
    type: "WEBLINK",
  },
};

const restList = [
                  {
                    "info": {
                      "id": "80227",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/7dfc1031-b962-4895-92b9-0d83189e507e_80227.JPG",
                      "locality": "Doranda",
                      "areaName": "Doranda",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "8.5K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-04 02:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "1.4K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },

                    "analytics": {
                      "context": "seo-data-2eb239f3-965d-4d21-ad72-055b1e9ccf34"
                    },

                    "cta": {
                      "link": "https://www.swiggy.com/city/ranchi/pizza-hut-doranda-rest80227",
                      "type": "WEBLINK"
                    }
                  },

                  {
                    "info": {
                      "id": "696327",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f1480259-2e27-4245-adfb-c51462604d67_696327.JPG",
                      "locality": "Shiv Dayal Nagar",
                      "areaName": "Harmu Ranchi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "2.9K+",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 8.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "8.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-04 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2eb239f3-965d-4d21-ad72-055b1e9ccf34"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ranchi/kfc-shiv-dayal-nagar-harmu-ranchi-rest696327",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "727850",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/f4e5645e-5495-42de-80e9-c91fe954f9d7_727850.JPG",
                      "locality": "52 Circular road",
                      "areaName": "LALPUR",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "2233",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1.5K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 11.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "11.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-04 02:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2eb239f3-965d-4d21-ad72-055b1e9ccf34"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ranchi/the-belgian-waffle-co-52-circular-road-lalpur-rest727850",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "861479",
                      "name": "Pastas By Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/a6d3514c-79f2-4bdf-9f14-e7e0f0202c9a_861479.jpg",
                      "locality": "Spring City Mall",
                      "areaName": "Doranda",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pastas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "306806",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "39",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 5.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-04 02:00:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": { },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2eb239f3-965d-4d21-ad72-055b1e9ccf34"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ranchi/pastas-by-pizza-hut-spring-city-mall-doranda-rest861479",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "404176",
                      "name": "Sangam Burger And Rolls",
                      "cloudinaryImageId": "s92wr4k1esv3j1rldgmh",
                      "locality": "Purulia Road",
                      "areaName": "Lalpur",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Burgers",
                        "Chinese"
                      ],
                      "avgRating": 4.4,
                      "parentId": "254418",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.3K+",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 11.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-07-04 02:30:00",
                        "opened": true
                      },
                      "badges": { },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": { },
                          "textBased": { },
                          "textExtendedBadges": { }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": { },
                          "video": { }
                        }
                      },
                      "reviewsSummary": { },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": { },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-2eb239f3-965d-4d21-ad72-055b1e9ccf34"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/ranchi/sangam-burger-and-rolls-purulia-road-lalpur-rest404176",
                      "type": "WEBLINK"
                    }
                  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          restList.map((resturant,i) =>(
            <ResturantCard resData={resturant} key={resturant.info.id}  /> 
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
