import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({...formData , [name] : value})
  };

  const register = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
    console.log(formData);
    
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="text"
            name="confirmpassword"
            id="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={register}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
