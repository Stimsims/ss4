// //TODO: break into JSON file creation and request sender


//TODO: break into JSON file creation and request sender
function mapAppProperties(appProps){
    let appProperties = {}
    if(appProps){
      appProps.map(a=>{
        appProperties[a.key] = a.value
      })
    }
    console.log("mapAppProperties", appProperties);
    return appProperties;
}
export const createFileWithJSONContent = (fileId, name, appProps  /*array of key val pairs */, data, callback) => {
    //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
    console.log("creating json beginning create file with JSON content");
    console.log(`creating json file method ${method} id: ${fileId} props:`, appProps);
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
    const contentType = 'application/json';
    console.log('creating json ===starting metadata----');
    let props = mapAppProperties(appProps);
    console.log('creating json AppPropeties', 'AppPropeties result', props);
    var metadata = {
        name,
        mimeType: contentType,
        appProperties: props
        //appProperties: mapAppProperties(appProps)
        // appProperties: {
        //     'gamename': 'hello'
        // }
      };
      /* Build the body of the request */
      console.log('creating json ===multipartrequestbody----');
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n\r\n' +
          data +
          close_delim;
    console.log('creating json ===path----');
          //'method': 'POST',
          let method = fileId? 'PATCH':'POST';
          let path = '/upload/drive/v3/files';
          if(fileId){
              path = path + '/' + fileId;
          }
        console.log("creating json uploading content, method " + method + " path " + path);
          /* Build the request to google */
      var request = gapi.client.request({
          'path': `${path}`,
          'method': `${method}`,
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/related; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      if (!callback) {
        var callback = function(file) {
          console.log(file)
        };
      }
      console.log('creating json ===executing----', request);
      request.execute(callback);
  }
  export const createFileWithHTML = (fileId, appProps  /*array of key val pairs */, data, callback) => {
    //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
    //1860xM3H6oJa2juElgM2ccpdNKaG4812x
    console.log("creating html beginning create file with JSON content");
    console.log(`creating html file method ${method} id: ${fileId} props:`, appProps);
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
    //const contentType = 'text/html';
    const contentType = 'application/vnd.google-apps.document';
    console.log('creating html ===starting metadata----');
   // let props = mapAppProperties(appProps);
   // console.log('creating html AppPropeties', 'AppPropeties result', props);
    var metadata = {
      //mimeType: 'application/vnd.google-apps.document'
      mimeType: 'text/html'
       // mimeType: contentType,
       // appProperties: props
      };
      /* Build the body of the request */
      console.log('creating html ===multipartrequestbody----');
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/vnd.google-apps.document\r\n\r\n' +
          //'Content-Type: ' + contentType + '\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
         // 'Content-Type: ' + contentType + '\r\n\r\n' +
          data +
          close_delim;
    console.log('creating html ===path----');
          //'method': 'POST',
          let method = fileId? 'PATCH':'POST';
          let path = '/upload/drive/v3/files';
          if(fileId){
              path = path + '/' + fileId;
          }
        console.log("creating html uploading content, method " + method + " path " + path);
          /* Build the request to google */
      var request = gapi.client.request({
          'path': `${path}`,
          'method': `${method}`,
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/related; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      if (!callback) {
        var callback = function(file) {
          console.log(file)
        };
      }
      console.log('creating html ===executing----', request);
      request.execute(callback);
  }




// export const createFileWithJSONContent = (isCreate, fileId, name, data, callback, driveKey) => {
//     //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
//     console.log("beginning create file with JSON content");
//     const boundary = '-------314159265358979323846';
//     const delimiter = "\r\n--" + boundary + "\r\n";
//     const close_delim = "\r\n--" + boundary + "--";
  
//     const contentType = 'application/json';
//   //getGameName(this.props.gamename, 1)
//   //'parents':  ['appDataFolder']
//   console.log(`creating json file create? ${isCreate} id: ${fileId} name: ${name} key: ${driveKey}`);
//     var metadata = {
//         name,
//         mimeType: contentType,
//         appProperties: {
//             //[DRIVE_FILE_KEY]: `${this.props.gamename}`,
//             gamename: `${name}`,
//         }
//       };
//       /* Build the body of the request */
//       var multipartRequestBody =
//           delimiter +
//           'Content-Type: application/json\r\n\r\n' +
//           JSON.stringify(metadata) +
//           delimiter +
//           'Content-Type: ' + contentType + '\r\n\r\n' +
//           data +
//           close_delim;
  
//           //'method': 'POST',
//           let path = '/upload/drive/v3/files';
//           let method =  'POST'
//           if(!isCreate){
//               path = path + '/' + fileId;
//               method = 'PATCH';
//           }
//           console.log("uploading content, method " + method + " path " + path);
//           /* Build the request to google */
//       var request = gapi.client.request({
//           'path': path,
//           'method': method,
//           'params': {'uploadType': 'multipart'},
//           'headers': {
//             'Content-Type': 'multipart/related; boundary="' + boundary + '"'
//           },
//           'body': multipartRequestBody});
//       if (!callback) {
//         callback = function(file) {
//           console.log(file)
//         };
//       }
//       request.execute(callback);
//   }

