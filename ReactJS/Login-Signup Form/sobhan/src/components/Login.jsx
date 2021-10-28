import React from "react";
import css from "./login.module.css";

const Login = () => {
  return (
    <>
      <div className={css.login_bg}>
        <section className={css.container}>
          <section className={css.maincontainer}>
            <div className={`${css.half} ${css.left}`}></div>
            <div className={`${css.half} ${css.right}`}>
              <form className={css.form}>
                <header className={css.form_header}>
                  <h5 className={css.welcome}>Welcome</h5>
                  <h2>Sign in Now</h2>
                </header>
                <main className={css.form_main}>
                  <div className={css.email}>
                    <label htmlFor="Email address">Email Address</label>
                    <input type="text" placeholder="email@example.com" />
                  </div>
                  <div className={css.password}>
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      className={css.pass_ip}
                      placeholder="Enter Password"
                    />
                  </div>
                  <button className={css.login_btn}>
                    Login
                  </button>
                </main>
                <footer className={css.form_footer}>
                  <div>
                    <span className={css.dull}>Dont Have an account?</span>
                    <a href="/" className={css.register_link}>
                      Register
                    </a>
                  </div>
                </footer>
              </form>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Login;
