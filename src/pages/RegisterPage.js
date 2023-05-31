import './LoginPage/login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react'
import { actLoginAsync, actRegisterAsync } from '../store/user/actions'
import { useDispatch } from 'react-redux'

function RegisterPage() {

  const [formData,setFormData] = useState(
    {
      email: '',
      username: '',
      password: '',
      nickname: ''
  })

  const formDataLogin = {
    username: formData.username,
    password: formData.password
  }

  const dispatch = useDispatch()

  const history = useHistory()

   // Function
   async function handleChangeValue(e){
    const name = e.target.name;
    const value = e.target.value;
    await setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(actRegisterAsync(formData)).then((res)=>{
      if(res.ok){
        dispatch(actLoginAsync(formDataLogin)).then((res) => {
          if(res.ok){
            history.push('/')
          }else{
            alert(res.error)
          }
        })
      }else{
        alert(res.error)
      }
    })
  }

  if(localStorage.getItem('ACCESS_TOKEN')){
    history.push('/')
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input 
                  label="Nickname" 
                  placeholder="Nhập Nickname"
                  autoComplete="off"
                  name="nickname"
                  handleChangeValue={handleChangeValue}
                />
                <Input 
                  label="Tên đăng nhập" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  handleChangeValue={handleChangeValue}
                />
                <Input 
                  label="Email" 
                  placeholder="Nhập Email ..."
                  autoComplete="off"
                  name="email"
                  handleChangeValue={handleChangeValue}
                />
                <Input 
                  type="password" 
                  label="Mật khẩu" 
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  handleChangeValue={handleChangeValue}
                />
                <Input 
                  type="password" 
                  label="Xác nhận mật khẩu" 
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                  name="password"
                  handleChangeValue={handleChangeValue}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage