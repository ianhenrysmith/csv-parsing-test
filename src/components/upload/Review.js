import React from 'react';
import { Table } from 'react-bootstrap';

function Review({csvData}) {
    return (
        <div>
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
}

export default Review;