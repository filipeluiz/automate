'use strict'

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = ({ name, href }) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href={href}>
        { name }
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>    
  )
}

export default Copyright
