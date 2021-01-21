import { Button, Card, Checkbox, Container, FormControlLabel, FormGroup, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import AppBar from './components/Nav'
import UpdateModal from './components/UpdateModal'
const App = () => {
  const [allTask, setAllTask] = useState([{ task: 'This is New task', completed: true, id: Date.now() }])
  const [activeUpdateForm, setActiveUpdateForm] = useState(false)
  const create = (createInfo) => {
    if (!createInfo.task) {
      return alert('Task Name is required')
    }
    setAllTask([...allTask, createInfo])
    console.log(allTask)
  }
  const deleteTask = id => {
    let eTask = allTask
    let dlTask = eTask.findIndex(el => el.id === id)
    let upTask = eTask.splice(dlTask, 1)
    console.log(upTask)
    console.log(eTask);
    setAllTask([...eTask])
  }
  const updateFunction = (el) => {
    console.log(el)
    let allT = allTask

    let dlTask = allT.findIndex(single => single.id ===el.id)
    allT[dlTask].completed = el.completed
    allT[dlTask].task = el.task
    setAllTask([...allT])
    console.log(allT)
  }
  return (
    <div>
      <AppBar createFunction={create} />
      <Container>
        <div className="row mt-5">
          {
            allTask.map((sTask => {
              return (
                <div className="col-md-4 mb-4">
                  <Card>
                    <div className="p-5">
                      <h3> {sTask.task}</h3>
                      <FormGroup>
                        <FormControlLabel
                          label="Get Python black  belt"
                          control={<Checkbox checked={sTask.completed} name="Completed" />}
                        />
                      </FormGroup>
                      <div className="p-3"></div>
                      <div className="d-flex">
                        <UpdateModal el={sTask} updateFunction={updateFunction} />
                        {/* <Button size="small" variant="contained" onClick={() =>{setActiveUpdateForm(!activeUpdateForm)}}  style={{ marginRight: '30px' }} color="primary" > Edit </Button> */}
                        <Button size="small" variant="contained" color="secondary" style={{ marginLeft: '30px' }} onClick={() => deleteTask(sTask.id)} > Delete </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            }))
          }
        </div>
      </Container>
    </div>
  )
}

export default App
