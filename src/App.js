import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Page_Account_Transactions from './pages/Page_Account_Transactions/Page_Account_Transactions';
import Page_Account_Transfer from './pages/Page_Account_Transfer/Page_Account_Transfer'
import Page_Account_Deposit from './pages/Page_Account_Deposit/Page_Account_Deposit';
import Page_Account_Withdraw from './pages/Page_Account_Withdraw/Page_Account_Withdraw';
import Page_Account_Exchange from './pages/Page_Account_Exchange/Page_Account_Exchange';
import Page_Account_MerchantAPI from './pages/Page_Account_MerchantAPI/Page_Account_MerchantAPI';
import Page_Account_Orders from './pages/Page_Account_Orders/Page_Account_Orders';
import Page_Account_Order_Details_Id from './pages/Page_Account_Order_Details_Id/Page_Account_Order_Details_Id';
import Page_Home from './pages/Page_Home/Page_Home';
import Page_About from './pages/Page_About/Page_About';
import Page_Login from './pages/Page_Login/Page_Login';
import Page_Signup from './pages/Page_Signup/Page_Signup';
import Page_Missing from './pages/Page_Missing/Page_Missing';
import Page_Account_Profile from './pages/Page_Account_Profile/Page_Account_Profile';
import Page_Email_Verification_Id from './pages/Page_Email_Verification_Id/Page_Email_Verification_Id';
import Page_Account_KYCCheck from './pages/Page_Account_KYCCheck/Page_Account_KYCCheck';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page_Home />}></Route>
        <Route path='/about' element={<Page_About />}></Route>
        <Route path='/login' element={<Page_Login />}></Route>
        <Route path='/signup' element={<Page_Signup />}></Route>
        <Route path='/email-verification/:emailid' element={<Page_Email_Verification_Id />}></Route>
        <Route path='/account' element={<Layout />}>
          <Route index path='transactions' element={<Page_Account_Transactions />}></Route>
          <Route path='transfer' element={<Page_Account_Transfer />}></Route>
          <Route path='deposit' element={<Page_Account_Deposit />}></Route>
          <Route path='withdraw' element={<Page_Account_Withdraw />}></Route>
          <Route path='exchange' element={<Page_Account_Exchange />}></Route>
          <Route path='merchant-api' element={<Page_Account_MerchantAPI />}></Route>
          <Route path='orders' element={<Page_Account_Orders />}></Route>
          <Route path='order-details/:orderid' element={<Page_Account_Order_Details_Id />}></Route>
          <Route path='profile' element={<Page_Account_Profile />}></Route>
          <Route path='kyc-check' element={<Page_Account_KYCCheck />}></Route>
        </Route>
        <Route path='/*' element={<Page_Missing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
