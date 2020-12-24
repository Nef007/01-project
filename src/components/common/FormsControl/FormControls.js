import React from 'react'
import styles from './FormControls.module.css'








 export  const Textarea = (props) => {
     const {input, meta, child, element, ...restprops} = props
    return <FormControl{...props}><textarea {...input} {...restprops}/> </FormControl>
}

export  const Input = (props) => {
    const {input, meta, child, element, ...restprops} = props
    return <FormControl{...props}><input {...input} {...restprops}/> </FormControl>
}

export  const FormControl = ({input, meta, child, element, ...props}) => {

const hasError = meta.touched && meta.error;
    return (

        <div className={styles.formControl + " " + (hasError ? styles.error : "" )}>
            <div> {props.children}</div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}