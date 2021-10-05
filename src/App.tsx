import * as C from './App.styles';
import { useState} from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = () => {
  const [ list, setList ] = useState<Item[]>([
    {id: 0, name: 'Comprar o pão da padaria', done: false},
    {id: 1, name: 'Comprar um bolo na padaria', done: false},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  return (
    <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          {
            /*Area de adicionar nova tarefa*/
            <AddArea onEnter={handleAddTask} />
          }

          {
            /*Area de exibir tarefas */
            list.map((item,index) => (
              <ListItem key={index} item={item} />
            ))
            
          }

          

        </C.Area>
    </C.Container>
  );
}

export default App;