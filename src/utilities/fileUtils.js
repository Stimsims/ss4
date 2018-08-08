//TODO: break into JSON file creation and request sender
export const createFileWithJSONContent = (isCreate, fileId, name, data, callback, driveKey) => {
    //appData file: 1iUAS3YYiw95q-MbgLZrOXtJvgj_XywiG4_FxqSu_xGdsbfEQOw
    console.log("beginning create file with JSON content");
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
  
    const contentType = 'application/json';
  //getGameName(this.props.gamename, 1)
  //'parents':  ['appDataFolder']
  console.log(`creating json file create? ${isCreate} id: ${fileId} name: ${name} key: ${driveKey}`);
    var metadata = {
        name,
        mimeType: contentType,
        appProperties: {
            //[DRIVE_FILE_KEY]: `${this.props.gamename}`,
            gamename: `${name}`,
        }
      };
      /* Build the body of the request */
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n\r\n' +
          data +
          close_delim;
  
          //'method': 'POST',
          let path = '/upload/drive/v3/files';
          let method =  'POST'
          if(!isCreate){
              path = path + '/' + fileId;
              method = 'PATCH';
          }
          console.log("uploading content, method " + method + " path " + path);
          /* Build the request to google */
      var request = gapi.client.request({
          'path': path,
          'method': method,
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/related; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      if (!callback) {
        callback = function(file) {
          console.log(file)
        };
      }
      request.execute(callback);
  }

