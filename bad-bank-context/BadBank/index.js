import { Route } from 'react-router-dom';

const App = () => {
  return (

    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Ashling',email:'AshlingStruve85@gmail.com',password:'secret123',balance:100}]}}>              
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);