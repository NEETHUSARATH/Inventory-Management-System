import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateItemGroup from "./Components/ItemGroup";
import AddItem from "./Components/NewItem";
import Editsdash from "./Components/ItemDash";
import AddInventoryAdjustment from "./Components/AddInventoryAdjustment";
import ShowInventory from "./Components/ShowInventory";
import AddCustomer from "./Components/AddCustomer";
import TotalCustomers from "./Components/TotalCustomers";
import EditCustomer from "./Components/EditCustomer";
import NewSalesOrder from "./Components/NewSalesOrder";
import AddPackages from "./Components/AddPackages";
import DeliveryChallans from "./Components/DeliveryChallans";
import AddVendor from "./Components/AddVendor";
import Allvendors from "./Components/AllVendors";
import Editvendor from "./Components/Editvendor";
import AddPurchase from "./Components/AddPurchase";
import VendorPay from "./Components/Vendorpay";
import Payments from "./Components/Payments";
import AddDeliveryChallan from "./Components/AddDeliveryChallan";
import DeliveryChallanDetails from "./Components/DeliveryChallanDetails";
import AllInvoices from "./Components/AllInvoices";
import PaymentsRecievded from "./Components/PaymentsRecievded";
import SalesReturns from "./Components/SalesReturns";
import ViewsalesReturns from "./Components/ViewsalesReturns";
import AddCreditNote from "./Components/AddCreditNote";
import Sidebar from "./Components/sidebar/Sidebar";
import Layout from "./Components/layout/Layout";
import Background from "./Components/Bg/Background"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar>
            <Layout>
            <Background/>
            </Layout>
            </Sidebar>
          }
        />
        
        <Route 
        path="/AddItem" 
        element={
          <Sidebar>
          <Layout>
          <AddItem />
          </Layout>
          </Sidebar>
        } 
        />

        <Route 
          path="/ItemGroup"
          element={
            <Sidebar>
            <Layout>
            <CreateItemGroup />
            </Layout>
            </Sidebar>
          }
        />

        <Route  path="/ItemDash" 
        element=
        {
          <Sidebar>
          <Layout>
          <Editsdash />
      </Layout>
      </Sidebar>
       
        } />

        <Route
          
          path="/Inventory/:id"
          element={
            <Sidebar>
          <Layout>
          <AddInventoryAdjustment />
      </Layout>
      </Sidebar>
         
        }
        />
        <Route  path="/InventoryList" element={
           <Sidebar>
           <Layout>
           <ShowInventory />
       </Layout>
       </Sidebar>
       
        } />
        <Route  path="/customer" element={
         <Sidebar>
         <Layout>
         <AddCustomer />
     </Layout>
     </Sidebar>
       
        } />
        <Route  path="/customers" element={
        <Sidebar>
        <Layout>
        <TotalCustomers />
    </Layout>
    </Sidebar>
        
        } />
        <Route  path="/editcustomer/:id" element={
           <Sidebar>
           <Layout>
           <EditCustomer />
       </Layout>
       </Sidebar>
       
        } />
        <Route  path="/sales" element={
          <Sidebar>
          <Layout>
          <NewSalesOrder />
      </Layout>
      </Sidebar>
        
        } />
        <Route  path="/shipment" element={
          <Sidebar>
          <Layout>
          <AddPackages />
      </Layout>
      </Sidebar>
        
       
        } />
        <Route  path="/challans" element={
          <Sidebar>
          <Layout>
          <DeliveryChallans />
      </Layout>
      </Sidebar>

        
        } />
        <Route  path="/addvendor" element={
               <Sidebar>
               <Layout>
               <AddVendor />
           </Layout>
           </Sidebar>
        
        } />
        <Route  path="/allvendors" element={
          <Sidebar>
          <Layout>
          <Allvendors />
      </Layout>
      </Sidebar>
        
        } />
        <Route  path="/purchase" element={
        <Sidebar>
        <Layout>
        <AddPurchase />
    </Layout>
    </Sidebar>
      
        } />
        <Route  path="/payments" element={
         <Sidebar>
         <Layout>
         <VendorPay />
     </Layout>
     </Sidebar>
       
        
        } />
        <Route  path="/allpayments" element={
        <Sidebar>
        <Layout>
        <Payments />
    </Layout>
    </Sidebar>
       
        } />
        <Route
          
          path="/challan_generate/:id"
          element={
            <Sidebar>
            <Layout>
            <AddDeliveryChallan />
        </Layout>
        </Sidebar>
         
        }
        />
        <Route  path="/vendors/:id" element={
        <Sidebar>
        <Layout>
        <Editvendor />
    </Layout>
    </Sidebar>
 
        } />
        <Route
          
          path="/deliverychallans"
          element={
            <Sidebar>
            <Layout>
            <DeliveryChallanDetails />
        </Layout>
        </Sidebar>
         
        }
        />
        <Route  path="/allinvoice" element={
         <Sidebar>
         <Layout>
         <AllInvoices />
     </Layout>
     </Sidebar>
       
        } />
        <Route  path="/pay" element={
          <Sidebar>
          <Layout>
          <PaymentsRecievded />
      </Layout>
      </Sidebar>
       
        } />
        <Route  path="/salereturn" element={
         <Sidebar>
         <Layout>
           
        <SalesReturns />
     </Layout>
     </Sidebar>
      
        } />
        <Route  path="/viewsale" element={
        <Sidebar>
        <Layout>
          
        <ViewsalesReturns />
    </Layout>
    </Sidebar>
      
        } />
        <Route  path="/addcredit" element={
        <Sidebar>
        <Layout>
          
        <AddCreditNote />
    </Layout>
    </Sidebar>
       } />
     
      </Routes>
    </>
  );
}

export default App;
