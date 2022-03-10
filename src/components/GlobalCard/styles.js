import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      'linear-gradient(320deg, rgba(57,172,232,1) 0%, rgb(232 232 232) 50%, rgba(255,221,141,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '20px',
    padding: '20px',
    alignItems: 'flex-start',
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
  },
}))

export default useStyles
