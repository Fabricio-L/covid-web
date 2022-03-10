import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  rootHeader: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
  },
  rootFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: 'black',
    background:
      'linear-gradient(320deg, rgba(57,172,232,1) 0%, rgb(232 232 232) 50%, rgba(255,221,141,1) 100%)',
  },
  imgFooter: {
    width: '40px',
    margin: '10px',
  },
})

export default useStyles
