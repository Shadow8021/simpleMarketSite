import {ReacNode} from 'react'

type ContenaireProps ={
  className?:string,
  children: ReacNode 
}
export default function Contenaire({children,className}: ContenaireProps) {
  return (
    <div className={`contenaire ${className}`}>{children}</div>
  )
}
