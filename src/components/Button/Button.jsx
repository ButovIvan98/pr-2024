import classes from './Buttons.module.css'

export default function Button({ children, isActive, ...props }) {
    console.log(classes)
    return (
        <button class="tablinks"
            {...props}
            //className={classes}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}
        >{children}
        </button>
    )
}

