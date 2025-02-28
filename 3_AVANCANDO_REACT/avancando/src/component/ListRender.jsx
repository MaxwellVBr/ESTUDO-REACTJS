import React from 'react'

const ListRender = () => {

    const [list] = React.useState(["Pedro", "Matheus", "João", "Gabriel"])
    const [users, setUsers] = React.useState([
        {id : 1, nome: "jojo", age: 31},
        {id : 2, nome: "gojo", age: 18},
        {id : 3, nome: "jeje", age: 22},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
    
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => randomNumber !== user.id);
        });
      };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.nome} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>

        
    </div>
  )
}

export default ListRender