import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Components
import Home from './Pages/Home/Home';
import Followers from './Pages/Followers/Followers';
import Repos from './Components/Custom/Repos/Repos';
//Layout
import MainLayout from './Layouts/MainLayout/MainLayout';

//Styles
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route path="/" exact>
            <Home />
          </Route>
    
          <Route path="/followers/:user" exact>          
            <Followers /> 
          </Route>
         
          <Route path="/repos/:user" exact>
            <Repos />
          </Route>

          
        </MainLayout>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
