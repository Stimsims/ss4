import React from 'react';
import {Helmet} from "react-helmet";

export default class MetaComponent extends React.Component {
    render() {
     return (
      <div className="wrapper">
        <Helmet>
          <title>the site title</title>
          <meta property="og:type" content="website" />
          <meta name="description" content={'the meta desc'} />
          <meta name="og:description" content={'the meta desc'} />
          <meta property="og:title" content={'the meta title'} />
          <meta property="og:url" content={'http://illulli-1e5a.com/posts/pjsmoothie/'} />
          <meta property="og:site_name" content={'the meta site name'} 
           />
          {
            this.props.jsonLd && 
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.data) }}
            />
          }
        </Helmet>
      </div>
    )
   }
  }