import { useState , useEffect} from "react";
import Bloglist from "./Blog_list";
import useFetch from "./useFetch";

const Home = () => {
  
  
  // const [name , setName] = useState("mario")
  // const [age , setAge] = useState(25)
  // const handleClick = () => {
  //   setName('yas')
  //   setAge(35)
  // };

  // const [name , setName] =  useState(null)
  

//  const handleDelete = (id)=>{
//   const newBlog = blogs.filter(blog=>blog.id !== id) ;
//   setBlogs(newBlog);
//  }


 const {data:blogs ,ispending , error} = useFetch('http://localhost:8000/blogs')

 
  

  return (
    <div className="home">
          {error && <div>{error}</div>}
          {ispending && <div>Loading...</div>}
         {blogs && <Bloglist blogs = {blogs} title = {"All Blogs"} />}
         {/* <Bloglist blogs = {blogs.filter((blog)=>blog.author ==='Mike')} title = {"Mike's Blog"}/>
         <button onClick={()=>{setName("Luiji")}}>Change name</button>
         <p>{name}</p> */}
       {/* <p>{name} is {age} years old </p>
      <button onClick={handleClick}>Click me</button>  */}
      </div>
  );
};

export default Home;

// import { useState } from "react";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   return (
//     <div className="home">
//       {blogs.map(blog => (
//         <div className="blog-preview" key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//         </div>
//       ))}
//     </div>
//   );
// }
 
// export default Home;
