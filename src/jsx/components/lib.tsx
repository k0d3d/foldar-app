/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import {keyframes} from '@emotion/react'
import {Dialog as ReachDialog} from '@reach/dialog'
import {FaSpinner} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'black',
  color: 'white',
  border: `1px solid grey`,
  cursor: 'pointer',
})

const BookListUL = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridGap: '1em',
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'loading',
}

const buttonVariants = {
  primary: {
    background: 'indigo',
    color: 'black',
  },
  secondary: {
    background: 'gray',
    color: 'white',
  },
}
const Button = styled.button(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  
)

const inputStyles = {
  border: '1px solid #f1f1f4',
  background: '#f1f2f7',
  padding: '8px 12px',
}

const Input = styled.input({borderRadius: '3px'}, inputStyles)
const Textarea = styled.textarea(inputStyles)

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',

})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

function FullPageSpinner() {
  return (
    <div
      css={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </div>
  )
}

const WebLink = styled(Link)({
  color: 'indigo',
  ':hover': {
    color: 'darkblue',
    textDecoration: 'underline',
  },
})

const errorMessageVariants = {
  stacked: {display: 'block'},
  inline: {display: 'inline-block'},
}

function ErrorMessage({error, variant = 'stacked', ...props}) {
  return (
    <div
      role="alert"
      css={[{color: 'red'}, errorMessageVariants[variant]]}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        css={[
          {whiteSpace: 'break-spaces', margin: '0', marginBottom: -5},
          errorMessageVariants[variant],
        ]}
      >
        {error.message}
      </pre>
    </div>
  )
}

function FullPageErrorFallback({error}) {
  return (
    <div
      role="alert"
      css={{
        color: 'red',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Uh oh... There&rsquo;s a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
      <a style={{color:"blue"}} href="/login">Refresh Application State</a>

    </div>
  )
}

export {
  FullPageErrorFallback,
  ErrorMessage,
  CircleButton,
  BookListUL,
  Spinner,
  Button,
  Input,
  Textarea,
  Dialog,
  FormGroup,
  FullPageSpinner,
  Link,
}
