import React from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

import './UploadArea.css';

const UploadArea = ({ setCsvData }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'text/csv',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
          
            reader.onload = () => {
              const csv = reader.result;
              Papa.parse(csv, {
                header: true,
                complete: (results) => {
                  setCsvData(results);
                },
              });
            };
          
            reader.readAsText(file);
        },
    });
    
    return (
        <div>
            <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the CSV file here...</p>
            ) : (
                <p>Drag and drop a CSV file here, or click to select a file</p>
            )}
            </div>
        </div>
    );
};

export default UploadArea;  