import "./write.css"

export default function Write() {
    return (
        <div className='write'>
            <form className='writeFrom'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='writeIcon fas fa-plus'></i>
                    </label>
                        <input type='file' id='fileInput'  style={{display: "none"}} />
                        <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
                    <div className='writeFormGroup'>
                        <textarea placeholder='Tell your story ...'
                            type='text' className='writeInput writeText'
                        ></textarea>
                    </div>
                        <button className='writeSubmit'>
                            Publish
                        </button>
                </div>
            </form>
        </div>
    )
}
