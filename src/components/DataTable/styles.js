import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '20px',
    minHeight: '55vh',
    '& .css-ypofq1-MuiDataGrid-toolbarContainer': {
      [theme.breakpoints.down(724)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    '& .css-1t5wrdm-MuiDataGrid-filterForm': {
      [theme.breakpoints.down(724)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },
}))

export default useStyles
