import classes from './styles.module.scss'

export interface IHelloWorld {
  text: string
}

export const HelloWorld = ({ text }: IHelloWorld) => {
    return <div className={classes.text}>This is a new file: {text}</div>
}