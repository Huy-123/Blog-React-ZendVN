import './input.css'
import cls from 'classnames'
import { useState } from 'react'
import IconSearch from '../IconSearch'

function Input({
  label,
  type = 'text',
  className,
  icon = <IconSearch />,
  name,
  handleChangeValue,
  ...restProps
}) {


  const [localType, setLocalType] = useState(type)

  function handleToggleShowPwd() {
    if (localType === 'password') {
      setLocalType('text')
    } else if (localType === 'text') {
      setLocalType('password')
    }
  }

  const classesIconPwd = cls('toggle-password', {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text'
  })
  const classesSearch = cls('input-search__input', className)

  if (type === 'search') {
    return (
      <div className="input-search">
        { icon }
        <input 
          className={classesSearch}
          type={localType}
          {...restProps}
        />
      </div>
    )
  }

  return (
    <div className="form-control">
      {/* { label && <label>{ label }</label> } */}
      { label && <h1>{ label }</h1> }
      { type === 'password' && (
        <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>
      ) }
      <input onChange={handleChangeValue} name={name} type={localType} className={className} {...restProps} />
    </div>
  )
}

export default Input