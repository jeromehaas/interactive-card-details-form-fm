import InteractiveCard from "components/03-organisms/interactive-card/interactive-card";
import { Provider as DataProvider } from "context/data/provider";

const App = () => {

  return (
		<DataProvider>
			<InteractiveCard />
		</DataProvider>	
  );

};

export default App;
