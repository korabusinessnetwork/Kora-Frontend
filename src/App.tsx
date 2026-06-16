import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { SaleProvider } from "./contexts/SaleContext";

function App() {
    return (
        <SaleProvider>
            <MainLayout>
                <Dashboard />
            </MainLayout>
        </SaleProvider>
    );
}

export default App;