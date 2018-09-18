export const listFilesByName = (names) => {
    let query = ''; 
   console.log("listFilesByName names " + names);
   names.map((v, i) => {
       //a key cant be 2 props at once, if there's more than one value, must be an or
      // console.log("listFileByAppProp key " + key + " v " + v);
       query += `${i > 0? ' or ':''}name contains '${v}'`;
   })
   console.log('listFilesByName', `listFilesByName query ${query}`);
   let request = {
       'q': query,
       'fields': "files(id, name, mimeType, modifiedTime, appProperties)"
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
       'fields': "files(id, name, mimeType, modifiedTime, appProperties)"
   }
   return gapi.client.drive.files.list(request);
}
export const getFile = (id) => {
    console.log('getFile drive interface method ' + id);
    return gapi.client.drive.files.get({
        fileId: id,
        alt: 'media',
        fields: "id, name, mimeType, modifiedTime"
      })
}

export const exportFile = (id, mimeType) => {
    // mimeType: 'text/html'
    return gapi.client.drive.files.export({
        fileId: id,
        mimeType
      })
}
// export const editFile = (fileId) => {
//     return gapi.client
//       .request({
//         path: '/upload/drive/v3/files/' + '1ZedvnfNTjfF9_kF-sp0h42ZpBXY3jjYryS-LfxEKSKc',
//         method: 'PATCH',
//         params: {
//           uploadType: 'media'
//         },
//         body: '<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt"><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:center"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:&quot;Arial&quot;;font-style:normal">OMG</span></p><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:left"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;font-style:normal">Daily moisturizer! hello fucking world!!!!</span></p></body></html>'
//       })
//   }
//[{key: DRIVE_FILE_KEY, value: filename}, {key: DRIVE_FILE_PROP_ID, value: fileId}]
  export const editFile = (fileId, body, props = {}) => {
    return gapi.client
      .request({
        path: '/upload/drive/v3/files/' + fileId,
        method: 'PATCH',
        params: {
          uploadType: 'media',
          appProperties: props
        },
        appProperties: props,
        body
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
export const createDocument = () => {
    //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
    // var fileMetadata = {
    //     name: 'My Report',
    //     mimeType: 'application/vnd.google-apps.document'
    //   };
      var media = {
        mimeType: 'text/plain',
        body: 'protein carbs',
        name: 'marep'
      };
      console.log(`createFileWithHtml getting called`);
      return gapi.client.drive.files.create({
       // resource: fileMetadata,
        media: media,
        fields: 'id',
        body: 'hellorrr',
        name: 'red',
        mimeType: 'application/vnd.google-apps.document'
      })
    //   .then((res)=>{
    //       console.log("createFileWithHtml result", res);
    //       return res.result.id;
    //   }).catch((err)=> {
    //       console.log("createFileWithHtml error", err);
    //   });
    // var fileMetadata = {
    //   'name': 'My Report',
    //   'mimeType': 'application/vnd.google-apps.document'
    // };
    // var media = {
    //   mimeType: 'text/plain',
    //   body: 'protein carbs'
    // };
    // console.log(`createFileWithHtml getting called`);
    // gapi.client.drive.files.create({
    //   resource: fileMetadata,
    //   media: media,
    //   fields: 'id'
    // }).then((res)=>{
    //     console.log("createFileWithHtml result", res);
    // }).catch((err)=> {
    //     console.log("createFileWithHtml error", err);
    // });
  }
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
*/