import React, { useEffect, useState } from 'react';

// Menus
import Menus from "../screens/control-setups/menu/menus";
import AddMenu from "../screens/control-setups/menu/add-menu";
import AddSubMenu from "../screens/control-setups/menu/add-sub-menu";
import AddMenuIcon from "../screens/control-setups/menu/add-menu-icon";

// Account Opening
import AccountOpening from '../screens/customer-activities/account-creation';

// My Approvals
import MyApprovals from '../screens/central-approval/my-approvals';

// Form Not Found
import PageNotFound from "../screens/form-not-found";

// User Creation
import UserCreation from '../screens/control-setups/users/user-creation';

// Group Access Maintenance
import GroupAccessMaintenance from './control-setups/menu/group-access-maintenance';


// Quick Account Opening
import QuickAccountOpening from "../screens/customer-activities/quick-account-opening";

//Teller Operations
// Cash Request From Vault
import CashRequestFromVault from "../screens/teller-ops/teller/cash-request-from-vault";
//Denomination Exchange
import DenominationExchange from "../screens/teller-ops/teller/denomination-exchange";
import CashOperation from "../screens/teller-ops/teller/cash-operation";

// Individual Account Opening
import IndividualAccountOpening from "../screens/customer-activities/individual-account-opening";

// Corporate Account Opening
import CorporateAccountOpening from "../screens/customer-activities/corporate-account-opening";

// Create Additional Account
import CreateAdditionalAccount from "./account-activities/additional-account/create-additional-account";

// Cheque Book Requisition
import ChequeBookRequisition from "./cheques/book-request/index";
import ChequeBookRequisitionApproval from "./cheques/book-request/cheque-book-requisition-approval";
// stopped cheques
import StoppedCheque from "./cheques/stopped-cheques/stopped-cheque-request";

// counter cheques
import CounterCheque from "./cheques/counter-cheque/counter-cheque-requisite";


// ACH OUTWARD
import ACHCORIGINATION from "./payment/outward-ach-single/achc-origination/achc-origination";
import ACHDORIGINATION from "./payment/outward-ach-single/achd-origination/achd-origination";

// OTT ORIGINATION
import OTT from "./payment/ott/ott-origination";

// FD Deal Entry
import FDDealEntry from "../screens/trans-processes/deposits-and-loans/FDDealEntry";

//Contingent Request Process
import ContingentRequest from "../screens/trade-finance/contingent-request-process/contingent-request";

//Guarantee/Bond
import InitiateGuaranteeBond from "../screens/trade-finance/guarantee-bond/initiate-guarantee-bond";
import CancelGuaranteeBond from "../screens/trade-finance/guarantee-bond/cancel-guarantee-bond";

//Documentary Credit Import
import ImportLCPayment from "./trade-finance/documentary-credit-import/import-lc-payment";
import ImportLCAcceptance from './trade-finance/documentary-credit-import/import-lc-acceptance';

//Import Bill for Collection
import ImportBillOrigination from './trade-finance/import-bills-for-collection/import-bill-for-collection-origination';


// place borrow entry internal
import PlaceBorrowEntryInternal from "./treasury/deposit-and-loans/PlaceBorrowEntryInternal";

// place borrow entry external
import PlaceBorrowEntryExternal from "./treasury/deposit-and-loans/PlaceBorrowEntryExternal";

// call account entry
import CallAccountEntry from "./trans-processes/deposits-and-loans/CallAccountEntry";

import CloseAccount from "./account-activities/close-account";
import StaticAmendment from "./customer-activities/static-amendment";
import Account_Blockage from "./account-activities/account-blockage";

//Single Payment
import SinglePayment from "./trans-processes/back-office/single-payment";

//Multiple Batch
import MultipleBatch from "./trans-processes/back-office/multiple-batch";

//Same Day Reversal
import SameDayReversal from "./trans-processes/transaction-reversals/same-day-reversal";


import UnnaprovedBlockage from "./account-activities/account-blockage/components/approve-blockage-table"
import UnnaprovedBlockageGlobal from "./account-activities/account-blockage/components/approve-blockage-global-table";

//Acct reacticvation
import DormantAccountReactivation from "./account-activities/dormant-account-reactivation";

//Lending
import LoanCancellation from "./lending/loan-restructuring/loan-cancellation";
import LoanQuotation from "./lending/facility-enquiry/loan-quotation";
import LoanReschedule from "./lending/loan-restructuring/loan-reschedule-payment";
import LoanWriteOff from "./lending/loan-restructuring/loan-write-off";
import CreditOrigination from "./lending/loans-overdrafts/credit-origination";

const Cases = ({ setModalSize, setFullScreen }) => {
  const formName = localStorage.getItem("formName");

  useEffect(() => {
    switch (formName) {
      case "Add Menu":
      case "Add Sub Menu":
      case "Add Menu Icon":
      case "User Creation":
      case "Group Access Maintenance":
        setModalSize("md");
        break;
      case "My Approvals":
      case "Account Blockage":
      case "Menus":
      // case "Quick Account Opening":
        setModalSize("lg");
        break;
      case "Cash Request from Vault":
      case "Create Additional Account":
      case "Denomination Exchange":
      case "FD Deal Entry":
      case "Single Payment":
      case "Multiple Batch":
      case "Same Day Reversal":
      case "Customer Data Amendment":
      case "Contingent Request":
      case "Initiate Guarantee or Bond":
      case "Cancel Guarantee or Bond":
      case "Import LC Payment":
      case "Import LC Acceptance":
      case "Import Bill for Collection Origination":
      case "Cheque Book Requisition":
      case "Cheque Book Requisition  Approval":
      case "Stopped Cheque Creation":
      case "Counter Cheque Requisite":
      case "Account Blockage":
      case "ACHC Origination":
      case "ACHD Origination":
      case "Call Account Entry":
      case "Place / Borrow Entry Internal":
      case "Place / Borrow Entry External":
      case "Approve Blockage":
      case "Approve Blockage Global":
      case "Create Additional Account":
      case "Corporate Account Opening":
      case "Individual Account Opening":
      case "Loan Cancellation":
      case "Loan Reschedule/Payment":
      case "Loan Write-Off":
      case "Dormant Acct Reactivation":
      case "Loan Quotation":
      case "Cash Operation":
      case "Credit Origination":
      case "Close Account":
      case "Quick Account Opening":
        setModalSize("xl");
        break;
      default:
        setModalSize("lg");
        break;
    }
  }, [formName, setModalSize]);

  switch (formName) {
    case "Menus":
      return <Menus />;
    case "Add Menu":
      return <AddMenu />;
    case "Add Sub Menu":
      return <AddSubMenu />;
    case "Add Menu Icon":
      return <AddMenuIcon />;
    case "My Approvals":
      return <MyApprovals />;
    case "User Creation":
      return <UserCreation />;
    case "Group Access Maintenance":
      return <GroupAccessMaintenance />;
    case "Cash Operation":
      return <CashOperation />;
    case "Cash Request from Vault":
      return <CashRequestFromVault />;
    case "Denomination Exchange":
      return <DenominationExchange />;
    case "FD Deal Entry":
      return <FDDealEntry />;
    case "Quick Account Opening":
      return <QuickAccountOpening />;
    case "Individual Account Opening":
      return <IndividualAccountOpening />;
    case "Corporate Account Opening":
      return <CorporateAccountOpening />;
    case "Single Payment":
      return <SinglePayment />;
    case "Multiple Batch":
      return <MultipleBatch />;
    case "Same Day Reversal":
      return <SameDayReversal />;
    case "Create Additional Account":
      return <CreateAdditionalAccount />;
    case "Close Account":
      return <CloseAccount />;
    case "Customer Data Amendment":
      return <StaticAmendment />;
    case "Account Blockage":
      return <Account_Blockage />;
    case "Approve Blockage":
      return <UnnaprovedBlockage />;
    case "Approve Blockage Global":
      return <UnnaprovedBlockageGlobal />;
    case "Dormant Acct Reactivation":
      return <DormantAccountReactivation />;
    case "Credit Origination":
      return <CreditOrigination />;
    case "Cash Operation":
      return <CashOperation />;
    case "Contingent Request":
      return <ContingentRequest />;
    case "Initiate Guarantee or Bond":
      return <InitiateGuaranteeBond />;
    case "Call Account Entry":
      return <CallAccountEntry />;
    case "Place / Borrow Entry Internal":
      return <PlaceBorrowEntryInternal />;
    case "Place / Borrow Entry External":
      return <PlaceBorrowEntryExternal />;
    case "Cancel Guarantee or Bond":
      return <CancelGuaranteeBond />;
    case "Import LC Payment":
      return <ImportLCPayment />;
    case "Import LC Acceptance":
      return <ImportLCAcceptance />;
    case "Import Bill for Collection Origination":
      return <ImportBillOrigination />;
    case "Cheque Book Requisition":
      return <ChequeBookRequisition />;
    case "Cheque Book Requisition  Approval":
      return <ChequeBookRequisitionApproval />;
    case "Stopped Cheque Creation":
      return <StoppedCheque />;
    case "Counter Cheque Requisite":
      return <CounterCheque />;
    case "Loan Cancellation":
      return <LoanCancellation />;
    case "Loan Reschedule/Payment":
      return <LoanReschedule />;
    case "Loan Write-Off":
      return <LoanWriteOff />;
    case "Loan Quotation":
      return <LoanQuotation />;
    case "Account Blockage":
      return <Account_Blockage />;
    case "ACHC Origination":
      return <ACHCORIGINATION />;
    case "ACHD Origination":
      return <ACHDORIGINATION />;
    default:
      return <PageNotFound />;
  }
};

export default Cases;