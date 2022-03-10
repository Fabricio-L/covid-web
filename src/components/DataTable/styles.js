import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .css-ypofq1-MuiDataGrid-toolbarContainer': {
      [theme.breakpoints.down(724)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    '& .MuiToolbar-root': {
      [theme.breakpoints.down(724)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
}))

export default useStyles
