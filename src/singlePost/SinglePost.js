import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                    <img className='singlePostImg' 
                    src='https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
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
