
import './App.css';
import { useState } from "react"
import LikedPhotos from './Components/LikedPhotos';
import DislikedPhotos from './Components/DislikedPhotos';
import Container from './Components/Container';

function App() {
  const photos = [
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60','https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
'https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60']
  const [allPhotos, setAllPhotos] = useState(photos)
  const [likes, setLikes] = useState([])
  const [dislikes, setDisLikes] = useState([])
  
  
//click on the like button and set to likes state then remove the picture from allphotos state!
  const handleLikes = (src) =>{
    setLikes([... likes, src]);

    const remainingPhotos = allPhotos.filter((filterItem)=>{
      return filterItem !== src
    })

    setAllPhotos(remainingPhotos)
  }
  const handleDislikes = (src) =>{
    setDisLikes([...dislikes, src]);

    const remainingPhotos = allPhotos.filter((filterItem)=>{
      return filterItem !== src
    })

    setAllPhotos(remainingPhotos)
  }


  return (
    <div className="App">
      <Container
       allPhotos={allPhotos}
       handleLikes={handleLikes}
       handleDislikes={handleDislikes}
       title = "All Photos"
      />
      <LikedPhotos
       likes={likes}
       title = "Likes"/>
      <DislikedPhotos
       dislikes={dislikes}
       title = "Dislikes"
      />

    </div>
  );
}


export default App;
