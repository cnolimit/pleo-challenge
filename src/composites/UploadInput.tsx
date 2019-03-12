import React, { useCallback } from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'
import ConfirmedIcon from '../assets/accept.svg'
import ReceiptAddIcon from '../assets/file.svg'
import Spinner from '../components/Spinner'

interface IDropzone {
  disabled: boolean
  fetching: boolean
  onSubmit: (file: string) => void
}

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`

export default (props: IDropzone) => {
  return (
    <Dropzone onDrop={(acceptedFiles: any) => props.onSubmit(acceptedFiles[0])}>
      {({ getRootProps, getInputProps }: { getRootProps: any; getInputProps: any }) => (
        <Wrapper {...getRootProps()}>
          <input
            {...getInputProps()}
            disabled={props.disabled}
            accept='image/png, image/jpg, image/gif, image/jpeg'
          />
          {props.fetching ? (
            <Spinner />
          ) : (
            <img width='30px' height='30px' src={props.disabled ? ConfirmedIcon : ReceiptAddIcon} />
          )}
        </Wrapper>
      )}
    </Dropzone>
  )
}
