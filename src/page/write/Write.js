import "./write.css"

export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg' 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2r1MxzDiHSDYyESETkjwWqEUTq5aawAVVeGYf3QSLn9Q3KRi8FZuU61Kt3a-LwXBua0&usqp=CAU' alt='picture'
            />
            <form className='writeFrom'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                        <input type='file' id='fileInput'  style={{display: "none"}} />
                        <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
                    </div>
                    <div className='writeFormGroup'>
                        <textarea placeholder='Tell your story ...'
                            type='text' className='writeInput writeText'
                        ></textarea>
                    </div>
                        <button className='writeSubmit'>
                            Publish
                        </button>
            </form>
        </div>
    )
}
