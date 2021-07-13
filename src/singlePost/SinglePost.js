import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                    <img className='singlePostImg' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2r1MxzDiHSDYyESETkjwWqEUTq5aawAVVeGYf3QSLn9Q3KRi8FZuU61Kt3a-LwXBua0&usqp=CAU"
                    alt="single post"
                />
                <h1 className='singlePostTitle'>
                    Lorem ispum Title.
                    <div className='singlePostEdit'>
                        <i class='singlePostIcon far fa-edit'></i> 
                        <i class='singlePostIcon far fa-trash-alt'></i> 
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author: <b>Safak</b>
                    </span>
                    <span className='singlePostDate'>
                        1 hour ago
                    </span>
                </div>
                <p className='singlePostDesc'>
                As you begin to work more extensively with JavaScript, you will be likely to find that there are cases where you are reusing identical JavaScript code on multiple pages of a site.You are not restricted to be maintaining identical code in multiple HTML files. The script tag provides a mechanism to allow you to store JavaScript in an external file and then include it into your HTML files.Here is an example to show how you can include an external JavaScript file in your HTML code using script tag and its src attribute.As you begin to work more extensively with JavaScript, you will be likely to find that there are cases where you are reusing identical JavaScript code on multiple pages of a site.You are not restricted to be maintaining identical code in multiple HTML files. The script tag provides a mechanism to allow you to store JavaScript in an external file and then include it into your HTML files.Here is an example to show how you can include an external JavaScript file in your HTML code using script tag and its src attribute.
                </p>

            </div>
        </div>
    )
}
