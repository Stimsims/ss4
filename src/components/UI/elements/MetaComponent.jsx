import React from 'react';
import {Helmet} from "react-helmet";

export default class MetaComponent extends React.Component {
    render() {
        console.log(`MetaComponent props`, this.props);
     return (
      <div className="wrapper">
        <Helmet>
          {/* <title>the site title</title>
          <meta property="og:type" content="website" />
          <meta name="description" content={'the meta desc'} />
          <meta name="og:description" content={'the meta desc'} />
          <meta property="og:title" content={'the meta title'} />
          <meta property="og:url" content={'http://illulli-1e5a.com/posts/pjsmoothie/'} />
          <meta property="og:image" content={`https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png`} />
          <meta property="og:site_name" content={'the meta site name'} /> */}
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@Paygevii1"/>
            <meta name="twitter:title" content="Top 10 Things Ever"/>
            <meta name="twitter:description" content="Up than 200 characters."/>
            <meta name="twitter:image" content="http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg"/>
            <meta name="twitter:image:alt" content="apple pie" />
        </Helmet>
        <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.data) }}
            />
      </div>
    )
   }
  }

  /*
{
            "@context": "http://schema.org/",
                "@type": "Recipe",
                "name": "Grandma's Holiday Apple Pie",
                "author": "Elaine Smith",
                "image": "http://images.edge-generalmills.com/56459281-6fe6-4d9d-984f-385c9488d824.jpg",
                "description": "A classic apple pie.",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4",
                    "reviewCount": "276",
                    "bestRating": "5",
                    "worstRating": "1"
                },
                "prepTime": "PT30M",
                "totalTime": "PT1H",
                "recipeYield": "8",
                "nutrition": {
                    "@type": "NutritionInformation",
                    "servingSize": "1 medium slice",
                    "calories": "230 calories",
                    "fatContent": "1 g",
                    "carbohydrateContent": "43 g",

                }
        }
  */