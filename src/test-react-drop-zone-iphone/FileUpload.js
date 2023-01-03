import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { isMobile } from 'react-device-detect';

const FileUpload = () => {

    const [ droppedFile, setDroppedFile] = useState('');

    const onDrop = async(droppedFiles) => {
        if(droppedFiles) {
            console.log("dropped files", droppedFiles.length);
            setDroppedFile(JSON.stringify(droppedFiles));
        }
    }

    const { getRootProps, getInputProps, open } = useDropzone(
        {   noClick: true, onDrop,
            accept: {'image/*': ['.jpeg', '.jpg', '.png', '.gif']},
        });



    return(<>
                <h1>upload documents</h1><br/>
        <div id="dropzone"
            {...getRootProps()}
            styleName={{border: '1px solid black'}}>
                <input { ...getInputProps()} />

            <br/>
            <button type="button" onClick={open}>
                Browse Files
            </button>

            <br/>
            <br/>
            { JSON.stringify(droppedFile)}
            <br/>
            { JSON.stringify(isMobile)}

            </div>

        </>)
}
export default FileUpload;