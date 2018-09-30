export const listCourses = () => {
    return gapi.client.classroom.courses.list();
}
export const listCourseWork = (courseId) => {
    return gapi.client.classroom.courses.courseWork.list({
        courseId
    });
}
export const listSubmissions = (courseId, courseWorkId) => {
    return gapi.client.classroom.courses.courseWork.studentSubmissions.list({
      //  courseId: '17021267121', courseWorkId: '17020506164', userId: 'me'
        courseId, courseWorkId, userId: 'me'
    })
}
export const createCourse = () => {
    /*
        "http://classroom.google.com/c/MTcwMjEyNjcxMjFa"courseGroupEmail:"necromancy_period_2_af4f1bd6@classroom.google.com"courseState:"PROVISIONED"
        creationTime: "2018-09-19T09:21:13.737Z"description:"well be learning how to touch the dead"
        descriptionHeading:"youll enjoy this"enrollmentCode: "l8z9gj4"guardiansEnabled:false id:"17021267121"name:"necromancy"
        ownerId:"110032523464157574066"room:"601"section:"period 2"
        teacherFolder:{id: "0BznEEPyGIHb0fnpUcmpmazNCUndHWmVnWXdJY05QVTdrNnQyT1Q0MWlxZE9HY0dmUFZCUDg"}
        teacherGroupEmail:"necromancy_period_2_teachers_2b8259c2@classroom.google.com"
        updateTime: "2018-09-19T09:21:12.715Z"
    */
    gapi.client.classroom.courses.create({
        name: 'necromancy',
        section: 'period 2',
        descriptionHeading: 'youll enjoy this',
        description: 'well be learning how to touch the dead',
        room: '601',
        ownerId: 'me',
        courseState: 'PROVISIONED'
    })
    .then(r => {
        console.log(`classroom createcourse result`, r);
        let id = r.result.id;
    })
    .catch(e => {
        console.log(`classroom create course error`, e);
    })
}
export const createAssignment = (courseId, title) => {
    //course id 17021267121 enrollment code l8z9gj4
    if(courseId){
        console.log(`classroom creating coursework for course ${courseId}`)
        return  gapi.client.classroom.courses.courseWork.create({
            courseId,
            title,  
            description: 'Read the article about bringing the dead to life.',  
            materials: [  
               {'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' }}
            ],  
            workType: 'ASSIGNMENT'
        })
    }else{
        return gapi.client.classroom.courses.list();
    }
}

export const turnInAssignment = () => {
    //changes student turnIn button to an unsubmit button
    gapi.client.classroom.courses.courseWork.studentSubmissions.turnIn({
        courseId: '17021267121',
        courseWorkId: '17020506164',
        id: 'CgwImobFiDcQtKCBtD8'
    })
    .then(r => {
        console.log(`classroom turn in result`, r);
    })
    .catch(e => {
        console.log(`classroom turn in error`, e);
    })
}
export const gradeAssignment = () => {
    ////course id 17021267121 enrollment code l8z9gj4 courseworkId 17020506164 
     //grades can be assigned by teacher account
    gapi.client.classroom.courses.courseWork.studentSubmissions.patch({
        courseId: '17021267121',
        courseWorkId: '17020506164',
        id: 'CgwImobFiDcQtKCBtD8',
        updateMask:'assignedGrade,draftGrade',
        assignedGrade: 99,  
        draftGrade: 80   
    })
    .then(r => {
        console.log(`classroom submit grade result`, r);
    })
    .catch(e => {
        console.log(`classroom submit grade error`, e);
    })
}
//createReport(game, name, elements
export const submit = (game, name, elements) => {

} 
export const submitAssignment = (courseId, courseWorkId, userId, subId) => {
    //course id 17021267121 enrollment code l8z9gj4 courseworkId 17020506164     courseId and courseworkId can be found on coursework item
    //list courses, list courseWork for course, list student submissions, submit for student
   //links can be added from student account

    if(!subId){
        gapi.client.classroom.courses.courseWork.studentSubmissions.list({
            courseId: '17021267121', courseWorkId: '17020506164', userId: 'me'
        })
        .then(r => {
            console.log(`listing studentSubmissions result`, r);
            /*
alternateLink: "http://classroom.google.com/c/MTcwMjEyNjcxMjFa/a/MTcwMjA1MDYxNjRa/submissions/student/MTQ3ODE4NTg1ODZa"
assignmentSubmission: Object associatedWithDeveloper: true courseId: "17021267121"courseWorkId: "17020506164" courseWorkType: "ASSIGNMENT"
creationTime: "2018-09-19T09:43:20.389Z" id: "CgwImobFiDcQtKCBtD8" state: "CREATED"updateTime: "2018-09-19T09:43:20.353Z"
userId: "100326176790146306456"
            */
            // this.setState({
            //     submissions: r.result.studentSubmissions
            // })
            if(r.result.studentSubmissions){
                let subId = r.result.studentSubmissions[0].id;
                let userId = r.result.studentSubmissions[0].userId;
                let courseId = r.result.studentSubmissions[0].courseId;
                let courseWorkId = r.result.studentSubmissions[0].courseWorkId;
                this.submitAssignment(courseId, courseWorkId, userId, subId);
            }else{
                throw new Error('no submission found for that userId');
            }
        })
        .catch(e => {
            console.log(`listing studentSubmissions error`, e);
        })
    }else{
        console.log(`retrieving submission ${subId}`)
        gapi.client.classroom.courses.courseWork.studentSubmissions.modifyAttachments({
            courseId,
            courseWorkId,
            id: subId,
            addAttachments: [
                {'link': { 'url': 'https://docs.google.com/spreadsheets/d/1BqNlxTFnDIjgK6deSuKIVD5zWgbhgaMqU58lANMA-i8/edit?usp=sharing' }}
            ]
        })
        .then(r => {
            console.log(`classroom submit assignment result`, r);
        })
        .catch(e => {
            console.log(`classroom submit assignment error`, e);
            //status 404 requested entity was not found
        })
    }

        
    
}




/*
export const createAssignment = (courseId) => {
    //course id 17021267121 enrollment code l8z9gj4
    if(courseId){
        console.log(`classroom creating coursework for course ${courseId}`)
        // let courseWork = {
        //     title: 'Frankenstein',  
        //     description: 'Read the article about bringing the dead to life.',  
        //     materials: [  
        //        {'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' }}
        //     ],  
        //     workType: 'ASSIGNMENT'
        // }
        gapi.client.classroom.courses.courseWork.create({
            courseId,
            title: 'Frankenstein',  
            description: 'Read the article about bringing the dead to life.',  
            materials: [  
               {'link': { 'url': 'https://docs.google.com/document/d/16f3UV7DSJ3mbHM25Ay7Kx9xgYYeefdHOg_el6kAA6Rw/edit?usp=sharing' }}
            ],  
            workType: 'ASSIGNMENT'
        })
        .then(r => {
            console.log(`classroom coursework create result`, r);
            /*
assigneeMode:"ALL_STUDENTS"associatedWithDeveloper:truecourseId:"17021267121"creationTime:"2018-09-19T09:39:41.540Z"creatorUserId:"110032523464157574066"
description:"Read the article about bringing the dead to life."id:"17020506164"materials:[{…}]state:"DRAFT"submissionModificationMode:"MODIFIABLE_UNTIL_TURNED_IN"
title:"Frankenstein"updateTime:"2018-09-19T09:39:40.860Z"workType:"ASSIGNMENT"

materials: array
            driveFile {alternateLink, id, thumbnailUrl, title}
            */
//         })
//         .catch(e => {
//             console.error(`classroom coursework create error`, e);
//         })
//         return null;
//         // this.setState({
//         //     courses: null
//         // })
//     }else{
//         //list courses, get teacher to select course
//         gapi.client.classroom.courses.list()
//         .then(r => {
//             console.log(`classroom courses list result`, r);
//             //r.result.courses is array
//                 //id, name, section, creationTime, courseState, ownerId, updateTime, alternateLink, calendarId, courseGroupEmail
//             // this.setState({
//             //     courses: r.result.courses
//             // })
//             return r.result.courses;
//         })
//         .catch(e => {
//             console.error(`classroom courses list error`, e);
//         })
//         //call again with courseId
//     }
// }
