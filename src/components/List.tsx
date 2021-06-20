
// define props type 
interface IProps{
  people:{
    name:string
    age:number
    url:string
    note?:string
  }[]
  }

// mention what kind of props is expecting
function List(props:IProps) {
  return (
    <div>
      I am a list
    </div>
  )
}

export default List
