import React from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import { withSiteData } from 'react-static';

class MetaComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data: {
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
        }
    }
    renderOgType(){
        if(this.props.type){
            let keys = Object.keys(this.props.type);
            return keys.map(e => {
                return <meta property={e} content={this.props.type[e]} />;
            })
        }
        return null;
    }
    render() {
        //<meta property="og:type" content="article" />
        console.log(`MetaComponent props`, this.props);
     return (
      <div className="wrapper">
        <Helmet>
            <title>{this.props.title?this.props.title:this.props.siteTitle}</title>
            {this.renderOgType()}
            {this.props.desc && <meta name="description" content={this.props.desc} />}
            {this.props.desc && <meta name="og:description" content={this.props.desc} />}
            <meta property="og:title" content={this.props.title?this.props.title:this.props.siteTitle} />
            <meta property="og:url" content={'http://illulli-1e5a.com/posts/pjsmoothie/'} />
            <meta property="og:image" content={this.props.image?this.props.image:'https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png'} />
            <meta property="og:site_name" content={this.props.siteTitle} />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@Paygevii1"/>
            <meta name="twitter:creator" content="@Paygevii1"/>
            <meta name="twitter:title" content={this.props.title?this.props.title:this.props.siteTitle}/>
            {this.props.desc && <meta name="twitter:description" content={this.props.desc} />}
            <meta name="twitter:image" content={this.props.image?this.props.image:'https://illulli-1e5a.com/webpackicons/android-chrome-256x256.png'}/>
            {this.props.image && <meta name="twitter:image:alt" content={this.props.imageAlt?this.props.imageAlt:'website icon'} />}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.data) }}
            />
        </Helmet>
 
      </div>
    )
   }
  }
  const mapStateToProps = (state) =>{
    // console.log(`post mapStateToProps `, state);
     return {
         //gapiReady: state.gapi.gapiReady
     }
 }
 export default connect(mapStateToProps)(withSiteData(MetaComponent));
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