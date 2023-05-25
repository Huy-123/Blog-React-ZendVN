import './login.css'
import { Link, useHistory } from "react-router-dom"
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { actLoginAsync } from '../../store/user/actions'

function LoginPage() {

  const dispatch = useDispatch();

  const token = useSelector((state) => state.USER.token);

  const history = useHistory();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function
  function handleChangeValue(e){
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  function handleSubmit (e){
    e.preventDefault();
    dispatch(actLoginAsync(formData)).then((res) => {
      if(res.ok){
        history.push('/')
      }else{
        alert(res.error)
      }
    })
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input 
                  label="Tên đăng nhập" 
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
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

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng nhập</Button>
                  <Link to="/register">Đăng ký</Link>
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

export default LoginPage