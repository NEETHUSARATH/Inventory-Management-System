import { FaTh, FaRegChartBar,FaFilePdf, FaCreditCard, FaRegFile, FaReceipt, FaFileInvoice } from "react-icons/fa";
import {MdPayments,MdOutlineAssignmentReturn } from "react-icons/md";
import {BiPurchaseTag, BiGroup} from "react-icons/bi";
import {TbFileDollar} from "react-icons/tb";
import AddIcon from "@mui/icons-material/Add";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import GroupIcon from "@mui/icons-material/Group";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/",
  },
  {
    title: "Inventory",
    icon: <InventoryIcon />,
    childrens: [
      {
        title: "Item",
        icon: <AddIcon />,
        path: "/AddItem",
      },
      {
        title: "Item Groups",
        icon: <GroupAddIcon />,
        path: "/ItemGroup",
      },
      {
        title: "Show all Items",
        icon: <ShowChartIcon />,
        path: "/ItemDash",
      },
      {
        title: "Inventory Adjustments",
        icon: <InventoryIcon/>,
        path: "/Inventory/:id",
      },
    ],
  },
  {
    title: "Sales",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Customers",
        icon: <GroupIcon />,
        path: "/customer",
      },
      {
        title: "Sales Orders",
        icon: <AddTaskIcon />,
        path: "/sales",
      },
      {
        title: "Package",
        icon: <LocalShippingIcon />,
        path: "/shipment",
      },
      {
        title: "Delivery Challans",
        icon: <FaReceipt />,
        path: "/challans",
      },
      {
        title: "Invoices",
        icon: <FaFileInvoice />,
        path: "/allinvoice",
      },
      {
        title: "Payments",
        icon: <MdPayments />,
        path: "/pay",
      },
      {
        title: "Sales Returns",
        icon: <MdOutlineAssignmentReturn/>,
        path: "/salereturn",
      },
      {
        title: "Credit Notes",
        icon: <TbFileDollar/>,
        path: "/addcredit",
      },
    ],
  },
  {
    title: "Purchases",
    icon: <BiPurchaseTag/>,
    childrens: [
      {
        title: "Vendors",
        icon: <BiGroup/>,
        path: "/addvendor",
      },
      {
        title: "Purchase Orders",
        icon: <AddTaskIcon/>,
        path: "/purchase",
      },
      {
        title: "Bills and Payments",
        icon: <FaCreditCard />,
        path: "/payments",
      },
      {
        title: "Vendor Credit",
        icon: <TbFileDollar />,
        path: "/addcredit",
      },
      
    ],
  },
  {
    title: "Reports",
    icon: <FaRegFile/>,
    childrens: [
      {
        title: "Summary Report",
        icon: <FaFilePdf/>,
        path: "/",
      },
      {
        title: "Aging Summary Report",
        icon: <FaFilePdf />,
        path: "/",
      },
      {
        title: "Product Sales Report",
        icon: <FaFilePdf/>,
        path: "/",
      },
      
      
    ],
  },
];

export default menu;
