import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
  
  const { noticias } = useNoticias()
  
  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant='h3'
        component={'h2'}
      >
        Últimas Notícias
      </Typography>

      <Grid
        container
        spacing={2}
      >
        {
          noticias.map( noticia => (
            <Noticia 
              key={noticia.url}
              noticia={noticia}
            />
          ))
        }
      </Grid>

      <Stack 
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{
          marginY: 5
        }}
      >
        <Pagination count={10} color='primary' />
      </Stack>
    </>
  )
}

export default ListadoNoticias