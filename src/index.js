import ReactDom from "react-dom";
import React from "react";
import "./index.css" 

const Books = [
  {name:"firstbook", img:"face.jpg", title:"Man Knows Nothing", author:"James Clover"},

  {name:"secondbook", img:"face2.jpg", title:"Man Knows Nothing", author:"Mark Benson"},

  {name:"thirdbook", img:"face3.jpg", title:"Man Knows Nothing", author:"Natalia Williams"},

  {name:"fourthbook", img:"face4.jpg", title:"Man Knows Nothing", author:"James Clover"},

  {name:"fifthbook", img:"face5.jpg", title:"Man Knows Nothing", author:"James Clover"},

  {name:"sixthbook", img:"face6.jpg", title:"Man Knows Nothing", author:"Mellerein"},

  {name:"seventhbook", img:"face7.jpg", title:"Man Knows Nothing", author:"James Clover", height:"250px"},

  {name:"eightbook", img:"face8.jpg", title:"Man Knows Nothing", author:"James Clover",height:"250px" }
] 
function BookList() {
  return (
    <section className="booklist">
      {Books.map((book) =>{
         return(
           <Book key= {book.name} {...book}></Book>
         )  })}
         <div className = "footer" ></div>
    </section>
  );
}


const Book = ({img, author, title, height}) => {
//attribute, eventHandler
//onClick, onMouseOver
  const clickHandler = ((e) => {
    console.log(e);
    console.log(e.target)
  })
  const getAuthor = ((author) => 
    console.log(author))
  return (
    <article className="book" onClick = {()=>{
      console.log(title);
    }}>

      <img src={img} width="200px" alt="Not Visible" height = {height} />
      <h6>{title} </h6>
      <h5>{author}</h5>
      <button className= "btn btn-outline-dark" onClick = {clickHandler}>Add</button>
      <button className= "btn btn-outline-danger" onClick = {() => getAuthor(author)}>Delete</button>
      {/*{children}*/}

      {/*<p>{props.job}</p>
      <p>{props.price}</p>*/}
    </article>
)}


  //const author = "James Clover"
  //const img = "face.jpg";
  //const Title = <h6>Man knows nothing</h6>;
  //const Author = <h5><em>{author}</em></h5>;
   //{author.tolowercase()} - possible
//const Image = () => <img src={img} alt="No" width="150px" />; 

//above better or
//const BookList = () => {
//  return React.createElement('h1', {}, 'hello World')
//}

ReactDom.render(<BookList />, document.getElementById("root"))