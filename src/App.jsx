

import Header from './components/Header'
import Card from './components/Card'
import data from './assets/dataL'

function App() {
  const cards = data.map(item => {
    return (
        <Card
          title={item.title}
        coverImg={item.coverImg}
        description={item.description}
        />
    )
})    

  return (
    <>
  
    
    <Header/>
    {cards}

          </> 
  )
}

export default App
