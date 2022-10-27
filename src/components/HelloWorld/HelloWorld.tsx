import classes from './styles.module.scss'

export interface IHelloWorld {
  name: string
}

const HelloWorld = ({ name }: IHelloWorld) => {
    return <div className={classes.greeting}>Hi: {name}</div>
}

export default HelloWorld;