const homeworkCreate = function (box, callBack) {
    setTimeout(() => {
        console.log("ok ok im going to do my " + box + " homework")
        callBack()
    }, 1000)
}
const readyWithHomework = function () {
    console.log("Look dad ive finnished my homework")
}

homeworkCreate("math", readyWithHomework)



































































































// const posts = [
//     { title: 'post one', body: 'this is post 1' },
//     { title: 'post two', body: 'this is post 2' },
//     { title: 'post three', body: 'this is post 3' },
//     { title: 'post four', body: 'this is post 4' }
// ]


// function getPosts() {
//     setTimeout(() => {
//         let outPut = '';
//         posts.forEach(post => {
//             outPut += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = outPut;
//     }, 1000)
// };

// function creatPost(newPost, callBackFunction) {
//     setTimeout(() => {
//         posts.push(newPost)
//         callBackFunction()
//     }, 2000)
// }


// creatPost({ title: 'post mamba numba five', body: 'this is post 5' }, getPosts);