import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Snackbar,
  IconButton,
  Divider,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@material-ui/core'

import resultCalculate from './resultCalculate'


const useStyles = makeStyles(() => ({
  root: {},
  formControl: {
    minWidth: 120,
  },
}))

const Calculate = (props) => {
  const [snackPack, setSnackPack] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [messageInfo, setMessageInfo] = React.useState(undefined)
  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false)
    }
  }, [snackPack, messageInfo, open])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  const handleExited = () => {
    setMessageInfo(undefined)
  }


  const { className, ...rest } = props

  const classes = useStyles()

  const [values, setValues] = useState({
    count: '',
    type: ''
  })

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }


  const onCalculate = (e) => {
    e.preventDefault()
    const result = resultCalculate(values)
    const { zakyat = '', zakyatAdditional = '' } = result
    const and = (zakyat && zakyatAdditional) ? 'and' : ''
    let message = `${zakyatAdditional} ${and} ${zakyat}`
    if (message.length === 2) {
      message = 'You dont need to pay'
    }
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }])
  }

  return (
    <>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form onSubmit={onCalculate}>
          <CardHeader
            subheader="Calculate Zakyat"
            title="Zakyat"
          />
          <Divider />
          <CardContent>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Type </InputLabel>
              <Select
                name="type"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={values.type}
                required
                onChange={handleChange}
                label="type"
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value="cow">Cow</MenuItem>
                <MenuItem value="camel">Camel</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Count"
              name="count"
              onChange={handleChange}
              style={{ marginTop: '1rem' }}
              type="number"
              required
              value={values.confirm}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="outlined"
              onClick={onCalculate}
            >
              calculate
            </Button>
          </CardActions>
        </form>
      </Card>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={(
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              okey brother
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
     )}
      />
    </>
  )
}

Calculate.propTypes = {
  className: PropTypes.string
}

export default Calculate
