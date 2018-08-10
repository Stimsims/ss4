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