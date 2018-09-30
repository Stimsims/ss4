export const listFilesByName = (names, mimeType) => {
    let query = ''; 
   console.log("listFilesByName names " + names);
   names.map((v, i) => {
       //a key cant be 2 props at once, if there's more than one value, must be an or
      // console.log("listFileByAppProp key " + key + " v " + v);
     //  query += `${i > 0? ' or ':''}name contains '${v}'`;
       query += `${i > 0? ' or ':''}name = '${v}'`;
       if(mimeType){
           query += ` and mimeType='${mimeType}'`
       }
   })
   console.log('listFilesByName', `listFilesByName query ${query}`);
   let request = {
       q: query,
       orderBy: 'modifiedTime desc,name',
       fields: "files(id, name, mimeType, modifiedTime, appProperties, webViewLink, webContentLink)"
   }
   return gapi.client.drive.files.list(request);
}
export const listFilesByAppProp = (key, values) =>{ //an array of objs with prop, and relevant values
    /*
        'q': "mimeType contains 'application/json'",
        'fields': "files(id, name, mimeType, modifiedTime)"
        'q': "appProperties has { key='gamename' and value='witcher' }"

            return gapi.client.drive.files.list({
        'q': `appProperties has { key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}' }`,
        'fields': "files(id, name, mimeType, modifiedTime)"
    })
        return gapi.client.drive.files.list({
        'q': `appProperties has { key='${DRIVE_FILE_KEY}' and value='${this.props.gamename}' }`,
        'fields': "files(id, name, mimeType, modifiedTime)"
    })
    */
   let query = ''; 
   console.log("listFileByAppProp values " + values);
   values.map((v, i) => {
       //a key cant be 2 props at once, if there's more than one value, must be an or
       console.log("listFileByAppProp key " + key + " v " + v);
       query += `${i > 0? ' or ':''}appProperties has { key='${key}' and value='${v}' }`;
   })
   console.log('AppPropeties', `listFilesByAppProp query ${query}`);
   let request = {
       'q': query,
       'fields': "files(id, name, mimeType, modifiedTime, appProperties, webViewLink, webContentLink)"
   }
   return gapi.client.drive.files.list(request);
}

export const getFile = (id) => {
    console.log('getFile drive interface method ' + id);
    return gapi.client.drive.files.get({
        fileId: id,
        alt: 'media',
        fields: "id, name, mimeType, modifiedTime, webViewLink, webContentLink"
      })
}

export const exportFile = (id, mimeType) => {
    // mimeType: 'text/html'
    return gapi.client.drive.files.export({
        fileId: id,
        mimeType
      })
}

//[{key: DRIVE_FILE_KEY, value: filename}, {key: DRIVE_FILE_PROP_ID, value: fileId}]
  export const editFile = (fileId, body, props = {}) => {
    return gapi.client
      .request({
        path: '/upload/drive/v3/files/' + fileId,
        method: 'PATCH',
        params: {
          uploadType: 'media',
          appProperties: props,
          published: true
        },
        appProperties: props,
        published: true,
        body
      })
  }
export const createAFile = (docType, mediaType, name, params = '', appProps = {}) => {
    // var fileMetadata = {
    //     name: 'omg',
    //     mimeType: 'application/vnd.google-apps.spreadsheet'
    //   };
    let fields = `id, name${params?`, ${params}`:''}`;
    let appProperties = {
        ...appProps,
        illuId: 'illu'
    }
    console.log(`createAFile params ${fields}`);
      var media = {
        name,
        mimeType: mediaType,
       // body: body
      };
      return gapi.client.drive.files.create({
        // resource: fileMetadata,
        //invalid fields: content
        media: media,
        fields,
        name,
        mimeType: docType,
        contentType: mediaType,
        appProperties
       // body: 'hello, world, omg'
      });
}
// export const createDocument = (game, name, elements) =>{
//     console.log(`createReport game ${game} filename ${name}`, elements);
//     let body = structureBody(elements);
//     createAFile('application/vnd.google-apps.document', 'text/html', name, null, )
//     .then(r => {
//         console.log(`create file result`, r);
//         //let file = r.result.id;
//         return editFile(r.result.id, body);
//     })
//     .then(ef => {
//         console.log(`edit file result`, ef);
//         return null;
//     })
//     .catch( e => {
//         console.log(`create file error`, e);
//         if(e.status === 401 && e.result.error){
//             //login required
//             return e.result.error.message;
//             // this.setState({
//             //     toast: <Toast message={`error: ${e.result.error.message}`} id={this.state.tools.utils.ids.guid()} />
//             // })
//         }
//     })
// }
export const getAppData = () => {
    console.log("getting app data from drive");
    console.log("drive", gapi.client.drive);
    var request = gapi.client.drive.files.list({
        spaces: 'appDataFolder',
        fields: 'nextPageToken, files(id, name)',
        pageSize: 100
      }).then((res)=>{
        console.log("app data result", res);
    }).catch((err)=> {
        console.log("app data error", err);
    })
}

export const structureBody = (elements) => {
            // let body = structureBody([
        //     {tag: 'h1', text: 'Hypnotic Clock', textDecoration: 'underline', textAlign: 'center', fontStyle: 'bold'},
        //     {tag: 'p', text: ' '},
        //     {tag: 'p', text: 'Set different text decorations for...... never include an angle bracket!'}
        // ]);
    let body = `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head>
    <body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">`;
    elements.map(e => {
        console.log(`doc structure body element`, elements);
        let fontSize = '12';
        let color = e.color?e.color:'#2E2E2E';
        let fontWeight = '400';
        let textDecoration = e.textDecoration?e.textDecoration:'none';
        let tag = e.tag?e.tag:'p';
        let textAlign = e.textAlign?e.textAlign:'left';
        let fontStyle = e.fontStyle?e.fontStyle:'normal';
        switch(e.tag){
            case 'h1':
                fontSize = '48';
                fontWeight = '800';
            case 'h2':
                fontSize = '24';
                fontWeight = '600';
            case 'h3':
            case 'h4':
            case 'h5':
                fontSize = '16';
        }
        body += `
        <${tag} style="padding:0;margin:0;color:#000000;font-size:${fontSize}pt;font-family:&quot;Roboto&quot;;line-height:1.149999976158142;text-align:${textAlign}">
        <span style="color:${color};font-weight:${fontWeight};text-decoration:${textDecoration};vertical-align:baseline;font-size:${fontSize}pt;font-family:&quot;Roboto&quot;;
        font-style:${fontStyle}">${e.text}
        </span>
        </${tag}>
        `
    });
    body += `
    </body></html>
    `
    console.log(`doc structured body result`, body);
    return body;
}

/*
export const editFile = (fileId) => {
    return gapi.client
      .request({
        path: '/upload/drive/v3/files/' + '1ZedvnfNTjfF9_kF-sp0h42ZpBXY3jjYryS-LfxEKSKc',
        method: 'PATCH',
        params: {
          uploadType: 'media'
        },
        body: 'mr Hanky after save!'
      })
  }


  export const createAFile = () => {
    var fileMetadata = {
        name: 'omg',
        mimeType: 'application/vnd.google-apps.spreadsheet'
      };
      var media = {
        name: 'omg',
        mimeType: 'text/plain',
        body: 'hello, world, omg b rrrrrrrrrrr'
      };
      gapi.client.drive.files.create({
        // resource: fileMetadata,
        //invalid fields: content
        media: media,
        fields: 'id, name',
        name: 'omg',
        mimeType: 'application/vnd.google-apps.document',
        contentType: 'text/plain',
       // body: 'hello, world, omg'
      })
      .then(r => {
        console.log(`create file result`, r);
      })
      .catch( e => {
          console.log(`create file error`, e);
      })
}




    createReport(name, body){
        //body is an array of objects - headings, text, charts
        console.log(`website game createReport name ${name} body`, body);
        //make a new file with name, get id
        //edit file id with body
        createAFile('application/vnd.google-apps.spreadsheet', 'text/csv', name + "2", `,rose,tulip
        sweet,13,35
        savory,8,33
        umami,32,6
        salty,22,12`)
        .then(r => {
            console.log(`create file result`, r);
            let id = r.result.id;
            //editFile = (fileId, body, props = {}) => {
            return editFile(id, `,rose,tulip
            sweet,13,35
            savory,8,33
            umami,32,6
            salty,22,12`);
        })
        .then(ef => {
            console.log(`create file edit file result`, ef);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })
    }






     listFilesByName(name, 'application/vnd.google-apps.document')
        .then(r => {
            console.log(`create file result`, r);
            let file = r.result.files[0];
            return editFile(file.id, `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:center"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:&quot;Arial&quot;;font-style:normal">OMG</span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="color:#741b47;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;
                font-style:normal">Daily moisturizer! hello fucking world!!!!
                </span>
                </p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 212.70px; height: 189.50px;">
            <img alt="" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSuUTAvrUTbTHejH1WTs8-NMUPELUobECTcMAZg7aNHSfZrCfLfUU52Px1I0ns6CjbG_9H9P16W9EsF/pubchart?oid=953517691&format=image" style="width: 212.70px; height: 189.50px; margin-left: 0.00px; margin-top: 0.00px; 
                transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 392.50px; height: 243.04px;">
            <img alt="" src="https://lh3.googleusercontent.com/dq2nGGs-k5wackvmnK_NAeR0f9qiOIzjxWvS2EU2R-ittj8yRna9q1R_3IrHKf0P2dyqfz_498Su1RPMGUAoKvjqNYEEoHVC3UEolr1PNRhkkYfFJEgu0xjfNc5RUDReyOw4A0t_" style="width: 392.50px; height: 243.04px; margin-left: 0.00px; 
                margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" 
                title="Points scored"></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;height:11pt;
            text-align:left">
            <span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;
            font-style:normal">
            </span></p>
            <img alt="" src="https://docs.google.com/spreadsheets/d/1BqNlxTFnDIjgK6deSuKIVD5zWgbhgaMqU58lANMA-i8/edit?usp=sharing/pubchart?oid=1216131842&format=image" style="width: 212.70px; height: 189.50px; margin-left: 0.00px; margin-top: 0.00px; 
                transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.149999976158142;text-align:left">
            <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) 
                translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 392.50px; height: 243.04px;">
            </body></html>`);
        })
        .then(ef => {
            console.log(`edit file result`, ef);
            //return getFile(ef.result.id);
        })
        .catch( e => {
            console.log(`create file error`, e);
        })

    */