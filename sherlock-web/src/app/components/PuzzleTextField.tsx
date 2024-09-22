'use client';
import { TextField } from '@fluentui/react';
import { useState } from "react";

// type textFieldProps = {
//     updateSubmittedUrl: any
// }

export default function PuzzleTextField(/*props: textFieldProps*/) {
    const [submittedUrl, setSubmittedUrl] = useState('');

    function callOnChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, 
        newValue? : string): void {
        setSubmittedUrl(newValue!);
        console.log(newValue)
    }

    return (
    <TextField
        placeholder='Enter puzzle image url'
        onChange={callOnChange}
    />
    )
}