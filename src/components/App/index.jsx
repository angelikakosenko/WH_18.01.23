

import User from '../Users';
import style from './style.module.css';

function App() {

  const users = [
    {id: 1, firstname: 'Oleg', lastName: 'Khutorianskiy', age: 24, region: 'Germany'},
    {id: 2, firstname: 'Daria', lastName: 'Serytsia', age: 23, region: 'Germany'},
    {id: 3, firstname: 'Hloya', lastName: 'Grays-Morez', age: 27, region: 'USA'},
    {id: 4, firstname: 'Srgey', lastName: 'Gulevatiy', age: 38, region: 'Ukraine'},
    {id: 5, firstname: 'Maxim', lastName: 'Bondarenko', age: 25, region: 'Ukraine'},
    {id: 6, firstname: 'Benedict', lastName: 'Kamberbetch', age: 41, region: 'Great Britain'}
  ];

 
  
  return (
    <div className={style.container}>
      { 
        users.map((user) => <User key={user.id} {...user}/>)
      }
    </div>
  );
}

export default App;
