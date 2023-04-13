import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { Table } from 'react-bootstrap';

import './CSVUploader.css';

const CSVUploader = () => {
    const [csvData, setCsvData] = useState([]);

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
                  setCsvData(results.data);
                },
              });
            };
          
            reader.readAsText(file);
        },
    });

    console.log({csvData});
    
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
            {csvData.length > 0 && (
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    {Object.keys(csvData[0]).map((header, index) => (
                    <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {Object.values(row).map((value, valueIndex) => (
                        <td key={valueIndex}>{value}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </Table>
            )}
        </div>
    );
};

export default CSVUploader;  