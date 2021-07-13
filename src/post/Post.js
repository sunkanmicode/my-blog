import './post.css'

export default function Post() {
    return (
        <div className='post'>
           <img className='postImg' 
                src='https://image.winudf.com/v2/image/Y29tLmxheWxhbGkuQmVhdXRpZnVsb2NlYW53YWxsX3NjcmVlbl8xX2VoOHV5N3Ry/screen-1.jpg?fakeurl=1&type=.jpg' alt='post pictures'
           />
           <div className='postInfo'>
               <div className='postCats'>
                   <span className='postCat'>Music</span>
                   <span className='postCat'>Life</span>
               </div>
               <span className='postTitle'>
                   lorem ispum dolor sit amet
               </span>
               <hr />
               <span className='postDate'>1 hour ago</span>
           </div>
           <p className='postDesc'>
           As you begin to work more extensively with JavaScript, you will be likely to find that there are cases where you are reusing identical JavaScript code on multiple pages of a site.You are not restricted to be maintaining identical code in multiple HTML files. The script tag provides a mechanism to allow you to store JavaScript in an external file and then include it into your HTML files.Here is an example to show how you can include an external JavaScript file in your HTML code using script tag and its src attribute.
           As you begin to work more extensively with JavaScript, you will be likely to find that there are cases where you are reusing identical JavaScript code on multiple pages of a site.You are not restricted to be maintaining identical code in multiple HTML files. The script tag provides a mechanism to allow you to store JavaScript in an external file and then include it into your HTML files.Here is an example to show how you can include an external JavaScript file in your HTML code using script tag and its src attribute.
           </p>
        </div>
    )
}
