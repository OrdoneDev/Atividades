import styles from './InputCustom.module.css'

function InputCustom(props){
    const {type, placeholder} = props

    return (
        <>
            <input className={styles.inputCustom} type={type} placeholder={placeholder} />
        </>
    )
}

export default InputCustom