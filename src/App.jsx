import { StepProvider } from "./hooks/context.hooks";
import Stepbar from "./components/stepbar/stepbar";
import Stepbox from "./components/stepbox/stepbox";
import Stepend from "./components/stepend/stepend";

const App = () => {
    return (
        <StepProvider>
            <main className="main">
                <section className="page flex">
                    <Stepbar />
                    <Stepbox />
                    <Stepend />
                </section>
            </main>
        </StepProvider>
    );
}

export default App;