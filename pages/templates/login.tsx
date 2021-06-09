import { Button, Grid, TextField, InputAdornment, FilledInput, FormControl, InputLabel, Input } from '@material-ui/core'
import { EmailRounded, LockRounded } from '@material-ui/icons'
import LoginWrapper from 'styles/Login'

export interface LoginProps {
  
}

const Login: React.SFC<LoginProps> = () => {
  return (
    <LoginWrapper>
      <Grid container className="main-grid">
        <Grid item xs={12} sm={6} className="image-content">
          {/* <img src="https://images.pexels.com/photos/374697/pexels-photo-374697.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="brand" /> */}
        </Grid>
        <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" className="form-content">
          <div />
          <div className="form-wrapper">
            <Grid container justify="center">
              <img className="logo" src="/logo.png" alt="logo" />
            </Grid>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-amount">email</InputLabel>
              <Input
                id="standard-adornment-amount"
                onChange={() => console.log('a')}
                startAdornment={<InputAdornment position="start"><EmailRounded /></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-amount">senha</InputLabel>
              <Input
                id="standard-adornment-amount"
                onChange={() => console.log('a')}
                startAdornment={<InputAdornment position="start"><LockRounded /></InputAdornment>}
              />
            </FormControl>
            <div className="form-action">
              <Button color="primary" variant="contained">Acessar</Button>
              <Button>Cadastrar</Button>
            </div>
          </div>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button color="primary">Esqueceu sua senha?</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Entrar em contato com o suporte</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LoginWrapper>
  );
}

export default Login;