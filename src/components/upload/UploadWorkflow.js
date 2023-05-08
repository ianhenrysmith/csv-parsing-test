import React, { useState } from 'react';

import Review from './Review';
import EditData from './EditData';
import Submit from './Submit';
import UploadArea from './UploadArea';
import MapColumns from './MapColumns';

function UploadWorkflow() {
    const [step, setStep] = useState(1);
    const [mappedData, setMappedData] = useState([]);
    const [parsedData, setParsedData] = useState([]);
    const [mappedColumns, setMappedColumns] = useState([]);
    const [csvData, setCsvData] = useState([]);

    const gustoColumns = [
        "first_name",
        "last_name",
        "ssn",
        "gusto_employee_id",
        "title",
        "regular_hours",
        "overtime_hours",
        "double_overtime_hours",
        "bonus",
        "commission",
        "paycheck_tips",
        "cash_tips",
        "correction_payment",
        "reimbursement",
        "personal_note",
    ]

    console.log({parsedData})

    return (
        <div>
            {step === 1 && (
                <UploadArea
                csvData={csvData}
                setCsvData={(uploaded) => {
                    setParsedData(uploaded);
                    setMappedData(uploaded.data);
                    setStep(2);
                }}
                />
            )}
            {step === 2 && (
                <MapColumns
                sourceColumns={parsedData?.meta?.fields}
                gustoColumns={gustoColumns}
                onComplete={(columns) => {
                    setMappedColumns(columns);
                    setStep(3);
                }}
                />
            )}
            {step === 3 && (
                <EditData
                data={mappedData}
                onComplete={(edited) => {
                    setMappedData(edited);
                    setStep(3);
                }}
                />
            )}
            {step === 3 && (
                <Review
                data={mappedData}
                onComplete={(edited) => {
                    setStep(4);
                }}
                />
            )}
            {step === 4 && (
                <Submit
                data={mappedData}
                onReset={() => {
                    setCsvData([]);
                    setMappedData([]);
                    setStep(1);
                }}
                />
            )}
        </div>
      );
      
}

export default UploadWorkflow;
