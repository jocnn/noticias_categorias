const Noticia = ({ noticia }) => {
  
  console.info(noticia)
  
  return (
    <>
      <h1>{noticia.title}</h1>
    </>
  )
}

export default Noticia