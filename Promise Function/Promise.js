 const promise = require('promise')

// let p = new promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
//     })

// // p.then((message) => {
// //     console.log(message)
// // }).catch((message) => {
// //     console.log('This is in the catch ' + message)
// // });


// const myPromise = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     if (true) {
//         resolve('response.json()')
//     } else {
//         reject('Failed')
//     }
// })

// myPromise.then((data) => {
//     console.log(data)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// }   )


// New EXAMPLE


function getApiData() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          else {
            reject('Server returned ${response.status} : ${response.statusText}');
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Using the promise-based API call
  getApiData()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the API call:', error);
    });





// Get post using promise

//function to get posts
function getposts(){ 

    //return a new promise 
    return new Promise((resolve, reject)=>{ 

        //fetch the posts
        fetch('https://jsonplaceholder.typicode.com/posts') 
        
//if the response is ok then return the response in json format
        .then((response)=>{
            if(response.ok){
                return response.json()
            }

//else reject the response
            else{
                reject('Server returned ${response.status} : ${response.statusText}')
            }
        })

//then return the data in json format 
        .then(data=>{
            resolve(data)
        })

//catch the error
        .catch(error=>{
            reject(error)
        })
    })
}

//call the function
getposts()

//then return the data
.then(data=>{
    //convert the data into json format
    const responseObject = JSON.parse(JSON.stringify(data));
    //map the data and return the title
    const posts = responseObject.map((post)=>{
        return post.title
    })
    //print the title
    console.log(posts)
})
.catch(error=>{
    console.log('There was a problem with the API call:', error)
})
  