// //postApp
// var backgroundImg;
// function post(){
//     var title = document.getElementById("title")
//     var description  = document.getElementById("description")
    
// if(title.value.trim() && description.value.trim()){
//     var post = document.getElementById("post")
//     post.innerHTML+=`
//      <div class="card p-2 mb-2">
//                     <div class="card-header">
//                       <em>@post</em>
//                     </div>
//                     <div style="background-image: url(${backgroundImg})" class="card-body">
//                       <blockquote class="blockquote mb-0">
//                         <p>${title.value}</p>
//                         <footer class="blockquote-footer">${description.value}</footer>
//                       </blockquote>
//                     </div>
//                   </div>
//     `
//     title.value =""
//     description.value = ""
//   }else{
//     Swal.fire({
//       title: "Empty Post",
//       text: "Can't publish post without Title or Description",
//       icon: "question"
//     });  }
// }
// function selectImg(src){
//   backgroundImg =src
//   var bgImg = document.getElementsByClassName('bg-img')
//   // for(var i=0; i<bgImg.length; i++){
//   //   bgImg[i].classList.remove('selectedImg')
//   // } 
//   for(var i=0; i<bgImg.length; i++){
//     bgImg[i].className ="bg-img"
//   } 
//   event.target.className +=" selectedImg"
// }
// // Function to filter posts based on search input and selected category
// function filterPosts() {
//     const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Search term
//     const selectedCategory = document.getElementById('category').value; // Selected category
//     const posts = document.querySelectorAll('.post-card'); // All posts

//     posts.forEach(post => {
//         const title = post.querySelector('.post-title').textContent.toLowerCase();
//         const description = post.querySelector('.post-description').textContent.toLowerCase();
//         const category = post.querySelector('.post-category').textContent;

//         // Check if the post matches the search term and the selected category
//         const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
//         const matchesCategory = selectedCategory === 'All' || category === selectedCategory;

//         if (matchesSearch && matchesCategory) {
//             post.style.display = 'block'; // Show post
//         } else {
//             post.style.display = 'none'; // Hide post
//         }
//     });
// }
// Function to handle the post creation
function post() {
  // Get the title and description input values
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  // Check if the title and description are provided
  if (title === "" || description === "") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Both title and description are required!',
    });
    return; // Exit if inputs are empty
  }

  // Create the post content
  const postContainer = document.getElementById("post");

  // Create a new div for the post
  const newPost = document.createElement("div");
  newPost.classList.add("card");
  newPost.classList.add("p-3");
  newPost.classList.add("mb-3");

  // Set the post's HTML content
  newPost.innerHTML = `
    <h4>${title}</h4>
    <p>${description}</p>
    <p><small>Posted just now</small></p>
  `;

  // Add the new post to the post container
  postContainer.appendChild(newPost);

  // Clear the input fields after posting
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  // Optionally, show a success alert
  Swal.fire({
    icon: 'success',
    title: 'Post Created!',
    text: 'Your post has been created successfully.',
  });
}
