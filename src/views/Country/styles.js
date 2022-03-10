import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMain: {
    width: 'fit-content',
    background:
      'linear-gradient(320deg, rgba(57,172,232,1) 0%, rgb(232 232 232) 50%, rgba(255,221,141,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '20px',
    padding: '20px',
    alignItems: 'flex-start',
  },
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  boxData: {
    margin: '5px 0px',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#ebebeb52',
    color: 'black',
  },
}))

export default useStyles
