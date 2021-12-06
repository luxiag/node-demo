import {useAuth} from "context/auth-context";
import {Unauthenticated} from "./pages/unauthenticated";
import {Authenticated} from "pages/Authenticated"
import {ErrorBoundary} from "react-error-boundary";
import {FullPageErrorFallback} from 'components/lib'
function App() {
  const {user} = useAuth()
  return (
    <div className="App">
  <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
    {user?<Authenticated />:<Unauthenticated />}

  </ErrorBoundary>

    </div>
  );
}

export default App;
