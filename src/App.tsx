 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HowToUse from "./pages/HowToUse";
 
 
const App = () => (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
           <Route path="/HowToUse" element={<HowToUse />} />
        </Routes>
      </BrowserRouter>
 );

export default App;
