```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import ProfileEditing from './components/ProfileEditing';
import PreferenceSetting from './components/PreferenceSetting';
import BrandAffiliation from './components/BrandAffiliation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register" component={UserRegistration} />
          <Route path="/login" component={UserLogin} />
          <Route path="/edit-profile" component={ProfileEditing} />
          <Route path="/preferences" component={PreferenceSetting} />
          <Route path="/affiliations" component={BrandAffiliation} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
```